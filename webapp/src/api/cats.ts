import { axiosInstance } from "./axiosInstance";
import { Cat } from "./types";

const BASE_PATH = "/cats";

export function getCat(id: string) {
  return axiosInstance.get<Cat>(`${BASE_PATH}/${id}`);
}

export function listCats() {
  return axiosInstance.get<Array<Cat>>(BASE_PATH);
}

export function addFavorite(id: string) {
  return axiosInstance.post(BASE_PATH, { data: { id } });
}

export function removeFavorite(id: string) {
  return axiosInstance.delete(`${BASE_PATH}/${id}`);
}

export function updateCat(id: string, cat: Cat) {
  return axiosInstance.put(`${BASE_PATH}/${id}`, {
    data: cat,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
