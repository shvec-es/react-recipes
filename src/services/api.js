import axios from "axios";

const BASE_URL = "https://tasty-treats-backend.p.goit.global/api";

export const getAllCategories = async () => {
  const url = `${BASE_URL}/categories`;
  try {
    const { data } = await axios(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecipesByCategories = async (category) => {
  const url = `${BASE_URL}/recipes?category=${category}`;
  try {
    const { data } = await axios(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllRecipes = async () => {
  const url = `${BASE_URL}/recipes?limit=9`;
  try {
    const { data } = await axios(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
