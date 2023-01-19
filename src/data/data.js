import Recipe from "../models/recipe";

const recipeData = [
  ["biryani", ["rice", "tomato", "onion", "water"]],
  ["friedrice", ["rice", "tomato", "onion", "water", "raddish"]],
  ["apple rice", ["rice", "apple"]],
  ['noodles', ['capsicum', 'chicken']]
];

const ingredients = [
  ["Vegetables", ["spinach", "onion", "kale", "broccoli", "cauliflower", "cabbage", "lettuce", "arugula", "collard greens", "mustard greens", "turnip greens", "radicchio", "endive", "escarole", "frisee", "watercress", "dandelion greens", "beet greens", "chard", "bok choy", "napa cabbage", "brussels sprouts", "asparagus", "green beans", "yellow beans", "wax beans", "snap peas", "snow peas", "okra", "eggplant", "tomatoes", "bell peppers", "jalapeno peppers", "habanero peppers", "poblano peppers", "ancho peppers", "serrano peppers", "cucumber", "zucchini", "squash", "pumpkin", "butternut squash", "acorn squash", "spaghetti squash", "delicata squash", "cushaw squash", "yellow squash", "patty pan squash", "summer squash"]],
  ["Fruits", ["oranges", "lemons", "limes", "grapefruits", "tangerines", "clementines", "mandarins", "tangerines", "pomelos", "bananas", "strawberries", "blueberries", "raspberries", "blackberries", "cranberries", "mulberries", "boysenberries", "gooseberries", "currants", "grapes", "watermelon", "cantaloupe", "honeydew", "muskmelon", "rockmelon", "pineapple", "mango", "papaya", "kiwi", "guava", "passion fruit", "lychee", "longan", "dragon fruit", "pears", "peaches", "plums", "apricots", "nectarines", "cherries", "figs", "dates", "pomegranates", "persimmons", "quince", "olives", "avocados", "coconuts", "mangosteen", "lychee", "longan"]],
  ["Oils", ["olive oil", "vegetable oil", "canola oil", "sunflower oil", "peanut oil", "soybean oil", "corn oil", "safflower oil", "grapeseed oil", "coconut oil", "palm oil", "sesame oil", "avocado oil", "almond oil", "walnut oil", "pumpkin seed oil", "hemp oil", "flaxseed oil", "rice bran oil", "mustard oil", "macadamia oil", "perilla oil", "ghee", "clarified butter", "bacon grease", "duck fat", "lard", "tallow"]]

];

let allRecipe = [];

recipeData.forEach((value) => {
  let recipe = new Recipe(value[0], value[1]);
  allRecipe.push(recipe);
});

export { allRecipe, ingredients };
