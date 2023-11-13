function RecipeList(props: any) {
    const recipes = props.recipes;
    const title = props.title;

    return ( 
        <div className="Recipes">
            <h3>{title}</h3>
            {recipes.map((recipe: any) => (
                <div className="RecipePreview" key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.body}</p>
                    <p>{recipe.tags}</p>
                    <button onClick={() => props.handleClick(recipe.id)}>Click here!</button>
                </div>
            ))}
        </div>
     );
}

export default RecipeList;