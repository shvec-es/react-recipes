import { useEffect } from "react";
import { useState } from "react";
import { getAllCategories, getRecipesByCategories } from "../../services/api";

export const Categories = ({ updateData }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const onCategoryClick = (e) => {
    const category = e.target.textContent;
    const getByCategory = async () => {
      try {
        const data = await getRecipesByCategories(category);
        updateData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getByCategory();
  };
  return (
    <ul>
      {categories.length > 0 &&
        categories.map(({ _id: id, name }) => (
          <li key={id}>
            <button onClick={onCategoryClick}>{name}</button>
          </li>
        ))}
    </ul>
  );
};
