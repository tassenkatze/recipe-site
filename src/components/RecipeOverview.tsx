import { useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";
import RecipeList from "./RecipeList";


//import data from "../data.json"

function RecipeOverview() {
    //const [recipeArray, setRecipeArray] = useState(data.recipies);

    const {data: recipeArray, isPending, error} = useFetch("http://localhost:8000/recipies")

    const handleClick = (id : number) => {
        console.log("clicked on recipe " + id);
        // const newRecipes = recipes.filter(recipe => recipe.id !== id)
        // setRecipes(newRecipes)
    }

    return ( 
        <>
            {/* adding component and passing props to that child component */}
            {/* CONDITIONAL TEMPLATE: only renders when certain conditions are met (eg. both true/not null */}
            {isPending && <div>Loading...</div>}
            {/* displayed when we get error while fetching data */}
            {error && <div>{error}</div>}
            {/* only renders the following, if recipeArray is not null, because of &&  --> only renders once the data is saved in Array */}
            {recipeArray && !error && <RecipeList recipes={recipeArray} title="Alle Rezepte" handleClick={handleClick}/>}
            

            {/* {recipeArray && !error && <RecipeList recipes={recipeArray.filter(FilterRecipes("tag1"))} title="Rezepte mit tag1" handleClick={handleClick}/>} */}
        </>   
     );
}


function FilterRecipes(tag: string) {
    return function(element:any) {
        return element.tags.includes(tag);
    };
}

export default RecipeOverview;