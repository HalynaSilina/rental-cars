import axios from "axios";

axios.defaults.baseURL = "https://6502cbc5a0f2c1f3faeae21d.mockapi.io/api/";

async function fetchAllCars() {
    const response = await axios.get(`adverts/`);
    return response.data;}

export default fetchAllCars;
