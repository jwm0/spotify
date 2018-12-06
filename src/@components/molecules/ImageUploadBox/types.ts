export type Props = {
  name: string,
  allowDelete?: boolean,
  value?: string | {},
  onChange?: any,
};

export type State = {
  imageURL: string,
  error: boolean,
  loading: boolean,
};
