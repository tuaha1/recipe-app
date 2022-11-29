import Recipe from "../models/recipe";

const recipeData = [
  ["biryani", ["rice", "tomato", "onion", "water"]],
  ["friedrice", ["rice", "tomato", "onion", "water", "raddish"]],
  ["apple rice", ["rice", "apple"]]
];

const ingredients = [
  "water",
  "rice",
  "onion",
  "tomato",
  "carrot",
  "raddish",
  "apple",
  "mango",
  "banana"
];

let allRecipe = [];

recipeData.forEach((value) => {
  let recipe = new Recipe(value[0], value[1]);
  allRecipe.push(recipe);
});

export { allRecipe, ingredients };
