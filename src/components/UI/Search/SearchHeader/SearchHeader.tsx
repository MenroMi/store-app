// basic
import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import Image from 'next/image';

// services
import { getSearchProducts } from '@/services/searchApi';

// rq
import { useQuery } from '@tanstack/react-query';

// mui
import { Theme, useMediaQuery, useTheme, InputAdornment, Box, Typography } from '@mui/material';

// plugins
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// components
import FullScreenLoader from '@/components/UI/Loader/FullScreenLoader';
import SearchSliderMobile from '@/components/UI/Slider/SearchSliderMobile/SearchSliderMobile/SearchSliderMobile';
import SearchSliderDesktop from '@/components/UI/Slider/SearchSliderDesktop/SearchSliderDesktop/SearchSliderDesktop';

// images
import logo from '@/assets/icons/logo.svg';
import close from '@/assets/icons/close.svg';
import search from '@/assets/icons/search.svg';

// styled components
import {
  HeaderDiv,
  HeaderSearch,
  HeaderSearchContainer,
  HeaderSearchDiv,
  HeaderSearchLayout,
} from './styles';
import { CustomTypographyName } from '../../Cards/Card/CardStyles';
import { AttrFromData } from '@/types/cardListTypes';

// interface
interface ISearchHeaderProps {
  setSearchOpen: Dispatch<SetStateAction<boolean>>;
}
interface ISearchViewProps {
  products: AttrFromData[];
}

// mock data
const PopularSearch = ['Nike Air Force 1 LV8', 'Nike Air Force 1', `Nike Air Force 1 '07 High'`];

const SearchHeader = ({ setSearchOpen }: ISearchHeaderProps) => {
  const [popular, setPopular] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const { palette } = useTheme();
  const theme = useTheme<Theme>();
  const queryDownSm = useMediaQuery<unknown>(theme.breakpoints.down('sm'));
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));

  const { data } = useQuery({
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
                flexDirection: queryDownLg ? 'column' : 'row',
                justifyContent: 'space-between',
                gap: queryDownSm ? 1.5 : 3,
                height: '100%',
              }}
            >
              <Typography sx={{ order: 2, display: { lg: 'none', xs: 'block' } }}>
                Search result:
              </Typography>
              {typeof data === 'undefined' ? (
                <Box
                  sx={{
                    position: 'relative',
                    maxWidth: '1920px',

                    width: '100%',
                    order: { lg: 1, xs: 3 },
                  }}
                >
                  <FullScreenLoader />
                </Box>
              ) : queryDownLg ? (
                <SearchSliderMobile products={data} />
              ) : (
                <SearchSliderDesktop products={data} />
              )}
              <Box
                sx={{
                  maxWidth: '500px',
                  width: '100%',
                  display: { lg: 'block' },
                  order: { lg: 2 },
                }}
              >
                <Typography variant="h5" sx={{ color: palette.text.primary }}>
                  Popular Search Terms
                </Typography>
                <Box
                  sx={{
                    mt: '10px',
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