export type LoginInput = {
  username: string;
  password: string;
};

export interface RegisterStep1Payload {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterStep2Payload extends RegisterStep1Payload {
  fullName: string;
  phoneNumber: string;
  dateOfBirth: Date | null;
  isAcceptedCondition: boolean;
}

export type RegisterPayload = {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  dateOfBirth: Date;
};
