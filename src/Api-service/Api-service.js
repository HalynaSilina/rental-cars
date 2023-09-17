import axios from "axios";

axios.defaults.baseURL =
  "https://6502cbc5a0f2c1f3faeae21d.mockapi.io/api/adverts";

export async function fetchAllCars(page = 1) {
  const response = await axios.get(`/?page=${page}&limit=8`);
  return response.data;
}

export async function fetchCarById(id) {
  const res = await axios.get(`/${id}`);
  return res.data;
}
