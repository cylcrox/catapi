import { AxiosRequestHeaders, AxiosResponse } from "axios";
import { Cat } from "../types";
import { mockCatsData } from "./mockData";

export function getCat(id: string) {
  return {
    data: mockCatsData[0],
  };
}

export function listCats(breed_id: string | undefined) {
  return {
    data: mockCatsData,
    config: { headers: {} as AxiosRequestHeaders },
    headers: {},
    status: 200,
    statusText: "Success!",
  };
}

export function addFavorite(id: string): AxiosResponse {
  return {
    data: [],
    config: { headers: {} as AxiosRequestHeaders },
    headers: {},
    status: 200,
    statusText: "Added to favorites!",
  };
}

export function removeFavorite(id: string) {
  return {
    data: [],
    config: { headers: {} as AxiosRequestHeaders },
    headers: {},
    status: 200,
    statusText: "Removed from favorites!",
  };;
}

export function updateCat(id: string, cat: Cat) {
  return;
}
