import * as React from 'react';
import { RegisterContextType } from '../models/registerContext';
import { RegisterStep2Payload } from '../models/requestModel';
import dayjs from 'dayjs';

export const RegisterContext = React.createContext<RegisterContextType | null>(null);

interface IProps {
  children: React.ReactNode;
}

const RegisterProvider: React.FC<IProps> = ({ children }) => {
  const [registerField, setRegisterField] = React.useState<RegisterStep2Payload>({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
    dateOfBirth: dayjs('12-31-2019'),
    isAcceptedCondition: false
  });
  return <RegisterContext.Provider value={{ registerField, setRegisterField }}>{children}</RegisterContext.Provider>;
};

export default RegisterProvider;
