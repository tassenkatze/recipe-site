import { Link } from "react-router-dom";

function RecipeList(props: any) {
    const recipes = props.recipes;
    const title = props.title;

    return (
        <div className="Recipes">
            <h3>{title}</h3>
            {recipes.map((recipe: any) => (
                <div className="RecipePreview" key={recipe.key}>
                    <Link to={"/recipe-site/recipes/" + recipe.key}>
                        <h3>{recipe.title}</h3>
                        {recipe.tags.map((tag: any) => (
                            (<div className="Tag">{tag}</div>)
                        ))}
                    </Link>
                    {/* <button onClick={() => props.handleClick(recipe.id)}>Click here!</button> */}
                </div>
            ))}
        </div>
    );
}

function getTags(tags: any) {
    {

    }
}

export default RecipeList;