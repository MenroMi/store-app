import { FiltersContext } from '@/contexts/filtersContext';
import { getFilteredData } from '@/services/searchApi';
import { Pagination } from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

const PaginationMui: React.FC = () => {
  const router = useRouter();
  // const [page, setPage] = useState(1);
  // const context = useContext(FiltersContext);
  // const { data, isFetched, isLoading, isPreviousData } = useQuery({
  //   queryKey: ['filteredData', router.query],
  //   queryFn: () => getFilteredData(router.query),
  //   keepPreviousData: true,
  // });

  // useEffect(() => {
  //   const onActualPage = () => {
  //     if (
  //       typeof router.query.page !== 'undefined' &&
  //       router.query.page <= data?.meta?.pagination?.pageCount
  //     ) {
  //       setPage(data?.meta?.pagination?.page);
  //       return;
  //     } else {
  //       context?.setPage();
  //       return;
  //     }
  //   };

  //   onActualPage();
  // }, [data?.data]);

  return (
    <Pagination
      page={1}
      onClick={(e) => e}
      count={1}
      shape="rounded"
      color="primary"
      size="large"
    />
  );
};

export default PaginationMui;
