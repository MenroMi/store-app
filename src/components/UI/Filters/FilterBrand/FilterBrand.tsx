import Image from 'next/image';
import { InputAdornment, Box } from '@mui/material';
import React, { useState, Fragment } from 'react';

// images
import searchIcon from '@/assets/icons/search.svg';

// styled component
import { CustomTextField } from './styles';
import { useRouter } from 'next/router';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

// interface
interface IFilterBrand {
  label: string;
  inputs: object[];
}

const FilterBrand: React.FC<IFilterBrand> = ({ label, inputs }) => {
  const router = useRouter();
  let checked: boolean;
  const [searchingBrand, setSearchingBrand] = useState<string>('');

  const visibleBrandFilters = (inputs: any) => {
    return inputs.filter((input: any) =>
      input?.attributes?.name.toLowerCase().startsWith(searchingBrand.toLowerCase())
    );
  };

  return (
    <Box id={label} mt="20px">
      <CustomTextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchingBrand(e.target.value)}
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
        const {
          products: { data },
        } = attributes;

        if (data?.length <= 0) {
          return;
        }

        checked =
          typeof router.query.brand === 'undefined'
            ? false
            : router.query.brand?.includes(attributes?.name);

        return (
          <Fragment key={id}>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: '6px' }}>
              <FilterCheckbox
                id={id}
                label={label}
                attributes={attributes}
                checked={checked}
                styles={{ mr: '12px' }}
              />

              <Box component="p" sx={{ color: '#6e7278', fontWeight: '300' }}>
                ({data?.length > 100 ? '+100' : data?.length})
              </Box>
            </Box>
          </Fragment>
        );
      })}
    </Box>
  );
};

export default FilterBrand;
