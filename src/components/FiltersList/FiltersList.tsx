// basic
import Image from 'next/image';
// mui
import InputAdornment from '@mui/material/InputAdornment';
import { Box, Checkbox, FormControlLabel, Typography, Collapse } from '@mui/material';

// images
import searchIcon from '../../assets/icons/search.svg';

// styled components
import { CustomTextField } from './FilterListStyles';

// interfaces
import { FilterListRender, CategoriesList } from '@/types/filterListTypes';
import Filter from '../Filter/Filter';

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

// FUNCTION COMPONENT
const FiltersList: React.FC = (): JSX.Element => {
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
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: '6px' }} key={id}>
                          <FormControlLabel
                            label={
                              <Typography variant="h6" sx={{ fontWeight: '400' }}>
                                {label}
                              </Typography>
                            }
                            control={<Checkbox />}
                          />
                          <Box component="p" sx={{ color: '#6e7278', fontWeight: '300' }}>
                            (+{amount})
                          </Box>
                        </Box>
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
          <Filter key={id} label={label}>
            {isinputs(inputs, name)}
            {isSearchBrand(searchbar, categories!, name)}
            {isFilter(price, name)}
            {isFilter(color, name)}
          </Filter>
        );
      })}
    </>
  );
};

export default FiltersList;
