// basic
import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

// mui
import { Box } from '@mui/material';

// layout
import Layout from '@/components/Layout/MainLayout';

// components
import AsideProfileMenu from '@/components/UI/Sidebar/AsideProfileMenu/AsideProfileMenu';
import FormProduct from '@/components/Forms/FormProduct/FormProduct';

// constants
import { Routes } from '@/constants/routes';

// services
import { getDataWithField, getUserID, postProduct, uploadImage } from '@/services/productApi';
import { IProductData } from '@/types/formProductTypes';

// context
import { ImagesContext } from '@/providers/images';
import { ModalContext } from '@/providers/modal';
import { NotificationContext } from '@/providers/notification';

export default function AddProduct() {
  // useQuery
  const { data: brandsData } = useQuery(['brands'], () => getDataWithField('brands'));
  const { data: gendersData } = useQuery(['genders'], () => getDataWithField('genders'));
  const { data: categoriesData } = useQuery(['categories'], () => getDataWithField('categories'));
  const { data: sizesData } = useQuery(['sizes'], () => getDataWithField('sizes', 'value'));
  const { data: id } = useQuery(['id'], () =>
    getUserID(localStorage.getItem('token') || sessionStorage.getItem('token') || 'guest')
  );

  const queryClient = useQueryClient();

  const { mutate } = useMutation((images: any) => handlePostProduct(images), {
    onSuccess: () => {
      setIsOpen(true);
      setMessage('Product had been added successfully!');
      setIsFailed(false);
      setClickedId(null);
      setSelectedImages([]);
      queryClient.invalidateQueries(['userProducts']);
      router.push(Routes.myProducts);
    },
    onError: () => {
      setClickedId(null);
      setSelectedImages([]);
      router.push(Routes.error500);
    },
  });

  // states
  const [loading, setLoading] = useState<boolean>(false);
  const [productName, setProductName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCategory] = useState<string>('5');
  const [gender, setGender] = useState<string>('3');
  const [brand, setBrand] = useState<string>('9');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // contexts
  const { setClickedId } = useContext(ModalContext);
  const { selectedImages, setSelectedImages, setCurrentImageIds } = useContext(ImagesContext);

  const { setIsOpen, setIsFailed, setMessage } = useContext(NotificationContext);

  const router = useRouter();

  useEffect(() => {
    return () => {
      setSelectedImages([]);
      setCurrentImageIds([]);
    };
  }, []);

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
    setLoading(true);
    if (selectedImages && selectedImages?.length > 0) {
      const imagesToPost = selectedImages?.map((image) => image.imageFile);
      mutate(imagesToPost);
    } else {
      setLoading(false);
    }
  };
  return (
    <Layout title="Add Product">
      <Box sx={{ display: 'flex', gap: '60px', mt: '38px' }}>
        <AsideProfileMenu />
        <FormProduct
          title="Add product"
          isLoading={loading}
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
