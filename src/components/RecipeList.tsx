import { Link } from "react-router-dom";

function RecipeList(props: RecipeListProps) {
    const recipes = props.recipes as Array<Recipe>;
    const title = props.title;

    return (
        <div className="Recipes">
            <h3>{title}</h3>
            {recipes.map((recipe: Recipe) => (
                <div className="RecipePreview" key={recipe.key}>
                    <Link to={"/recipe-site/recipes/" + recipe.key}>
                        <h3>{recipe.title}</h3>
                        {recipe.tags.map((tag: string) => (
                            (<div className="Tag">{tag}</div>)
                        ))}
                    </Link>
                    {/* <button onClick={() => props.handleClick(recipe.id)}>Click here!</button> */}
                </div>
            ))}
        </div>
    );
}


export default RecipeList;