import { useState } from "react";
import "./styles.css";
import "./components/taskItem";
import { allRecipe } from "./data/data";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SelectedIngredients from "./pages/SelectIngredients";
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipePage from "./pages/RecipePage";

let selectedIngredients = [];

export default function App() {
  const [whatcanyoumake, setwhatcanyoumake] = useState([]);

  function userData(value) {
    if (selectedIngredients.includes(value)) {
      const n = selectedIngredients.findIndex((element) => element === value);
      selectedIngredients.splice(n, 1);
    } else {
      selectedIngredients.push(value);
    }
  }

  function recipeAlgorithm() {
    let make = [];

    allRecipe.forEach((recipe) => {
      let score = 0;
      selectedIngredients.forEach((ingredient) => {
        recipe.ingredients.forEach((value) => {
          if (ingredient === value) {
            score++;
            recipe.score = score;
          }
        });
      });
    });

    for (let i = 0; i < allRecipe.length; i++) {
      console.log("is this even working");
      if (allRecipe[i].score >= allRecipe[i].ingredients.length) {
        make.push(allRecipe[i].name);
      }

      console.log("make: ", make);
      setwhatcanyoumake(make);
    }

    if (make.length === 0) {
      console.log('setting it that way');
      setwhatcanyoumake(["select more ingredients"]);
    }

  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectedIngredients />}></Route>
        <Route path="/recipe" element={<RecipePage />}></Route>
      </Routes>
    </Router>
    // <div className="container">
    //   <h1>What do you wanna make today</h1>

    //   <div style={{ display: "flex", overflow: "scroll" }}>
    //     {ingredients.map((value, index) => {
    //       return (
    //         <Ingredient
    //           key={index}
    //           id={index}
    //           name={value}
    //           userSelected={userData}
    //         />
    //       );
    //     })}
    //   </div>
    //   <div>
    //     <button
    //       onClick={recipeAlgorithm}
    //       className="btn btn-primary my-2"
    //       style={{ width: "100%" }}
    //     >
    //       what can i make
    //     </button>
    //   </div>
    //   <div>
    //     {whatcanyoumake.map((value, index) => {
    //       return <RecipeItem key={index} name={value}>  </RecipeItem>;
    //     })}
    //   </div>
    // </div>
  );
}
