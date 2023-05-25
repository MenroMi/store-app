// basic
import { useState } from 'react';
import { useRouter } from 'next/router';
import { QueryClient, dehydrate, useMutation, useQuery } from '@tanstack/react-query';

// mui
import { Box } from '@mui/material';

// layout
import Layout from '@/components/Layout/MainLayout';

// components
import AsideProfileMenu from '@/components/UI/Sidebar/AsideProfileMenu/AsideProfileMenu';
import FormAddProduct from '@/components/Forms/FormAddProduct/FormAddProduct';
import FullScreenLoader from '@/components/UI/Loader/FullScreenLoader';

// constants
import { Routes } from '@/constants';

// services
import { getDataWithField, getUserID, postProduct, uploadImage } from '@/services/addProductApi';
import { IProductData, ISelectedImage } from '@/types/addProductTypes';

export default function AddProduct() {
  const { data: brandsData } = useQuery(['brands'], () => getDataWithField('brands'));
  const { data: gendersData } = useQuery(['genders'], () => getDataWithField('genders'));
  const { data: categoriesData } = useQuery(['categories'], () => getDataWithField('categories'));
  const { data: sizesData } = useQuery(['sizes'], () => getDataWithField('sizes', 'value'));
  const { data: id } = useQuery(['id'], () => getUserID(token));

  const [productName, setProductName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // urls of images. used to show the image on the screen
  const [selectedImages, setSelectedImages] = useState<ISelectedImage[]>([]);
  // files that will be sent to the server
  const [imagesToPost, setImagesToPost] = useState<File[]>([]);

  // hardcoded token, later will be replaced with token from the server
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMwLCJpYXQiOjE2ODMyMTYyMDUsImV4cCI6MTY4NTgwODIwNX0.1XQ60Efb97NerIhgLLgX-HU5Lnb7z6Rr9YH-M2JJNDQ';

  const router = useRouter();

  // submit the form
  const { mutate, isLoading } = useMutation((images: File[]) => handlePostProduct(images));

  if (isLoading) return <FullScreenLoader />;

  // executes when we add an image
  const handleChooseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.currentTarget?.files?.[0];

    if (image && selectedImages.length < 4) {
      // create url of the image to show the image on the screen
      setSelectedImages((prevState) => [
        ...prevState,
        { id: image.lastModified, url: URL.createObjectURL(image) },
      ]);
      setImagesToPost((prevState) => [...prevState, image]);
    }
  };

  const handlePostProduct = async (images: File[]) => {
    // promises to upload all images to server
    const uploadPromises = images.map((image: File) => uploadImage(image));

    try {
      // upload all images
      const responses = await Promise.all(uploadPromises);

      // get image ids returned from server
      const imageIds = responses.map((response) => response.data[0].id);

      const productData: IProductData = {
        data: {
          description: description,
          images: imageIds,
          name: productName,
          categories: category,
          price: +price,
          brand: brand,
          gender: gender,
          teamName: 'ea-team',
          uniqueID: Date.now(),
          size: selectedSize,
          userID: id?.data.id,
        },
      };

      return postProduct(productData, token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    mutate(imagesToPost, {
      onSuccess: () => router.push(Routes.myProducts),
      onError: () => router.push(Routes.error500),
    });
  };
  return (
    <Layout title="Add Product">
      <Box sx={{ display: 'flex', gap: '60px', mt: '38px' }}>
        <AsideProfileMenu />
        <FormAddProduct
          isLoading={isLoading}
          sizes={sizesData}
          productName={productName}
          price={price}
          brand={brand}
          category={category}
          gender={gender}
          description={description}
          selectedImages={selectedImages}
          selectedSize={selectedSize}
          brandsOptions={brandsData}
          gendersOptions={gendersData}
          handleChooseImage={handleChooseImage}
          handleSelectSize={setSelectedSize}
          handleSubmit={handleSubmit}
          setSize={setSelectedSize}
          setBrand={setBrand}
          setPrice={setPrice}
          setCategory={setCategory}
          setDescription={setDescription}
          setGender={setGender}
          setProductName={setProductName}
          categoryOptions={categoriesData}
        />
      </Box>
    </Layout>
  );
}

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
