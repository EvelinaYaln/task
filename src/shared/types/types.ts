export interface IFullCoinsDataServer {
  id: string;
  name: string;
  min_size: string;
}

export interface IFullCoinsDataClient {
  id: string;
  name: string;
  min_size?: string;
}
