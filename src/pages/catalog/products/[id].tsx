import Layout from '@/components/Layout/MainLayout';
import Description from '@/components/UI/Product/Description/Description';
import ImagesGallery from '@/components/UI/Gallery/ImagesGallery/ImagesGallery';
import FullScreenLoader from '@/components/UI/Loader/FullScreenLoader';

import { ProductContainer } from '@/styles/pageStyles/ProductStyles';
import { getDataWithField, getProductById } from '@/services/productApi';
import { IGetStaticProps } from '@/types/productTypes';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export default function SingleProductPage() {
    const router = useRouter();
    const productId = typeof router.query?.id === "string" ? router.query.id : "";
    
    const { data: product, isLoading: productLoading } = useQuery(['product', productId], () => getProductById(productId));
    const { data: sizes, isLoading: sizesLoading } = useQuery(['sizes'], () => getDataWithField('sizes', 'value'));

    if (productLoading || sizesLoading) {
        return <FullScreenLoader />;
    }

    return (
        <Layout title="Product">
            <ProductContainer container>
                <ImagesGallery images={product?.attributes?.images}/>
                <Description product={product} sizes={sizes}/>
            </ProductContainer>
        </Layout>
    );
};

export async function getStaticProps({ params } : IGetStaticProps ) {
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
