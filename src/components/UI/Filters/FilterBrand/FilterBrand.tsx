import Image from 'next/image';
import {
  FormControlLabel,
  Typography,
  Checkbox,
  useTheme,
  Theme,
  InputAdornment,
  Box,
  CheckboxProps,
} from '@mui/material';
import React, { useState, useContext, Fragment } from 'react';

// images
import searchIcon from '@/assets/icons/search.svg';

// context
import { FiltersContext } from '@/context/filtersContext';

// styled component
import { CustomTextField } from './styles';

// interface
interface IFilterBrand {
  label: string;
  inputs: object[];
}

const FilterBrand: React.FC<IFilterBrand> = ({ label, inputs }) => {
  const theme = useTheme<Theme>();
  const [searchingBrand, setSearchingBrand] = useState<string>('');
  const context = useContext(FiltersContext);

  // { id: number; attributes: { name: string } }[]

  const visibleBrandFilters = (inputs: any) => {
    return inputs.filter((input: any) =>
      input?.attributes?.name.toLowerCase().startsWith(searchingBrand.toLowerCase())
    );
  };

  const getAmounProducts = (brand: any) => {
    let res = brand?.products?.data?.filter(
      (product: { attributes: { teamName: string } }) => product?.attributes?.teamName === 'ea-team'
    );

    return res?.length > 100 ? '+' + res?.length : res?.length;
  };

  return (
    <Box id={label} mt="20px">
      <CustomTextField
        onChange={(e) => setSearchingBrand(e.target.value)}
        variant="outlined"
        placeholder="Search"
        value={searchingBrand}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {<Image src={searchIcon} alt="search bar" />}
            </InputAdornment>
          ),
        }}
      />
      {visibleBrandFilters(inputs).map((input: any) => {
        const { id, attributes } = input;

        return (
          <Fragment key={id}>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: '6px' }}>
              <FormControlLabel
                label={
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: '400', color: theme?.palette?.text?.caption }}
                  >
                    {attributes?.name}
                  </Typography>
                }
                control={
                  <Checkbox
                    id={`${id}`}
                    inputProps={{
                      datatype: label,
                    }}
                    name={attributes?.name}
                    sx={{ mr: '12px' }}
                    onClick={(e) => context?.isChecked(e)}
                  />
                }
              />
              <Box component="p" sx={{ color: '#6e7278', fontWeight: '300' }}>
                ({getAmounProducts(attributes)})
              </Box>
            </Box>
          </Fragment>
        );
      })}
    </Box>
  );
};

export default FilterBrand;
