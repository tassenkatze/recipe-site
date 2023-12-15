import { useEffect } from "react";
import RecipeOverview from "./RecipeOverview";

function Body() {

    //only use following on first render
    useEffect(() => {
        console.log("welcome!")
    }, [])


    return (
        <div className="Content">
            <div className="Middle">
                <h2>Willkommen zu meiner Rezepte Website</h2>
                <RecipeOverview />
            </div>
        </div>
    );
}




export default Body;