import { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
//import data from "../data.json"

function RecipeOverview() {
    //const [recipeArray, setRecipeArray] = useState(data.recipies);
    const [recipeArray, setRecipeArray] = useState();
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // const [data, setData] = useState();

    const handleClick = (id : number) => {
        console.log("clicked on recipe " + id);
        // const newRecipes = recipes.filter(recipe => recipe.id !== id)
        // setRecipes(newRecipes)
    }

    useEffect(() => {
        // getting data from json-server
        fetch("http://localhost:8000/recipies")
            // then: only starts when kast task is finished
            .then(res => {
                // throwing error (with own message) if response.ok is false
                if(!res.ok) {
                    throw Error('Could not fetch data')
                }
                // makes typescript array out of response object (res)
                return res.json();
            })
            .then((data => {
                //use data from response
                //console.log(data);
                setRecipeArray(data);
                setIsPending(false);
                setError(null);
            }))
            // catching error
            .catch((e) => {
                setIsPending(false);
                setError(e.message);
            })

    },[])

    return ( 
        <>
            {/* adding component and passing props to that child component */}
            {/* CONDITIONAL TEMPLATE: only renders when certain conditions are met (eg. both true/not null */}
            {isPending && <div>Loading...</div>}
            {/* displayed when we get error while fetching data */}
            {error && <div>{error}</div>}
            {/* only renders the following, if recipeArray is not null, because of &&  --> only renders once the data is saved in Array */}
            {recipeArray && <RecipeList recipes={recipeArray} title="Alle Rezepte" handleClick={handleClick}/>}
            

            {/* <RecipeList recipes={recipeArray.filter(FilterRecipes("tag1"))} title="Rezepte mit tag1" handleClick={handleClick}/> */}
        </>   
     );
}


function FilterRecipes(tag: string) {
    return function(element:any) {
        return element.tags.includes(tag);
    };
}

export default RecipeOverview;