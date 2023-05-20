// basic
import React, { useState } from 'react';

// interface
interface IStorageProvider {
  children: React.ReactNode;
}

export interface IStorageContext {
  storageLength: number;
  setNewLengthFromStorage: () => void;
}

// context
export const StorageContext = React.createContext<IStorageContext | null>(null);

// fc
const StorageProvider: React.FC<IStorageProvider> = ({ children }) => {
  const [storageLength, setStorageLength] = useState(0);

  const setNewLengthFromStorage = () => {
    if (typeof sessionStorage === 'undefined') {
      setStorageLength(0);
      return;
    }

    setStorageLength(sessionStorage.length);
  };

  return (
    <StorageContext.Provider
      value={{
        storageLength,
        setNewLengthFromStorage,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
