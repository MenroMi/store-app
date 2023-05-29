import AddProductRadioGroup from "@/components/UI/AddProduct/AddProductRadioGroup/AddProductRadioGroup";
import { CustomTypography, CustomButton } from "./DescriptionStyles";
import { Box, Grid, Typography, Radio } from "@mui/material";
import { useState, ChangeEvent } from 'react';

import { IDescriptionProps } from "@/types/productTypes";

export default function Description({ product, sizes } :IDescriptionProps) {
    const [selectedValue, setSelectedValue] = useState<string>('rose');  
    const [selectedSize, setSelectedSize] = useState<string>('13'); 

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
                <CustomTypography variant='h2' display='inline'>{product.name}</CustomTypography>
                <Box display='flex'>
                    <Typography variant='subtitle1'>$</Typography>
                    <Typography variant='subtitle1'>{product.price}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} mt={2}>      
                <CustomTypography variant='h5'>{product.gender?.data.attributes.name}`s Shoes</CustomTypography>
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
                    availableSizes={product.size.data}
                    handleSelectSize={setSelectedSize}
                    sizes={sizes}
                    selectedSize={selectedSize}
                    isAddPage={false}
                />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent='space-between' maxHeight={62}>      
                <CustomButton variant="outlined" onClick={() => {}}>
                    Favorite
                </CustomButton>
                <CustomButton variant="contained" onClick={() => {}}>
                    Add to Bag
                </CustomButton>
            </Grid>
            <Grid item xs={12} mt={8}>      
                <CustomTypography variant='h5'>Description</CustomTypography>
                <Typography variant='body1' fontSize={16} mt={2}>
                    {product.description}
                </Typography>
            </Grid>
        </Grid>
    ); 
}
