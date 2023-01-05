export interface PostFormProps {
  [k: string]: FormDataEntryValue;
}

export interface PostFormReturnProps {
  message: string;
  token: string;
}
