import axios from 'axios';

const singleProdcutURL = (id) => {
  return `https://fakestoreapi.com/products/${id}`;
};

export const getSinleProduct = async (id) => {
  try {
    const response = await axios.get(singleProdcutURL(id));
    return response.data;
  } catch (erorr) {
    return erorr.message;
  }
};
