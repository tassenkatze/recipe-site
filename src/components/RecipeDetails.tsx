import { useParams } from "react-router-dom";

function RecipeDetails() {
    // getting parameter from url (here called id -> see App.tsx)
    const { id } = useParams()

    return (<>
        <div className="Content">
            <div className="Middle">
                <h2>blubb - {id}</h2>
            </div>
        </div>
    </>);
}

export default RecipeDetails;