import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Theme,
  useMediaQuery,
  useTheme,
  InputAdornment,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/icons/logo.svg';
import close from '@/assets/icons/close.svg';
import search from '@/assets/icons/search.svg';
import {
  HeaderDiv,
  HeaderSearch,
  HeaderSearchContainer,
  HeaderSearchDiv,
  HeaderSearchLayout,
} from './styles';
import FullScreenLoader from '../../Loader/FullScreenLoader';
import { getSearchProducts } from '@/services/searchApi';
import { useQuery } from '@tanstack/react-query';
import SearchHeaderSlider from '../../Slider/SearchSlider/SearchHeaderSlider';
import { CustomTypographyName, CustomTypographyWrapper } from '../../Cards/Card/CardStyles';

interface ISearchHeaderProps {
  setSearchOpen: Dispatch<SetStateAction<boolean>>;
}

const PopularSearch = ['Nike Air Force 1 LV8', 'Nike Air Force 1', `Nike Air Force 1 '07 High'`];

const SearchHeader = ({ setSearchOpen }: ISearchHeaderProps) => {
  const [popular, setPopular] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const { palette } = useTheme();
  const theme = useTheme<Theme>();
  const queryDownSm = useMediaQuery<unknown>(theme.breakpoints.down('sm'));

  const { data, isFetched, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ['searchData', inputValue],
    queryFn: () => getSearchProducts(inputValue),
  });

  useEffect(() => {
    setPopular(PopularSearch);
  }, [popular]);

  return (
    <HeaderSearchLayout>
      <HeaderSearchContainer>
        <HeaderSearchDiv>
          {!queryDownSm && (
            <Image
              src={logo}
              alt={'logoIcon'}
              style={{
                cursor: 'pointer',
                alignSelf: 'flex-start',
              }}
              priority={true}
              width={40}
              height={30}
            />
          )}
          <HeaderSearch
            onClick={() => {
              setSearchOpen(true);
            }}
            type="search"
            placeholder="Search"
            size="small"
            value={inputValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setInputValue(event.target.value);
            }}
            autoFocus
            InputProps={{
              style: {
                height: '100%',
              },
              startAdornment: (
                <InputAdornment position="start">
                  <Image
                    width={queryDownSm ? 11 : 28}
                    height={queryDownSm ? 11 : 28}
                    priority={true}
                    src={search}
                    alt="search-icon"
                    style={{ marginLeft: queryDownSm ? '-3px' : '14px' }}
                  />
                </InputAdornment>
              ),
              autoComplete: 'off',
            }}
          />
          <Image
            src={close}
            alt={'close'}
            style={{
              cursor: 'pointer',
            }}
            priority={true}
            width={queryDownSm ? 10 : 27}
            height={queryDownSm ? 10 : 27}
            onClick={() => setSearchOpen(false)}
          />
        </HeaderSearchDiv>
        <>
          <HeaderDiv>
            <Box
              sx={{
                mt: queryDownSm ? 1 : 3,
                display: 'flex',
                justifyContent: 'space-between',
                gap: queryDownSm ? 1.5 : 3,
                height: '100%',
              }}
            >
              {typeof data === 'undefined' ? (
                <Box
                  sx={{
                    position: 'relative',
                    maxWidth: '1920px',
                    width: '100%',
                  }}
                >
                  <FullScreenLoader />
                </Box>
              ) : (
                <SearchHeaderSlider products={data} />
              )}
              <Box sx={{ maxWidth: '500px', width: '100%', display: { lg: 'block', xs: 'none' } }}>
                <Typography variant="h5" sx={{ color: palette.text.primary }}>
                  Popular Search Terms
                </Typography>
                <Box
                  sx={{
                    mt: '10px',
                    padding: '5px 5px 5px 0',
                  }}
                >
                  {popular.map((search) => (
                    <CustomTypographyName
                      variant="subtitle1"
                      key={search}
                      sx={{
                        cursor: 'pointer',
                        '&:hover': { color: palette.primary.main },
                        fontSize: { xl: '28px', md: '20px' },
                      }}
                      onClick={() => {
                        console.log(search);
                      }}
                    >
                      {search}
                    </CustomTypographyName>
                  ))}
                </Box>
              </Box>
            </Box>
          </HeaderDiv>
        </>
      </HeaderSearchContainer>
    </HeaderSearchLayout>
  );
};

export default SearchHeader;
