import { ISelectedImage } from '@/types/formProductTypes';
import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

interface IImagesProviderProps {
  children: React.ReactNode;
}

interface IImagesContext {
  selectedImages: ISelectedImage[] | null;
  setSelectedImages: Dispatch<SetStateAction<ISelectedImage[]>>;
  currentImageIds: number[] | null;
  setCurrentImageIds: Dispatch<SetStateAction<number[]>>;
}

export const ImagesContext = createContext<IImagesContext>({
  selectedImages: null,
  setSelectedImages: () => {},
  currentImageIds: null,
  setCurrentImageIds: () => {},
});

export default function ImagesProvider({ children }: IImagesProviderProps) {
  const [selectedImages, setSelectedImages] = useState<ISelectedImage[]>([]);
  const [currentImageIds, setCurrentImageIds] = useState<number[]>([]);

  return (
    <ImagesContext.Provider
      value={{
        selectedImages: selectedImages,
        setSelectedImages: setSelectedImages,
        currentImageIds: currentImageIds,
        setCurrentImageIds: setCurrentImageIds,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}
