// basic
import React, { useState } from 'react';
import Image from 'next/image';

// slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// mui
import { Button, Typography, Box } from '@mui/material';

// components
import Card from '@/components/UI/Cards/Card/Card';
import DropDownMenu from '@/components/UI/Menu/DropDownMenu/DropDownMenu';
import ModalDeleteItem from '@/components/Modals/ModalDeleteItem/ModalDeleteItem';

// styled components
import { CustomEmptyStateWrapper, CustomSlider } from './styles';

// constants
import { Routes } from '@/constants/routes';

// images
import noProducts from '@/assets/icons/noProducts.svg';

// types
import { ICardsSliderProps } from '@/types/cardsSliderTypes';
import ButtonLoader from '@/components/UI/Buttons/ButtonLoader/ButtonLoader';
import { useRouter } from 'next/router';
import { myProfileSliderMobileOptions } from '@/constants/ui';
import SlideMobile from '@/components/UI/Slider/SlideMobile/SlideMobile';

export const CardsSliderMobile = ({ products, deleteProduct }: ICardsSliderProps) => {
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  const router = useRouter();

  if (products?.length > 3) {
    return (
      <>
        <CustomSlider {...myProfileSliderMobileOptions}>
          {products?.map((product) => (
            <SlideMobile
              id={product.id}
              productCategory={product.categories[0].name}
              productName={product.name}
              productImageSrc={product?.images[0]?.url}
              productPrice={product.price}
              key={product.id}
            >
              <DropDownMenu
                top="5px"
                right="5px"
                productID={product.id}
                productName={product.name}
              />
            </SlideMobile>
          ))}
        </CustomSlider>

        <ModalDeleteItem
          deleteMessage="Are you sure to delete selected item?"
          deleteHandler={deleteProduct!}
        />
      </>
    );
  } else if (products?.length > 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '38px',
          flexWrap: 'wrap',
        }}
      >
        {products?.map((product) => (
          <Card
            productCategory={product.categories[0].name}
            productName={product.name}
            productImageSrc={product?.images[0]?.url}
            productPrice={product.price}
            productId={product.id}
            key={product.id}
          >
            <DropDownMenu productID={product.id} productName={product.name} />
          </Card>
        ))}
        <ModalDeleteItem
          deleteMessage="Are you sure to delete selected item?"
          deleteHandler={deleteProduct!}
        />
      </Box>
    );
  } else {
    return (
      <CustomEmptyStateWrapper>
        <Image src={noProducts} alt="No products" />
        <Typography variant="h5" sx={{ mt: '10px' }}>
          You don’t have any products yet
        </Typography>
        <Typography variant="body1" sx={{ mt: '10px' }}>
          Post can contain video, images and text.
        </Typography>
        <Button
          variant="contained"
          onClick={async () => {
            setIsRedirecting(true);
            await router.push(Routes.addProduct);
          }}
          disabled={isRedirecting}
          sx={{ padding: '5px 13px', mt: 2.5, width: '146px' }}
        >
          {isRedirecting ? <ButtonLoader /> : 'Add product'}
        </Button>
      </CustomEmptyStateWrapper>
    );
  }
};
