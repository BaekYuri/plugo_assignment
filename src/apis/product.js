import axios from "axios";

export const getProductAll = async () => {
  return await axios.get("/data/mock.json");
};

export const getProductById = async (id) => {
  return await axios.get(`/data/mock_id${id.queryKey[1]}.json`);
};

export const addProduct = async (product) => {
  return await axios.post("/임시링크", product);
};
