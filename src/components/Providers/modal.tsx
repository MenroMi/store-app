import { Dispatch, SetStateAction, createContext, useState } from 'react';

//Defining context
interface IModalContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  clickedId: number | null;
  setClickedId: Dispatch<SetStateAction<number | null>>;
}

export const ModalContext = createContext<IModalContext>({
  isOpen: false,
  setIsOpen: () => {},
  clickedId: null,
  setClickedId: () => {},
});

interface IModalProviderProps {
  children: React.ReactNode;
}

//Context Wrapper
export function ModalProvider({ children }: IModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clickedId, setClickedId] = useState<number | null>(null);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, clickedId, setClickedId }}>
      {children}
    </ModalContext.Provider>
  );
}
