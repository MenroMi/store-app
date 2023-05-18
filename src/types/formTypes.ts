import { Dispatch, FormEventHandler } from 'react';
import { IFormData } from './formDataTypes';

export interface IFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  loading?: boolean;
  formData: IFormData;
  setFormData: Dispatch<React.SetStateAction<IFormData>>;
}
