// basic
import Image from 'next/image';
import { Fragment } from 'react';

// mui
import InputAdornment from '@mui/material/InputAdornment';
import { Box, Checkbox, FormControlLabel, Typography, useTheme, Theme } from '@mui/material';

// images
import searchIcon from '@/assets/icons/search.svg';

// components
import Filter from '@/components/UI/Filters/Filter/Filter';

// styled components
import { CustomTextField } from './FilterListStyles';

// interface
import { InputsData, IFiltersListProps } from '@/types/filterListTypes';

// FUNCTION COMPONENT
const FiltersList: React.FC<IFiltersListProps> = ({ filters }): JSX.Element => {
  const theme = useTheme<Theme>();

  const isinputs = (inputs: object[] | undefined, label: string) => {
    if (label === 'brand') {
      return (
        inputs && (
          <Box component="form" id={label} mt="20px">
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
            {inputs.map((input) => {
              const { id, attributes } = input as InputsData;
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
                      control={<Checkbox sx={{ mr: '12px' }} />}
                    />
                    <Box component="p" sx={{ color: '#6e7278', fontWeight: '300' }}>
                      (+{100})
                    </Box>
                  </Box>
                </Fragment>
              );
            })}
          </Box>
        )
      );
    }

    return (
      inputs && (
        <Box component="form" id={label} mt="13px">
          {inputs.map((input) => {
            const { id, attributes } = input as InputsData;

            return (
              <FormControlLabel
                label={
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: '400', color: theme?.palette?.text?.caption }}
                  >
                    {attributes.name}
                  </Typography>
                }
                control={<Checkbox sx={{ mr: '12px' }} />}
                key={id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mt: '15px',
                }}
              />
            );
          })}
        </Box>
      )
    );
  };

  const isFilter = (
    values: object[] | undefined,
    label: string
  ): JSX.Element | undefined | false => {
    switch (label) {
      case 'gender':
        return isinputs(values, label);
      case 'kids':
        return isinputs(values, label);
      case 'brand':
        return isinputs(values, label);
      case 'price':
        return isinputs(values, label);
      case 'color':
        return isinputs(values, label);
      default:
        return undefined;
    }
  };

  return (
    <>
      {filters &&
        filters.map(({ label, name, values }, id): JSX.Element => {
          return (
            <Filter key={id} name={name}>
              {isFilter(values, label)}
            </Filter>
          );
        })}
    </>
  );
};

export default FiltersList;
