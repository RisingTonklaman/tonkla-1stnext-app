import axios from "axios";

export const apiGet = async (endpoint: string) => {
  try {
    const response = await axios.get(`http://localhost:3003/api/v1${endpoint}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
