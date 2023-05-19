import { useRouter } from 'next/router';

export const useParamsURL = () => {
  const router = useRouter();
  const { pathname, query } = router;

  const handleFiltersURL = (filterName: string, filterValue: any) => {
    const currentParams = query || {};

    const updatedParams: { [x: string]: string } = {
      ...currentParams,
      [filterName]: filterValue,
    };

    const searchParams = new URLSearchParams(updatedParams).toString();
    const newUrl = `${pathname}?${searchParams}`;

    router.push(newUrl);
  };

  return { handleFiltersURL };
};
