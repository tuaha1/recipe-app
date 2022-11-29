import { useState } from "react";
import "./styles.css";
import "./components/taskItem";
import Ingredient from "./components/ingredient";
import { allRecipe, ingredients } from "./data/data";

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

    console.log("ayy yoo you there");
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

    console.log(allRecipe);
  }

  return (
    <div className="container">
      <h1>What do you wanna make today</h1>

      <div style={{ display: "flex", overflow: "scroll" }}>
        {ingredients.map((value, index) => {
          return (
            <Ingredient
              key={index}
              id={index}
              name={value}
              userSelected={userData}
            />
          );
        })}
      </div>
      <div>
        <button
          onClick={recipeAlgorithm}
          className="btn btn-primary my-2"
          style={{ width: "100%" }}
        >
          what can i make
        </button>
      </div>
      <div>
        {whatcanyoumake.map((value, index) => {
          return <h1 key={index}> {value} </h1>;
        })}
      </div>
    </div>
  );
}
