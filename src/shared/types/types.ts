export interface IFullCoinsData {
  id: string;
  name: string;
  min_size: string;
}
export type ICoinsData = Pick<IFullCoinsData, 'id' | 'name'>;
