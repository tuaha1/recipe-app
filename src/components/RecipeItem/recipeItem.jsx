import "./recipeItem.css"

export default function RecipeItem(props){
    return <div className="main-card">
        <h1>{props.name}</h1>
    </div>
}