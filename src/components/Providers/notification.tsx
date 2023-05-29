import { Dispatch, SetStateAction, createContext, useState } from 'react';

//Defining context
interface INotificationContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isFailed: boolean;
  setIsFailed: Dispatch<SetStateAction<boolean>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

export const NotificationContext = createContext<INotificationContext>({
  isOpen: false,
  setIsOpen: () => {},
  isFailed: false,
  setIsFailed: () => {},
  message: '',
  setMessage: () => {},
});

interface INotificationProviderProps {
  children: React.ReactNode;
}

//Context Wrapper
export function NotificationProvider({ children }: INotificationProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  return (
    <NotificationContext.Provider
      value={{ isOpen, setIsOpen, message, setMessage, isFailed, setIsFailed }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
