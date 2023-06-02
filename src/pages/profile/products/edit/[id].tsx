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
import {
  deleteImage,
  editProduct,
  getDataWithField,
  getProductById,
  getUserID,
  uploadImage,
} from '@/services/productApi';
import { IProductData, ISelectedImage } from '@/types/formProductTypes';

// context
import { ImagesContext } from '@/providers/images';
import { ModalContext } from '@/providers/modal';
import { NotificationContext } from '@/providers/notification';

// interfaces, types
import { IGetStaticProps } from '@/types/productTypes';
import { FiltersContext } from '@/providers/filters';

export default function AddProduct() {
  const router = useRouter();
  const productId = typeof router.query?.id === 'string' ? router.query.id : '';

  // useQuery
  const { data: brandsData } = useQuery(['brands'], () => getDataWithField('brands'));
  const { data: gendersData } = useQuery(['genders'], () => getDataWithField('genders'));
  const { data: categoriesData } = useQuery(['categories'], () => getDataWithField('categories'));
  const { data: sizesData } = useQuery(['sizes'], () => getDataWithField('sizes', 'value'));
  const { data: id } = useQuery(['id'], () =>
    getUserID(localStorage.getItem('token') || sessionStorage.getItem('token') || 'guest')
  );
  const { data: product } = useQuery(['product', productId], () => getProductById(productId));

  const queryClient = useQueryClient();

  const { mutate } = useMutation((images: any) => handleEditProduct(images), {
    onSuccess: () => {
      setIsOpen(true);
      setMessage('Product was edited successfully!');
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
  const [productName, setProductName] = useState<string>(product?.attributes?.name || '');
  const [price, setPrice] = useState<string>(product?.attributes?.price || '');
  const [category, setCategory] = useState<string>(
    product?.attributes?.categories?.data?.[0]?.id || ''
  );
  const [gender, setGender] = useState<string>(product?.attributes?.gender?.data?.id || '');
  const [brand, setBrand] = useState<string>(product?.attributes?.brand?.data?.id || '');
  const [selectedSize, setSelectedSize] = useState<string>(
    product?.attributes?.size?.data?.id.toString() || ''
  );
  const [description, setDescription] = useState<string>(product?.attributes?.description || '');

  // contexts
  const { setClickedId } = useContext(ModalContext);
  const {
    selectedImages,
    setSelectedImages,
    currentImageIds,
    setCurrentImageIds,
    imageIdsToDelete,
  } = useContext(ImagesContext);
  const contextFilters = useContext(FiltersContext);

  const { setIsOpen, setIsFailed, setMessage } = useContext(NotificationContext);

  useEffect(() => {
    const images = product?.attributes?.images?.data?.map((image: any) => ({
      id: image?.id,
      url: image?.attributes?.url,
    }));

    const imageIds = product?.attributes?.images?.data?.map((image: any) => image?.id.toString());

    setSelectedImages([...images]);
    setCurrentImageIds([...imageIds]);
  }, []);

  useEffect(() => {
    return () => {
      setSelectedImages([]);
      setCurrentImageIds([]);
      contextFilters?.setActiveFilters({});
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

  const handleEditProduct = async (images: any) => {
    // promises to upload all images to server
    const uploadPromises = images
      .filter((image: File) => image !== null)
      .map((image: File) => uploadImage(image));

    const deletePromises = imageIdsToDelete?.map((id) =>
      deleteImage(
        id.toString(),
        localStorage.getItem('token') || sessionStorage.getItem('token') || 'guest'
      )
    );

    try {
      // upload all images
      const uploadResponses = await Promise.all(uploadPromises);

      if (deletePromises) {
        await Promise.all(deletePromises);
      }

      // get image ids returned from server
      const uploadedImageIds = uploadResponses?.map((response) => response.data[0].id.toString());

      const productData: IProductData = {
        data: {
          description: description,
          images: [...currentImageIds!, ...uploadedImageIds],
          name: productName,
          categories: category,
          price: +price,
          brand: brand,
          gender: gender,
          teamName: 'ea-team',
          uniqueID: product?.attributes?.uniqueID,
          size: selectedSize,
          userID: id?.data.id,
        },
      };

      return editProduct(
        productData,
        localStorage.getItem('token') || sessionStorage.getItem('token') || 'guest',
        productId
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    if (selectedImages && selectedImages?.length > 0) {
      const imagesToPost = selectedImages?.map((image) => image?.imageFile || null);

      mutate(imagesToPost);
    } else {
      setLoading(false);
    }
  };
  return (
    <Layout title="Edit product">
      <Box sx={{ display: 'flex', gap: '60px', mt: '38px' }}>
        <AsideProfileMenu />

        <FormProduct
          title="Edit product"
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
