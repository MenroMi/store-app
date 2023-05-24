// basic
import { useContext } from 'react';

// mui
import { useTheme, Theme } from '@mui/material';

// context
import { FiltersContext } from '@/contexts/filtersContext';

// components
import Filter from '@/components/UI/Filters/Filter/Filter';
import FilterCheckbox from '@/components/UI/Filters/FilterCheckbox/FilterCheckbox';

// interface
import { InputsData } from '@/types/filterListTypes';
import FilterBrand from '../FilterBrand/FilterBrand';
import FilterPrice from '../FilterPrice/FilterPrice';
import { useRouter } from 'next/router';

// FUNCTION COMPONENT
const FiltersList: React.FC = (): JSX.Element => {
  const context = useContext(FiltersContext);
  const router = useRouter();

  const isInputs = (inputs: object[], label: string) => {
    switch (label) {
      case 'brand':
        return inputs && <FilterBrand label={label} inputs={inputs} />;
      case 'price':
        return inputs && <FilterPrice />;
      default:
        return (
          inputs &&
          inputs.map((input) => {
            const { id, attributes } = input as InputsData;

            let checked =
              typeof router.query.gender === 'undefined'
                ? false
                : router.query.gender?.includes(attributes?.name!.toLowerCase());

            return (
              <FilterCheckbox
                label={label}
                key={id}
                id={id}
                attributes={attributes}
                checked={checked}
              />
            );
          })
        );
    }
  };

  const isFilter = (values: object[], label: string): JSX.Element | undefined | JSX.Element[] => {
    switch (label) {
      case 'gender':
        return isInputs(values, label);
      case 'kids':
        return isInputs(values, label);
      case 'brand':
        return isInputs(values, label);
      case 'price':
        return isInputs(values, label);
      case 'color':
        return isInputs(values, label);
      default:
        return undefined;
    }
  };

  return (
    <>
      {context?.data &&
        context?.data.map(({ label, name, values }, id): JSX.Element => {
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
