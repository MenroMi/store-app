// basic
import Image from 'next/image';
import React from 'react';

// mui
import {
  Box,
  Typography,
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
  TextField,
  Grid,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';

// components
import AddProductRadioGroup from '@/components/UI/AddProduct/AddProductRadioGroup/AddProductRadioGroup';
import AddProductSelect from '@/components/UI/AddProduct/AddProductSelect/AddProductSelect';
import AddProductUploadImage from '@/components/UI/AddProduct/AddProductUploadImage/AddProductUploadImage';

// interfaces
import { IFormAddProductProps } from '@/types/addProductTypes';
import ButtonLoader from '@/components/UI/ButtonLoader/ButtonLoader';

export default function FormAddProduct({
  productName,
  category,
  gendersOptions,
  gender,
  brandsOptions,
  brand,
  description,
  selectedSize,
  selectedImages,
  categoryOptions,
  price,
  sizes,
  isLoading,
  setProductName,
  setCategory,
  setGender,
  setBrand,
  setPrice,
  setDescription,
  handleSubmit,
  handleSelectSize,
  handleChooseImage,
}: IFormAddProductProps) {
  const theme = useTheme<Theme>();
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));
  const queryDownMd = useMediaQuery<unknown>(theme.breakpoints.down('md'));

  return (
    <Box sx={{ m: '38px', maxWidth: '1480px', width: '100%' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4.5 }}>
          <Typography variant="h2">Add product</Typography>
          {!queryDownLg && (
            <>
              <Button
                variant="contained"
                disabled={isLoading}
                type="submit"
                sx={{ padding: '10px 60px' }}
              >
                {isLoading ? <ButtonLoader /> : 'Save'}
              </Button>
            </>
          )}
        </Box>

        <Typography variant="body1" sx={{ maxWidth: '890px' }}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
          graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
          century who is thought to have scrambled parts of Cicero&apos;s De Finibus Bonorum et
          Malorum for use in a type specimen book. It usually begins with:
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 6,
            flexDirection: queryDownLg ? 'column' : 'row',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: {
                xl: '436px',
                lg: '350px',
              },
            }}
          >
            <FormControl sx={{ mb: 3 }}>
              <FormLabel htmlFor="product-name">
                <Typography variant="caption">Product name</Typography>
              </FormLabel>
              <OutlinedInput
                sx={{ mt: 1 }}
                id="product-name"
                placeholder="Nike Air Max 90"
                required
                name="name"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </FormControl>

            <FormControl sx={{ mb: 3 }}>
              <FormLabel htmlFor="price">
                <Typography variant="caption">Price</Typography>
              </FormLabel>
              <OutlinedInput
                sx={{ mt: 1 }}
                id="price"
                placeholder="300"
                required
                name="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>

            <AddProductSelect
              id="category"
              label="Category"
              selectName="category"
              options={categoryOptions}
              selectedValue={category}
              handleChangeValue={setCategory}
            />

            <Box sx={{ display: 'flex', mb: 3, mt: 3, width: '100%' }}>
              <AddProductSelect
                id="gender"
                label="Gender"
                selectName="gender"
                options={gendersOptions}
                selectedValue={gender}
                handleChangeValue={setGender}
                marginRight={2}
              />

              <AddProductSelect
                id="brand"
                selectName="brand"
                label="Brand"
                options={brandsOptions}
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
                name="description"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setDescription(e.target.value)
                }
                required
                rows={11}
                inputProps={{ maxLength: 300 }}
              />
            </FormControl>

            <AddProductRadioGroup
              handleSelectSize={handleSelectSize}
              sizes={sizes}
              selectedSize={selectedSize}
            />
          </Box>

          <Box sx={{ width: queryDownLg ? '100%' : '50%' }}>
            <Typography
              variant="caption"
              sx={{ mb: 2.5, display: 'block', marginTop: queryDownLg ? '24px' : 0 }}
            >
              Product images
            </Typography>
            {queryDownMd ? (
              <input type="file" name="images" multiple={true} />
            ) : (
              <Grid
                container
                sx={{
                  maxWidth: {
                    xl: '692px',
                    lg: '500px',
                  },
                }}
                spacing={{
                  xl: 6.5,
                  lg: 4,
                  md: 2,
                }}
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    width: queryDownLg ? '190px' : '320px',
                    height: queryDownLg ? '250px' : '380px',
                  }}
                >
                  <AddProductUploadImage handleChooseImage={handleChooseImage} />
                </Grid>

                {selectedImages?.map((productImage, index) => (
                  <Grid
                    key={index}
                    item
                    xs={6}
                    sx={{
                      maxWidth: queryDownLg ? '190px' : '320px',
                      maxHeight: queryDownLg ? '250px' : '380px',
                    }}
                  >
                    <Image
                      src={productImage}
                      alt="Product image"
                      style={{ width: '100%', height: '100%' }}
                      width={queryDownLg ? 190 : 320}
                      height={queryDownLg ? 250 : 380}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>

          {queryDownLg && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button
                variant={isLoading ? 'outlined' : 'contained'}
                type="submit"
                disabled={isLoading}
                sx={{ padding: '10px 60px' }}
              >
                Save
              </Button>
            </Box>
          )}
        </Box>
      </form>
    </Box>
  );
}
