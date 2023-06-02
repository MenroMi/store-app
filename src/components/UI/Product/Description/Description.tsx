// basic
import { useState, ChangeEvent, useContext } from 'react';
import router from 'next/router';
import { Routes } from '@/constants/routes';

// components
import ProductRadioGroup from '@/components/UI/ProductControls/ProductRadioGroup/ProductRadioGroup';
import ButtonLoader from '../../Buttons/ButtonLoader/ButtonLoader';

// styled components
import { CustomTypography, CustomButton } from './DescriptionStyles';

// mui
import { Box, Grid, Typography, Radio, useMediaQuery } from '@mui/material';
import theme from '@/utils/mui/theme';

// context
import { NotificationContext } from '@/providers/notification';
import { useShoppingCart } from '@/providers/shoppingCard';

// interface
import { IDescriptionProps } from '@/types/productTypes';

export default function Description({ product, sizes }: IDescriptionProps) {
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));
  const queryDownFive = useMediaQuery<unknown>(theme.breakpoints.down(586));
  const queryDownSmall = useMediaQuery<unknown>(theme.breakpoints.down(438));
  const queryDownMini = useMediaQuery<unknown>(theme.breakpoints.down(360));

  const [selectedValue, setSelectedValue] = useState<string>('rose');
  const [selectedSize, setSelectedSize] = useState<string>(
    product.attributes?.size.data?.id.toString() || '-1'
  );
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  const { increaseCartQuantity } = useShoppingCart();
  const { setIsOpen, setIsFailed, setMessage } = useContext(NotificationContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: `${item}-color-radio-button`,
    inputProps: { 'aria-label': item },
  });

  return (
    <Grid container item xs={queryDownLg ? 12 : 5.1}>
      <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
        <CustomTypography variant="h2" display="inline">
          {product.attributes?.name}
        </CustomTypography>
        <Typography variant={queryDownLg ? 'h4Bold' : 'subtitle1'}>
          ${product.attributes?.price}
        </Typography>
      </Grid>
      <Grid item xs={12} mt={queryDownLg ? '4px' : 2}>
        <CustomTypography variant="h5">
          {product.attributes?.gender.data?.attributes.name
            ? `${product.attributes.gender.data?.attributes.name}'s Shoes`
            : ''}
        </CustomTypography>
        <Box
          my={queryDownLg ? 1 : 2}
          sx={{ display: 'flex', justifyContent: queryDownLg ? 'center' : 'start' }}
        >
          <Radio {...controlProps('rose')} />
          <Radio {...controlProps('purple')} color="secondary" />
          <Radio {...controlProps('green')} color="success" />
          <Radio {...controlProps('black')} color="default" />
        </Box>
      </Grid>
      <Grid container item xs={12}>
        <CustomTypography variant="h5">Select Size</CustomTypography>
        <Box
          pl={`calc((100% - ${
            queryDownMini ? '226px' : queryDownSmall ? '304px' : queryDownFive ? '382px' : ''
          })/2)`}
        >
          <ProductRadioGroup
            availableSize={product.attributes?.size.data}
            handleSelectSize={setSelectedSize}
            sizes={sizes}
            selectedSize={selectedSize}
            isAddPage={false}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <CustomButton
          variant="contained"
          onClick={() => {
            increaseCartQuantity(product.id);
            setIsOpen(true);
            setIsFailed(false);
            setMessage('Product was added to Bag');
          }}
        >
          Add to Bag
        </CustomButton>
        <CustomButton
          variant="outlined"
          onClick={async () => {
            setIsRedirecting(true);
            await router.push(Routes.search);
          }}
          sx={{ marginTop: '20px' }}
        >
          {isRedirecting ? <ButtonLoader /> : 'Back to search'}
        </CustomButton>
      </Grid>
      <Grid item xs={12} mt={queryDownLg ? 2 : 2} mb={2}>
        <CustomTypography variant={queryDownLg ? 'h4Bold' : 'h5'}>Description</CustomTypography>
        <Typography variant="body1" fontSize={16} mt={queryDownLg ? 1 : 2}>
          {product.attributes?.description}
        </Typography>
      </Grid>
    </Grid>
  );
}
