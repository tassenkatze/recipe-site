import { useEffect, useState } from "react";
import RecipeList from "./RecipeList";

function Body() {
    const [recipes, setRecipes] = useState([
        {id: 1, title: "Rezept1", body: "Hier dann die Anleitung...", tags: ["tag1", "tag2"]},
        {id: 2, title: "Rezept2", body: "Hier dann die Anleitung...", tags: ["tag1", "tag3"]},
        {id: 3, title: "Rezept3", body: "Hier dann die Anleitung...", tags: ["tag1", "tag3"]},
        {id: 4, title: "Rezept4", body: "Hier dann die Anleitung...", tags: ["tag4", "tag5"]},
    ])

    const handleClick = (id : number) => {
        console.log("clicked on block " + id);
        const newRecipes = recipes.filter(recipe => recipe.id !== id)
        setRecipes(newRecipes)
    }

    useEffect(() => {
        console.log("use effect")
    })

    // //only use following on first render
    // useEffect(() => {
    //     console.log("test")
    // }, [])

    return ( 
        <div className="Content">
            <div className="Middle">
                <h2>Willkommen zu meiner Rezepte Website</h2>
                {/* adding component and passing props to that child component */}
                <RecipeList recipes={recipes} title="Alle Rezepte" handleClick={handleClick}/> 
                <RecipeList recipes={recipes.filter(FilterRecipes("tag1"))} title="Rezepte mit tag1" handleClick={handleClick}/> 
            </div>            
        </div>
     );
}

function FilterRecipes(tag: string) {
    return function(element:any) {
        return element.tags.includes(tag);
    };
}

export default Body;