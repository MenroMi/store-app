import { ISelectedImage } from '@/types/addProductTypes';
import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

interface IImagesProviderProps {
  children: React.ReactNode;
}

interface IImagesContext {
  selectedImages: ISelectedImage[] | null;
  setSelectedImages: Dispatch<SetStateAction<ISelectedImage[]>>;
}

export const ImagesContext = createContext<IImagesContext>({
  selectedImages: null,
  setSelectedImages: () => {},
});

export default function ImagesProvider({ children }: IImagesProviderProps) {
  const [selectedImages, setSelectedImages] = useState<ISelectedImage[]>([]);

  return (
    <ImagesContext.Provider
      value={{ selectedImages: selectedImages, setSelectedImages: setSelectedImages }}
    >
      {children}
    </ImagesContext.Provider>
  );
}
