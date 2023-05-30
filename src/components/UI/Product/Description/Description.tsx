import AddProductRadioGroup from "@/components/UI/AddProduct/AddProductRadioGroup/AddProductRadioGroup";
import { CustomTypography, CustomButton } from "./DescriptionStyles";
import { Box, Grid, Typography, Radio } from "@mui/material";

import { IDescriptionProps } from "@/types/productTypes";
import { StorageContext } from "@/contexts/sessionStorageContext";
import { useState, ChangeEvent, useContext } from 'react';

export default function Description({ product, sizes } :IDescriptionProps) {
    const contextStorage = useContext(StorageContext);

    const [selectedValue, setSelectedValue] = useState<string>('rose');  
    const [selectedSize, setSelectedSize] = useState<string>(product.attributes?.size.data?.id.toString() || '-1'); 


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
        <Grid container item xs={5.1}>
            <Grid item xs={12} display='flex' justifyContent='space-between'>      
                <CustomTypography variant='h2' display='inline'>{product.attributes?.name}</CustomTypography>
                <Box display='flex'>
                    <Typography variant='subtitle1'>$</Typography>
                    <Typography variant='subtitle1'>{product.attributes?.price}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} mt={2}>      
                <CustomTypography variant='h5'>{product.attributes?.gender.data?.attributes.name ? `${product.attributes.gender.data?.attributes.name}'s Shoes` : ''}</CustomTypography>
                <Box mt={2} mb={2}>
                    <Radio {...controlProps('rose')} />
                    <Radio {...controlProps('purple')} color="secondary" />
                    <Radio {...controlProps('green')} color="success" />
                    <Radio {...controlProps('black')} color="default" />
                </Box>
            </Grid> 
            <Grid container item xs={12}>      
                <CustomTypography variant='h5'>Select Size</CustomTypography>
                <AddProductRadioGroup 
                    availableSize={product.attributes?.size.data}
                    handleSelectSize={setSelectedSize}
                    sizes={sizes}
                    selectedSize={selectedSize}
                    isAddPage={false}
                />
            </Grid>
            <Grid item xs={12} maxHeight={62}>      
                <CustomButton variant="outlined" onClick={() => { contextStorage?.addUniqueID(product.attributes?.name, product.id) }}> 
                    Add to Bag
                </CustomButton>
            </Grid>
            <Grid item xs={12} mt={8}>      
                <CustomTypography variant='h5'>Description</CustomTypography>
                <Typography variant='body1' fontSize={16} mt={2}>{product.attributes?.description}</Typography>
            </Grid>
        </Grid>
    ); 
}
