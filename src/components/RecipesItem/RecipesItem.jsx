export const RecipesItem = ({ id, title, category, preview }) => {
  return (
    <li key={id}>
      <h2>{title}</h2>
      <p>Category: {category}</p>
      <img src={preview} alt={title} width="240" />
    </li>
  );
};
