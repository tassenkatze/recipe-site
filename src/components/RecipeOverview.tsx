import { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";
import RecipeList from "./RecipeList";


//import data from "../data.json"

function RecipeOverview() {
    //const [recipeArray, setRecipeArray] = useState(data.recipies);

    //useFetch gibt 'data' zurück, wird hier als 'recipeArray' verwendet
    const { data: recipeArray, isPending, error } = useFetch("http://localhost:8000/recipies")

    const handleClick = (title: string) => {
        console.log("clicked on recipe " + title);
    }

    //only use following on first render
    useEffect(() => {
        console.log("welcome!")
    }, [])

    return (
        <div className="Content">
            <div className="Middle">
                <h2>Willkommen zu meiner Rezepte Website</h2>
                {/* adding component and passing props to that child component */}
                {/* CONDITIONAL TEMPLATE: only renders when certain conditions are met (eg. both true/not null */}
                {isPending && <div>Loading...</div>}
                {/* displayed when we get error while fetching data */}
                {error && <div>{error}</div>}
                {/* only renders the following, if recipeArray is not null, because of &&  --> only renders once the data is saved in Array */}
                {recipeArray && !error && <RecipeList recipes={recipeArray} title="Alle Rezepte" handleClick={handleClick} />}


                {/* {recipeArray && !error && <RecipeList recipes={recipeArray.filter(FilterRecipes("süß"))} title="Süße Rezepte" handleClick={handleClick} />} */}
            </div>
        </div>
    );
}


function FilterRecipes(tag: string) {
    return function (element: any) {
        return element.tags.includes(tag);
    };
}

export default RecipeOverview;