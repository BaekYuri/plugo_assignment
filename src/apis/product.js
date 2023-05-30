import axios from "axios";

export const getProductAll = async () => {
  return await axios.get("/data/mock.json");
};

export const getProductById = async (id) => {
  const result = await axios.get("/data/mock.json");
  return result.data.find((item) => item.id === Number(id.queryKey[1]));
};

export const addProduct = async (product) => {
  return await axios.get("/data/mock.json");
};
