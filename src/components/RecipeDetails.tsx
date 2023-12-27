import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

function RecipeDetails() {
    // getting parameter from url (here called id -> see App.tsx)
    const { key } = useParams()
    const { data: recipe, error, isPending } = useFetch("http://localhost:8000/recipies?key=" + key)



    return (<>
        <div className="Content">
            <div className="Middle">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {recipe && !error && <>{makeDetail(recipe[0])}</>}

                {/* {recipe && !error && <> {JSON.stringify(recipe[0])}</>} */}

            </div>
        </div>
    </>);
}

type Recipe = {
    title: string;
    key: string;
    ingredients: Array<Array<string>>;
    method: Array<string>;
    comment: string;
    tags: Array<string>;
};

function makeDetail(recipe: Recipe) {
    return (
        <div className="RecipeDetail">
            <h2>{recipe.title}</h2>
            <h3>Zutaten</h3>
            {recipe.ingredients.map((ingredient: any) => (
                <p> {ingredient[0] && <>{ingredient[0]} --- </>}{ingredient[1]}</p>
            ))}

            <h3>Methode</h3>
            {recipe.method.map((step: any) => (
                <p>{step}</p>
            ))}

            <p>{recipe.comment}</p>

            {recipe.tags.map((tag: any) => (
                (<div className="Tag">{tag}</div>)
            ))}


        </div>
    )
}

export default RecipeDetails;