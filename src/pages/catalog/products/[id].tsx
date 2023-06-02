// basic
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

// layout
import Layout from '@/components/Layout/MainLayout';

// coponents
import Description from '@/components/UI/Product/Description/Description';
import ImagesGallery from '@/components/UI/Gallery/ImagesGallery/ImagesGallery';
import FullScreenLoader from '@/components/UI/Loader/FullScreenLoader';
import Notification from '@/components/UI/Notification/Notificaton';

// styles
import { ProductContainer } from '@/styles/pageStyles/ProductStyles';

// services
import { getDataWithField, getProductById } from '@/services/productApi';
import { IGetStaticProps } from '@/types/productTypes';
import { FiltersContext } from '@/providers/filters';

export default function SingleProductPage() {
  const router = useRouter();
  const productId = typeof router.query?.id === 'string' ? router.query.id : '';
  const contextFilters = useContext(FiltersContext);

  const { data: product, isLoading: productLoading } = useQuery(['product', productId], () =>
    getProductById(productId)
  );
  const { data: sizes, isLoading: sizesLoading } = useQuery(['sizes'], () =>
    getDataWithField('sizes', 'value')
  );

  useEffect(() => {
    let newActiveFilters = { ...contextFilters?.activeFilters };

    for (let key in newActiveFilters) {
      if (key === 'name') {
        continue;
      }

      delete newActiveFilters[key];
      continue;
    }

    return () => {
      contextFilters?.setActiveFilters({ ...newActiveFilters });
      return;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (productLoading || sizesLoading) {
    return <FullScreenLoader />;
  }

  return (
    <Layout title="Product">
      <ProductContainer container>
        <ImagesGallery images={product?.attributes?.images} />
        <Description product={product} sizes={sizes} />
      </ProductContainer>
      <Notification />
    </Layout>
  );
}

export async function getStaticProps({ params }: IGetStaticProps) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['product', params.id], () => getProductById(params.id));
  await queryClient.prefetchQuery(['sizes'], () => getDataWithField('sizes', 'value'));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
