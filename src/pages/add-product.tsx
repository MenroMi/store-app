// libs
import styled from '@emotion/styled';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';

// assets
import productImageExample from '@/assets/forgotResetBg.png';

// constants
import { BRANDS, GENDERS, SHOE_SIZES } from '@/constants';
import AddProductRadioGroup from '@/components/AddProductRadioGroup/AddProductRadioGroup';
import AddProductUploadImage from '@/components/AddProductUploadImage/AddProductUploadImage';
import AddProductSelect from '@/components/AddProductSelect/AddProductSelect';

export default function AddProduct() {
  const [productName, setProductName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [gender, setGender] = useState<string>('male');
  const [brand, setBrand] = useState<string>('');

  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <>
      <Head>
        <title>Add product</title>
      </Head>

      <form>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4.5 }}>
          <Typography variant="h2">Add product</Typography>
          <Box sx={{ display: 'flex' }}>
            <Button variant="outlined" sx={{ padding: '10px 40px', mr: 2.5 }}>
              Schedule
            </Button>
            <Button variant="contained" type="submit" sx={{ padding: '10px 60px' }}>
              Save
            </Button>
          </Box>
        </Box>

        <Typography variant="body1" sx={{ maxWidth: '890px' }}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
          graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
          century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
          for use in a type specimen book. It usually begins with:
        </Typography>

        <Box sx={{ display: 'flex', mt: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '436px' }}>
            <FormControl sx={{ mb: 3 }}>
              <FormLabel htmlFor="product-name">
                <Typography variant="caption">Product name</Typography>
              </FormLabel>
              <OutlinedInput
                sx={{ mt: 1 }}
                id="product-name"
                placeholder="Nike Air Max 90"
                required
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </FormControl>

            <FormControl sx={{ mb: 3 }}>
              <FormLabel htmlFor="category">
                <Typography variant="caption">Category</Typography>
              </FormLabel>
              <OutlinedInput
                sx={{ mt: 1.5 }}
                id="category"
                placeholder="Sport"
                required
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </FormControl>

            <Box sx={{ display: 'flex', mb: 3, width: '100%' }}>
              <AddProductSelect
                id="gender"
                label="Gender"
                options={GENDERS}
                selectedValue={gender}
                handleChangeValue={setGender}
              />

              <AddProductSelect
                id="brand"
                label="Brand"
                options={BRANDS}
                selectedValue={brand}
                handleChangeValue={setBrand}
              />
            </Box>

            <FormControl>
              <FormLabel htmlFor="description">
                <Typography variant="caption">Description</Typography>
              </FormLabel>
              <TextField
                sx={{ mt: 1 }}
                id="description"
                placeholder="Do not exceed 300 characters"
                multiline
                required
                rows={11}
                inputProps={{ maxLength: 300 }}
              />
            </FormControl>

            <AddProductRadioGroup
              handleSelectSize={handleSelectSize}
              sizes={SHOE_SIZES}
              selectedSize={selectedSize}
            />
          </Box>

          <Box sx={{ ml: 29.25 }}>
            <Typography variant="caption" sx={{ mb: 2.5, display: 'block' }}>
              Product images
            </Typography>

            <Grid container sx={{ maxWidth: '692px' }} spacing={6.5}>
              <Grid item xs={6} sx={{ maxWidth: '320px', maxHeight: '380px' }}>
                <AddProductUploadImage />
              </Grid>

              {Array(3)
                .fill({
                  productImageSrc: productImageExample,
                })
                .map((productImage, index) => (
                  <Grid
                    key={index}
                    item
                    xs={6}
                    sx={{
                      maxWidth: '320px',
                      maxHeight: '380px',
                    }}
                  >
                    <Image
                      src={productImage.productImageSrc}
                      alt="Product image"
                      style={{ maxWidth: '100%', height: '100%' }}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </form>
    </>
  );
}
