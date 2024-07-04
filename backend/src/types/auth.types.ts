import { IResponseProps } from './common.types';

export interface ISignupProps extends IResponseProps {
  data: { token: string };
}

export interface ILoginProps {
  data: {
    token: string;
    user: IUser;
  };
}

interface IUser {
  name: string;
  email: string;
}
