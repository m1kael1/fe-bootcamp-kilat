export type NoteDTO = {
  title: string;
  content: string;
};

export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export type Meta = {
  total: number;
  page: number;
  lastPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type Response<T = undefined> = {
  success: boolean;
  message: string;
  data?: T;
  meta?: Meta;
};
