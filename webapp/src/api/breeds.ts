import { axiosInstance } from "./axiosInstance";
import { Breed } from "./types";

const BASE_PATH = "/breeds";

export function listBreeds() {
  return axiosInstance.get<Array<Breed>>(BASE_PATH);
}
