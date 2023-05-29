export interface ISelectOptionsData {
  attributes: {
    name: string;
  };
  id: number;
}

export interface ISizesOptionsData {
  attributes: {
    value: string;
  };
  id: number;
}

export interface ISelectedImage {
  url: string;
  id: number;
  imageFile: File;
}

export interface IAddProductUploadImageProps {
  handleChooseImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IAddProductRadioGroup {
  selectedSize: string | number;
  handleSelectSize: (size: string) => void;
  sizes: ISizesOptionsData[] | undefined;
  availableSize?:  ISizesOptionsData | undefined;
  isAddPage: boolean;
}

export interface IAddProductSelect {
  id: string;
  label: string;
  selectedValue: string;
  handleChangeValue: (value: string) => void;
  options: ISelectOptionsData[];
  selectName: string;
  width?: string;
  marginRight?: string | number;
}

export interface IFormAddProductProps {
  productName: string;
  brand: string;
  category: string;
  gender: string;
  description: string;
  selectedSize: string;
  gendersOptions: ISelectOptionsData[];
  brandsOptions: ISelectOptionsData[];
  categoryOptions: ISelectOptionsData[];
  price: string;
  sizes: ISizesOptionsData[];
  isLoading: boolean;
  setSize: (size: string) => void;
  setProductName: (name: string) => void;
  setPrice: (price: string) => void;
  setCategory: (category: string) => void;
  setGender: (gender: string) => void;
  setBrand: (brand: string) => void;
  setDescription: (desc: string) => void;
  handleSubmit: () => void;
  handleSelectSize: (size: string) => void;
  handleChooseImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IProductData {
  data: {
    description?: string;
    images: string[];
    name: string;
    categories: string;
    price: number;
    brand: string;
    gender: string;
    teamName: 'ea-team';
    uniqueID: number;
    size: string;
    userID: number;
  };
}
