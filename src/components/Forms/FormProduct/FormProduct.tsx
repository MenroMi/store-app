// basic
import React, { useContext } from 'react';

// mui
import {
  Box,
  Typography,
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
  TextField,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';

// components
import AddProductRadioGroup from '@/components/UI/ProductControls/ProductRadioGroup/ProductRadioGroup';
import AddProductSelect from '@/components/UI/ProductControls/ProductSelect/ProductSelect';
import AddProductUploadImage from '@/components/UI/ProductControls/ProductUploadImage/ProductUploadImage';

// interfaces
import { IFormProductProps } from '@/types/formProductTypes';
import ButtonLoader from '@/components/UI/Buttons/ButtonLoader/ButtonLoader';

export default function FormProduct({
  title,
  productName,
  category,
  gendersOptions,
  gender,
  brandsOptions,
  brand,
  description,
  selectedSize,
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
}: IFormProductProps) {
  const theme = useTheme<Theme>();
  const queryDownLg = useMediaQuery<unknown>(theme.breakpoints.down('lg'));

  return (
    <Box sx={{ m: '38px', maxWidth: '1480px', width: '100%' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4.5 }}>
          <Typography variant="h2">{title}</Typography>
          {!queryDownLg && (
            <>
              <Button
                variant="contained"
                disabled={isLoading}
                type="submit"
                sx={{ padding: '10px 60px', width: '146px' }}
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
                lg: '350px',
                xl: '436px',
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
              isAddPage={true}
            />
          </Box>

          <Box sx={{ width: queryDownLg ? '100%' : '50%' }}>
            <AddProductUploadImage handleChooseImage={handleChooseImage} />
          </Box>

          {queryDownLg && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, alignSelf: 'end' }}>
              <Button
                variant="contained"
                type="submit"
                disabled={isLoading}
                sx={{ padding: '10px 60px', width: '146px' }}
              >
                {isLoading ? <ButtonLoader /> : 'Save'}
              </Button>
            </Box>
          )}
        </Box>
      </form>
    </Box>
  );
}
