// weatherApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi', // Unique name for your API service
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.open-meteo.com/v1/', // Weather API base URL
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (coordinates) =>
        `forecast?latitude=${coordinates.lat}&longitude=${coordinates.lon}&current_weather=true`, // Weather API endpoint
    }),
    getLocation: builder.query({
      query: (coordinates) =>
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.lat}&lon=${coordinates.lon}`, // Reverse Geocoding API
    }),
  }),
});

export const { useGetWeatherQuery, useGetLocationQuery } = weatherApi;
