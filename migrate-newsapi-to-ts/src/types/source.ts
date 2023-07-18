import { IDataObject } from '../interfaces/dataObj';

export type TypeSource = Pick<
  IDataObject,
  'id' | 'name' | 'description' | 'url' | 'category' | 'language' | 'country' | 'status'
>;
