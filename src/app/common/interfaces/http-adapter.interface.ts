import { EPathEndPoint } from '../enums/path-endpoint.enum';

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export interface ISendData<T> {
  path: EPathEndPoint;
  data: T;
}
