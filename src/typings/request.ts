export type IRequestMethod = 'get' | 'post';

export interface IRequestHeaders {
  [key: string]: string;
}

export interface IRequestOptions {
  url: string;
  method: IRequestMethod;
  headers?: IRequestHeaders;
}
