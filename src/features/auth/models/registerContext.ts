import { RegisterStep2Payload } from './requestModel';

export type RegisterContextType = {
  registerField: RegisterStep2Payload;
  setRegisterField: React.Dispatch<React.SetStateAction<RegisterStep2Payload>>;
};
