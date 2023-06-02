// basic
import React, { useState } from 'react';

// interface
interface IStorageProvider {
  children: React.ReactNode;
}

export interface IStorageContext {
  storageLength: number;
  setNewLengthFromStorage: () => void;
  addUniqueID: (x: string, y: number) => void;
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

  const addUniqueID = (label: string, id: number): void => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=-@#$^~';
    let set = '';

    while (set.length < 10) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters.charAt(randomIndex);
      if (!set.includes(randomCharacter)) {
        set += randomCharacter;
      }
    }

    sessionStorage.setItem(label + `_${set}`, `${id}`);
    setNewLengthFromStorage();
    return;
  };

  return (
    <StorageContext.Provider
      value={{
        storageLength,
        setNewLengthFromStorage,
        addUniqueID,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
