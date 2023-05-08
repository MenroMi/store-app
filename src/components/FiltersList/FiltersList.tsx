// basic
import Image from 'next/image';

// mui
import InputAdornment from '@mui/material/InputAdornment';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// images
import arrowIcon from '../../assets/icons/down.svg';
import searchIcon from '../../assets/icons/search.svg';

// interface
import { FilterListRender, CategoriesList } from '@/types/filterListTypes';

// styles
import { CustomTextField, CustomFilterHeader } from './FilterListStyles';

// filters hardcode
const filters = [
  { name: 'gender', label: 'Gender', id: 1, inputs: ['Men', 'Women'] },
  { name: 'kids', label: 'Kids', id: 2, inputs: ['Boys', 'Girls'] },
  {
    name: 'brand',
    label: 'Brand',
    id: 3,
    searchbar: true,
    categories: [
      { name: 'adidas', label: 'Adidas', amount: 350, id: 1 },
      { name: 'asics', label: 'Asics', amount: 840, id: 2 },
      { name: 'new-balance', label: 'New Balance', amount: 840, id: 3 },
      { name: 'nike', label: 'Nike', amount: 500, id: 4 },
      { name: 'puma', label: 'Puma', amount: 350, id: 5 },
      { name: 'reebok', label: 'Reebok', amount: 97, id: 6 },
    ],
  },
  { name: 'price', label: 'Price', id: 4 },
  { name: 'color', label: 'Color', id: 5 },
];

export default function FiltersList(): JSX.Element {
  const theme = useTheme();

  const isinputs = (inputs: string[] | undefined, name: string) => {
    return (
      inputs && (
        <Box component="form" id={name} mt="13px">
          {inputs.map((elem: string) => (
            <FormControlLabel
              label={
                <Typography variant="h6" sx={{ fontWeight: '400' }}>
                  {elem}
                </Typography>
              }
              control={<Checkbox />}
              key={elem}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mt: '16px',
                color: theme?.palette?.text?.caption,
                ml: '0',
              }}
            />
          ))}
        </Box>
      )
    );
  };

  const isSearchBrand = (
    searchbar: boolean | undefined,
    categories: CategoriesList[],
    name: string
  ): false | JSX.Element | undefined => {
    return (
      searchbar && (
        <Box component="form" id={name} mt="20px">
          {
            <>
              <CustomTextField
                variant="outlined"
                placeholder="Search"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {<Image src={searchIcon} alt="search bar" />}
                    </InputAdornment>
                  ),
                }}
              />
              <div>
                {categories &&
                  categories.map(
                    ({
                      id,
                      label,
                      amount,
                    }: {
                      id: number;
                      amount: number;
                      label: string;
                    }): JSX.Element => {
                      return (
                        <div style={{ display: 'flex', alignItems: 'center' }} key={id}>
                          <FormControlLabel
                            label={
                              <Typography variant="h6" sx={{ fontWeight: '400' }}>
                                {label}
                              </Typography>
                            }
                            control={<Checkbox />}
                            sx={{
                              m: '13px 0 0 0',
                              display: 'flex',
                              alignItems: 'center',
                              fontWeight: '400',
                              '	.MuiFormControlLabel-label': {
                                color: theme?.palette?.text?.caption,
                              },
                            }}
                          />
                          <Box
                            component="p"
                            sx={{ m: '13px 0 0 5px', p: '0', color: '#6e7278', fontWeight: '300' }}
                          >
                            (+{amount})
                          </Box>
                        </div>
                      );
                    }
                  )}
              </div>
            </>
          }
        </Box>
      )
    );
  };

  const isFilter = (prop: object | undefined, name: string): JSX.Element | undefined | false => {
    switch (name) {
      case 'price':
        return prop && <p>price</p>;
      case 'color':
        return prop && <p>color</p>;
      default:
        return undefined;
    }
  };

  return (
    <>
      {filters.map((props: FilterListRender): JSX.Element => {
        const { name, label, id, searchbar, inputs, categories, color, price } = props;

        return (
          <Box
            key={id}
            sx={{
              borderBottom: '1px solid #eaecf0',
              p: '0 0 28px 39px',
              mt: '23px',
              width: '320px',
              height: '100%',
            }}
          >
            <CustomFilterHeader>
              <Typography variant="h6">{label}</Typography>
              <Image
                src={arrowIcon}
                alt="arrow for dropdown list with filters"
                style={{ marginRight: '10px' }}
              />
            </CustomFilterHeader>
            {isinputs(inputs, name)}
            {isSearchBrand(searchbar, categories!, name)}
            {isFilter(price, name)}
            {isFilter(color, name)}
          </Box>
        );
      })}
    </>
  );
}
