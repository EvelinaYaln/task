import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICoinsData, IFullCoinsData } from '../types/types';

export const coinApi = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinbase.com/' }),
  endpoints: build => ({
    getCoins: build.query<ICoinsData[], string>({
      query: () => 'v2/currencies',
      transformResponse: (response: { data: IFullCoinsData[] }) =>
        response.data.map(item => ({
          id: item.id,
          name: item.name,
          minSize: item.min_size,
        })),
    }),
  }),
});
export const { useGetCoinsQuery } = coinApi;
