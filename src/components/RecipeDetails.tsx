import { useParams } from "react-router-dom";

function RecipeDetails() {
    // getting parameter from url (here called id -> see App.tsx)
    const { title } = useParams()

    return (<>
        <div className="Content">
            <div className="Middle">
                <h2>{title}</h2>
            </div>
        </div>
    </>);
}

export default RecipeDetails;