import { useParams } from "react-router-dom";
import { useFetchWithKey } from "../customHooks/useFetch";

function RecipeDetails() {
    // getting parameter from url (here called id -> see App.tsx)
    const { key } = useParams()
    const { objectData: recipe, error, isPending } = useFetchWithKey("http://localhost:8000/recipies", key)



    return (<>
        <div className="Content">
            <div className="Middle">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {recipe && !error && <>{makeDetail(recipe)}</>}

            </div>
        </div>
    </>);
}

function makeDetail(recipe: Recipe) {

    return (
        <div className="RecipeDetail">
            <h2>{recipe.title}</h2>
            <h3>Zutaten</h3>
            {recipe.ingredients.map((ingredient: Ingredient) => (
                <p> {ingredient.name && <>{ingredient.amount} --- </>}{ingredient.name}</p>
            ))}

            <h3>Methode</h3>
            {recipe.method.map((step: string) => (
                <p>{step}</p>
            ))}

            <p>{recipe.comment}</p>

            {recipe.tags.map((tag: string) => (
                (<div className="Tag">{tag}</div>)
            ))}


        </div>
    )


}

export default RecipeDetails;