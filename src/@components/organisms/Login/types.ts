export enum PROVIDER {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
};

export type Props = {
  loginWith: (provider: PROVIDER) => void,
  handleClose: () => void,
  isLoggedIn: boolean,
};
