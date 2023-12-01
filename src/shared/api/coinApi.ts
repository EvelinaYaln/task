import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IFullCoinsDataClient, IFullCoinsDataServer } from '../types/types';

export const coinApi = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinbase.com/' }),
  endpoints: build => ({
    getCoins: build.query<IFullCoinsDataClient[], void>({
      query: () => 'v2/currencies',
      transformResponse: (response: { data: IFullCoinsDataServer[] }) =>
        response.data.map(item => ({
          id: item.id,
          name: item.name,
          minSize: item.min_size,
        })),
    }),
  }),
});
export const { useGetCoinsQuery } = coinApi;
