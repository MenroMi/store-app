import { Dispatch, FormEventHandler, SetStateAction } from 'react';

export interface IFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  email?: string;
  setEmail?: Dispatch<SetStateAction<string>>;
  password?: string;
  setPassword?: Dispatch<SetStateAction<string>>;
  name?: string;
  setName?: Dispatch<SetStateAction<string>>;
  confirm?: string;
  setConfirm?: Dispatch<SetStateAction<string>>;
  loading?: boolean;
}
