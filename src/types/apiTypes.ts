export interface PostFormProps {
  [k: string]: FormDataEntryValue;
}

export interface PutFormProps {
  id: string;
  data: PostFormProps;
}

export interface PostFormReturnProps {
  message: string;
  token: string;
}

export interface PostToDoReturnProps {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostToDoReturnProp {
  data: PostToDoReturnProps;
}

export interface DeleteToDoProps {
  data: null;
}
