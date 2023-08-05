import { useState, useEffect } from "react";
import { getAllRecipes } from "./services/api";
import { Recipes } from "./components/AllResipes/AllRecipes";
import { Categories } from "./components/Categories/Categories";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await getAllRecipes();
        setRecipes(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipes();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories updateData={setRecipes} />
        <Recipes data={recipes} />
      </main>
    </>
  );
};

export default App;
