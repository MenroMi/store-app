import Layout from '@/components/Layout/MainLayout';
import Description from '@/components/UI/Product/Description/Description';
import ImagesGallery from '@/components/UI/Gallery/ImagesGallery/ImagesGallery';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { ProductContainer } from '@/styles/pageStyles/ProductStyles';
import { getDataWithField } from '@/services/productApi';

export default function SingleProductPage() {
    const { data: sizesData } = useQuery(['sizes'], () => getDataWithField('sizes', 'value'));

    return (
        <Layout title="Product">
            <ProductContainer container>
                <ImagesGallery />
                <Description sizes={sizesData}/>
            </ProductContainer>
        </Layout>
    );
};

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await Promise.all([
        queryClient.prefetchQuery(['brands'], () => getDataWithField('brands')),
        queryClient.prefetchQuery(['genders'], () => getDataWithField('genders')),
        queryClient.prefetchQuery(['categories'], () => getDataWithField('categories')),
        queryClient.prefetchQuery(['sizes'], () => getDataWithField('sizes', 'value')),
    ]);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}
