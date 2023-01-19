import AddItem from "../helper/addItem";
import { ingredients } from "../data/data";

function SelectedIngredients() {

    return <div className="container">


        <h1 className="display-3 py-4">Select Ingredients</h1>


        {/* <input type="checkbox" className="btn-check" id="onion" onClick={AddItem} autoComplete="off" />
        <label className="btn btn-outline-secondary m-1" htmlFor="onion">onion</label>

        <input type="checkbox" className="btn-check" id="tomato" onClick={AddItem} autoComplete="off" />
        <label className="btn btn-outline-secondary m-1" htmlFor="tomato">tomato</label>

        <input type="checkbox" className="btn-check" id="brinjal" onClick={AddItem} autoComplete="off" />
        <label className="btn btn-outline-secondary m-1" htmlFor="brinjal">brinjal</label> */}

        <div>
            {ingredients.map((item, index) => {
                return <div key={index} style={{ margin: "25px 0px" }}>
                    <h3>{item[0]}</h3>
                    {item[1].map((element, index) => {
                        return <div className="collapse" key={index} style={{ display: "inline-block" }}>
                            <input type="checkbox" className="btn-check" id={element} onClick={AddItem} autoComplete="off" />
                            <label className="btn btn-outline-secondary m-1" htmlFor={element}>{element}</label>
                        </div>
                    })}
                </div>


            })}
            <br />
        </div>

        <button style={{ width: "100%", borderRadius: "0px" }} type="button" className="btn btn-primary i btn-md  fixed-bottom">Search</button>

    </div >
}

export default SelectedIngredients;