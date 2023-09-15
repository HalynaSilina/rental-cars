import axios from "axios";

axios.defaults.baseURL =
  "https://6502cbc5a0f2c1f3faeae21d.mockapi.io/api/";

async function fetchAllCars(page = 1) {
  try {
    const response = await axios.get(`adverts/?page=${page}&limit=8`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchAllCars;

