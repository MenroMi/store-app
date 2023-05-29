import Layout from '@/components/Layout/MainLayout';
import Description from '@/components/UI/Product/Description/Description';
import ImagesGallery from '@/components/UI/Gallery/ImagesGallery/ImagesGallery';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { ProductContainer } from '@/styles/pageStyles/ProductStyles';
import { getDataWithField, getProductById, getProducts } from '@/services/productApi';
import { AttrFromData } from '@/types/cardListTypes';
import FullScreenLoader from '@/components/UI/Loader/FullScreenLoader';
import { IProductData, ISizesOptionsData } from '@/types/addProductTypes';

export interface ISingleProductPage {
    // product: IProductData;
    product: any;
    sizes: ISizesOptionsData[] | undefined;
}

export default function SingleProductPage({ product, sizes }: ISingleProductPage) {
    return (
        <Layout title="Product">
            <ProductContainer container>
                <ImagesGallery images={product.images.data}/>
                <Description product={product} sizes={sizes}/>
            </ProductContainer>
        </Layout>
    );
};

export async function getStaticProps({ params } : any) {

    const { data } = await getProductById(params.id);
    const sizes = await getDataWithField('sizes', 'value');
    return {
        props: {
            product: {...data.attributes, id: data.id},
            sizes
        },
    };
}

export async function getStaticPaths() {
    const products: any = await getProducts();
    // console.log(products);
    const paths = products.map((product: any) =>({
        params: {id: product.id.toString()},
    }));

    return {
        paths,
        fallback: 'blocking',
    };
}
