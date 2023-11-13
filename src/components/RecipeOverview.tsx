import { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import recipies from "../data.json"

function RecipeOverview() {
    const [recipeArray, setRecipeArray] = useState(recipies.recipies)

    // const [data, setData] = useState();

    // const getData=()=>{
    //     fetch('data.json',{
    //         headers : {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     })
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(myJson) {
    //         console.log(myJson);
    //         console.log("bla" + myJson.recipes);
    //         console.log(recipes);
    //         setData(myJson)
    //     });
    // }

    // useEffect(() => {
    //     getData()
    // },[])

   

    const handleClick = (id : number) => {
        console.log("clicked on recipe " + id);
        // const newRecipes = recipes.filter(recipe => recipe.id !== id)
        // setRecipes(newRecipes)
    }

    useEffect(() => {
        console.log(recipeArray)
    },[])

    return ( 
        <>
            {/* adding component and passing props to that child component */}
            <RecipeList recipes={recipeArray} title="Alle Rezepte" handleClick={handleClick}/>

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