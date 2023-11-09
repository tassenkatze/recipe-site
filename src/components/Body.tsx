import { useState } from "react";

function Body() {
    const [recipes, setRecipes] = useState([
        {id: 1, title: "Rezeptname", body: "Hier dann die Anleitung...", tags: "bla"},
        {id: 2, title: "Rezeptname", body: "Hier dann die Anleitung...", tags: "bla"},
        {id: 3, title: "Rezeptname", body: "Hier dann die Anleitung...", tags: "bla"},
        {id: 4, title: "Rezeptname", body: "Hier dann die Anleitung...", tags: "bla"},
    ])

    return ( 
        <div className="Content">
            <div className="Middle">
                <h2>Willkommen zu meiner Rezepte Website</h2>
                {
                    recipes.map((recipe) => (
                        <div className="RecipePreview" key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.body}</p>
                        </div>
                    ))
                }
            </div>            
        </div>
     );
}

export default Body;