// basic
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { QueryClient, dehydrate, useMutation, useQuery } from '@tanstack/react-query';

// mui
import { Box, Modal } from '@mui/material';

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

// interfaces
import { IProductData } from '@/types/addProductTypes';

// context
import { ImagesContext } from '@/components/Providers/images';

export default function AddProduct() {
  const { data: brandsData } = useQuery(['brands'], () => getDataWithField('brands'));
  const { data: gendersData } = useQuery(['genders'], () => getDataWithField('genders'));
  const { data: categoriesData } = useQuery(['categories'], () => getDataWithField('categories'));
  const { data: sizesData } = useQuery(['sizes'], () => getDataWithField('sizes', 'value'));
  const { data: id } = useQuery(['id'], () =>
    getUserID(localStorage.getItem('token') || sessionStorage.getItem('token') || 'guest')
  );

  const [productName, setProductName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCategory] = useState<string>('5');
  const [gender, setGender] = useState<string>('3');
  const [brand, setBrand] = useState<string>('9');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // urls of images. used to show the image on the screen
  const { selectedImages, setSelectedImages } = useContext(ImagesContext);
  // files that will be sent to the server
  // const [imagesToPost, setImagesToPost] = useState<File[]>([]);

  const router = useRouter();

  // submit the form
  const { mutate, isLoading } = useMutation((images: File[]) => handlePostProduct(images));

  if (isLoading) return <FullScreenLoader />;

  // executes when we add an image
  const handleChooseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.currentTarget?.files?.[0];
    if (selectedImages) {
      if (image && selectedImages?.length < 4) {
        // create url of the image to show the image on the screen
        setSelectedImages((prevState) => [
          ...prevState,
          { id: Date.now(), url: URL.createObjectURL(image), imageFile: image },
        ]);
      }
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

      return postProduct(
        productData,
        localStorage.getItem('token') || sessionStorage.getItem('token') || 'guest'
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    if (selectedImages && selectedImages?.length > 0) {
      const imagesToPost = selectedImages?.map((image) => image.imageFile);
      mutate(imagesToPost, {
        onSuccess: () => router.push(Routes.myProducts),
        onError: () => router.push(Routes.error500),
      });
    }
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
