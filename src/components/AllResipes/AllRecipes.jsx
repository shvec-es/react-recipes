import { RecipesItem } from "../RecipesItem/RecipesItem";

export const Recipes = ({ data }) => {
  return (
    <ul>
      {data.length > 0 &&
        data.map(({ _id: id, title, category, preview, thumb }) => (
          <RecipesItem
            id={id}
            title={title}
            category={category}
            preview={thumb}
          />
        ))}
    </ul>
  );
};
