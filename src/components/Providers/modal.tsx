import { Dispatch, SetStateAction, createContext, useState } from 'react';

//Defining context
interface IModalContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<IModalContext>({
  isOpen: false,
  setIsOpen: () => {},
});

interface IModalProviderProps {
  children: React.ReactNode;
}

//Context Wrapper
export function ModalProvider({ children }: IModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>;
}
