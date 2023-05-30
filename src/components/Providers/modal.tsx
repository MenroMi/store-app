import { Dispatch, SetStateAction, createContext, useState } from 'react';

//Defining context
interface IModalContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  clickedId: number | null;
  setClickedId: Dispatch<SetStateAction<number | null>>;
  isDeleting: boolean;
  setIsDeleting: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext>({
  isOpen: false,
  setIsOpen: () => {},
  clickedId: null,
  setClickedId: () => {},
  isDeleting: false,
  setIsDeleting: () => {},
});

interface IModalProviderProps {
  children: React.ReactNode;
}

//Context Wrapper
export function ModalProvider({ children }: IModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clickedId, setClickedId] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{ isOpen, setIsOpen, clickedId, setClickedId, isDeleting, setIsDeleting }}
    >
      {children}
    </ModalContext.Provider>
  );
}
