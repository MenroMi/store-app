// basic
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';

// context
import { FiltersContext } from '@/contexts/filtersContext';

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
  ButtonSeeAll,
  HeaderDiv,
  HeaderSearch,
  HeaderSearchContainer,
  HeaderSearchDiv,
  HeaderSearchLayout,
} from './styles';

// interface
interface ISearchHeaderProps {
  setSearchOpen: Dispatch<SetStateAction<boolean>>;
}

// mock data
const PopularSearch = ['Nike Air Force 1 LV8', 'Nike Air Force 1', `Nike Air Force 1 '07 High'`];

const SearchHeader = ({ setSearchOpen }: ISearchHeaderProps) => {
  const contextFilters = useContext(FiltersContext);
  const [popular, setPopular] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
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

  const onRedirectToFilterPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let searchObj: {
      [x: string]: string[];
    };

    if (inputValue.length <= 0) {
      searchObj = {
        name: [],
      };
      contextFilters!.setActiveFilters(searchObj);
      contextFilters!.setPage(1);
      setSearchOpen(false);
      return;
    } else {
      searchObj = {
        name: [`${inputValue}`],
      };

      contextFilters!.setActiveFilters(searchObj);
      contextFilters!.setPage(1);
      setSearchOpen(false);
      return;
    }
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
            </Box>
          </HeaderDiv>
          <ButtonSeeAll onClick={(e) => onRedirectToFilterPage(e)}>
            {`See all ` + inputValue}
          </ButtonSeeAll>
        </>
      </HeaderSearchContainer>
    </HeaderSearchLayout>
  );
};

export default SearchHeader;

{
  /* <Box
                sx={{
                  maxWidth: '500px',
                  width: '100%',
                  display: { lg: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
                  order: { lg: 2 },
                }}
              >
                <Typography variant="h5" sx={{ color: palette.text.primary }}>
                  Popular Search Terms
                </Typography>
                <Box
                  sx={{
                    mt: '10px',
                    flex: '2',
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
              </Box> */
}

// useEffect(() => {
//   let timerId: NodeJS.Timeout;

//   // const handleSearch = () => {
//   //   setTimeout(() => {
//   //     setLoading(false);
//   //   }, 2000);
//   // }

//   if (inputValue.replace(/\s/g, '')) {
//     timerId = setTimeout(handleSearch, 1500);
//   }
//   return () => {
//     clearTimeout(timerId);
//   };
// }, [inputValue]);
