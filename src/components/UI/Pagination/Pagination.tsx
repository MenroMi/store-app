import { FiltersContext } from '@/providers/filters';
import { getFilteredData } from '@/services/searchApi';
import { Pagination } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

// utils
import makeArray from '@/utils/filters/makeRouterQueryArray';

const PaginationMui: React.FC = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const context = useContext(FiltersContext);

  const query = makeArray(router.query);

  const { data, isFetched } = useQuery({
    queryKey: ['filteredData', query],
    queryFn: () => getFilteredData(query),
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
        } else if (data?.meta?.pagination?.pageCount < page) {
          setPage(1);
          context?.setPage(1);
        } else if (queryPage) {
          setPage(queryPage);
          context?.setPage(queryPage);
        }

        setMaxPage(data?.meta?.pagination?.pageCount);
      };
      onActualPage();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data]);

  return !/Error/g.test(data?.name) && data?.data !== undefined && data?.data.length > 0 ? (
    <Pagination
      sx={{
        display: `${Object.entries(router.query).length > 0 && maxPage === 0 ? 'none' : 'block'}`,
      }}
      page={page}
      onClick={(e) => onChangePage(e)}
      count={maxPage}
      shape="rounded"
      color="primary"
      size="large"
    />
  ) : null;
};

export default PaginationMui;
