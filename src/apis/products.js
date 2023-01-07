import axios from 'axios';

const categoryFilterURL = (category) =>
  `https://fakestoreapi.com/products/category/${category}`;

export const getProducts = async (category = 'electronics') => {
  try {
    const response = await axios.get(categoryFilterURL(category));
    return response.data;
  } catch (erorr) {
    return erorr.message;
  }
};
