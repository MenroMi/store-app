import { Dispatch, FormEventHandler } from 'react';
import { IFormData } from './formDataTypes';
import { ISettings } from '.';

export interface IFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  loading?: boolean;
  formData: IFormData;
  setFormData: Dispatch<React.SetStateAction<IFormData>>;
}

export interface IUpdateFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  loading?: boolean;
  formData: ISettings;
  setFormData: Dispatch<React.SetStateAction<ISettings>>;
}
