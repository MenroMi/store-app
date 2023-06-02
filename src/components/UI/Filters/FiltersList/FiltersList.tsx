// basic
import { useRouter } from 'next/router';
import { useContext } from 'react';

// context
import { FiltersContext } from '@/providers/filters';

// components
import Filter from '@/components/UI/Filters/Filter/Filter';
import FilterCheckbox from '@/components/UI/Filters/FilterCheckbox/FilterCheckbox';
import FilterBrand from '@/components/UI/Filters/FilterBrand/FilterBrand';
import FilterPrice from '@/components/UI/Filters/FilterPrice/FilterPrice';

// interface
import { InputsData } from '@/types/filterListTypes';

// FUNCTION COMPONENT
const FiltersList: React.FC = (): JSX.Element => {
  const context = useContext(FiltersContext);
  const router = useRouter();

  const isInputs = (inputs: InputsData[], label: string) => {
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
              typeof router.query[label] === 'undefined'
                ? false
                : router.query[label]?.includes(attributes?.name!);

            return (
              <FilterCheckbox
                label={label}
                key={id}
                id={id}
                attributes={attributes}
                checked={checked!}
                styles={{
                  display: 'flex',
                  alignItems: 'center',
                  mt: '15px',
                }}
              />
            );
          })
        );
    }
  };

  const isFilter = (
    values: InputsData[],
    label: string
  ): JSX.Element | undefined | JSX.Element[] => {
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
