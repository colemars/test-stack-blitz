import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (build) => ({
    getPokemonByName: build.query<any, string>({
      query: (name) => `pokemon/${name}`
    })
  })
});

export const { useGetPokemonByNameQuery } = api;
