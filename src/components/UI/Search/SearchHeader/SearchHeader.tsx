// basic
import React, { ChangeEvent, Dispatch, SetStateAction, useContext, useState } from 'react';
import Image from 'next/image';

// context
import { FiltersContext } from '@/providers/filters';

// services
import { getSearchProducts } from '@/services/searchApi';

// mui
import {
  Theme,
  useMediaQuery,
  useTheme,
  InputAdornment,
  Box,
  Typography,
  Button,
} from '@mui/material';

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
import emptyIcon from '@/assets/icons/empty.svg';

// styled components
import {
  ButtonSeeAll,
  HeaderDiv,
  HeaderSearch,
  HeaderSearchContainer,
  HeaderSearchDiv,
  HeaderSearchLayout,
} from './styles';
import SearchPopularTerms from '../SearchPopularTerms/SearchPopularTerms';
import useDebounceQuery from '@/hooks/useDebounceQuery';
import onRedirectToFilterPage from '@/utils/search/onRedirectToFilterPage';

// interface
interface ISearchHeaderProps {
  setSearchOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchHeader = ({ setSearchOpen }: ISearchHeaderProps) => {
  const contextFilters = useContext(FiltersContext);
  const [inputValue, setInputValue] = useState<string>('');
  const theme = useTheme<Theme>();
  const queryDownSm = useMediaQuery<unknown>(theme.breakpoints.down('sm'));
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));
  const { data, isFetched } = useDebounceQuery(
    ['searchData', inputValue],
    () => getSearchProducts(inputValue),
    500
  );

  const onClickPopularTerm = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const value = e.target as HTMLElement;

    setInputValue(value.textContent!);
  };

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
                gap: queryDownSm ? 1.5 : 5,
                height: '100%',
              }}
            >
              <SearchPopularTerms onChangeSearchTerm={(e) => onClickPopularTerm(e)} />
              <Typography sx={{ order: 2, display: { lg: 'none', xs: 'block' } }}>
                Search result:
              </Typography>
              {typeof data === 'undefined' || !isFetched ? (
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
              ) : isFetched && !/Error/g.test(data?.name) ? (
                queryDownLg ? (
                  <SearchSliderMobile products={data} />
                ) : (
                  <SearchSliderDesktop products={data} />
                )
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: '2',
                  }}
                >
                  <Box
                    component={Image}
                    src={emptyIcon}
                    alt="catalog is empty"
                    priority={true}
                    sx={{ width: '72px', height: '72px', opacity: '0.1' }}
                  />
                  <Typography
                    variant="h4"
                    sx={{ opacity: '0.5', width: '100%', textAlign: 'center' }}
                  >
                    Oops... {data?.msg!}. Please try again later
                  </Typography>
                </Box>
              )}
            </Box>
          </HeaderDiv>
          <ButtonSeeAll
            onClick={() => onRedirectToFilterPage(contextFilters, inputValue, setSearchOpen)}
          >
            {`See all ` + inputValue}
          </ButtonSeeAll>
        </>
      </HeaderSearchContainer>
    </HeaderSearchLayout>
  );
};

export default SearchHeader;
