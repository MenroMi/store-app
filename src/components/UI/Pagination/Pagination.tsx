import { FiltersContext } from '@/contexts/filtersContext';
import { getFilteredData } from '@/services/searchApi';
import { Pagination } from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

const PaginationMui: React.FC = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const context = useContext(FiltersContext);

  const { data, isFetched } = useQuery({
    queryKey: ['filteredData', router.query],
    queryFn: () => getFilteredData(router.query),
    keepPreviousData: true,
  });

  const onChangePage = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let target = e.target as HTMLElement;
    let actualPage: number;

    if (target?.tagName === 'svg') {
      if (target.dataset.testid === 'NavigateNextIcon') {
        actualPage = page + 1;

        setPage((prev) => prev + 1);
        context?.setPage(actualPage);
        return;
      }
      actualPage = page - 1;
      setPage((prev) => prev - 1);
      context?.setPage(actualPage);
      return;
    }

    if (target?.tagName === 'BUTTON') {
      if (target.textContent) {
        actualPage = +target.textContent;
        setPage(+target?.textContent);
        context?.setPage(actualPage);
      }

      return;
    }
  };

  useEffect(() => {
    if (isFetched) {
      const onActualPage = () => {
        const queryPage = parseInt(router.query.page as string);

        if (typeof router.query.page === 'undefined' || queryPage === 1) {
          setPage(1);
          context?.setPage(1);
        }

        setMaxPage(data?.meta?.pagination?.pageCount);
      };
      onActualPage();
    }
  }, [data?.data]);

  return (
    <Pagination
      page={page}
      onClick={(e) => onChangePage(e)}
      count={maxPage}
      shape="rounded"
      color="primary"
      size="large"
    />
  );
};

export default PaginationMui;
