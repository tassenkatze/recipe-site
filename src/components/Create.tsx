import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable"

function Create() {

    let callOnce: boolean;

    useEffect(() => {
        callOnce = true;
    }, []);


    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [tags, setTags] = useState<Tag[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [currentIngredient, setCurrentIngredient] = useState<Ingredient>({ amount: "", name: "" });
    const [methods, setMethods] = useState<string[]>([]);
    const [currentMethod, setCurrentMethod] = useState("");

    const [availableTags, setAvailableTags] = useState<Tag[]>([
        { value: "kochen", label: "kochen" },
        { value: "backen", label: "backen" },
        { value: "herzhaft", label: "herzhaft" },
        { value: "süß", label: "süß" },
    ]);



    const handleChangeIngredients = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCurrentIngredient({ ...currentIngredient, [name]: value });
    };


    const handleButtonIngredients = () => {
        if (callOnce) {
            setIngredients([currentIngredient]);
            callOnce = false;
        } else {
            setIngredients((prev) => [...prev, currentIngredient]);
        }
        setCurrentIngredient({ amount: "", name: "" });
    }

    const handleButtonMethods = () => {
        if (callOnce) {
            setMethods([currentMethod]);
            callOnce = false;
        } else {
            setMethods((prev) => [...prev, currentMethod]);
        }
        setCurrentMethod("");
    }

    const handleCreateTags = (newTagName: string): void => {
        const newTag: Tag = {
            label: newTagName.toLowerCase().replace(/\W/g, ''),
            value: newTagName.toLowerCase().replace(/\W/g, ''),
        }
        setTags((prev) => [...prev, newTag]);
        setAvailableTags((prev) => [...prev, newTag]);
    }

    const handleChangeTags = (selectedTags: readonly Tag[]): void => {
        if (selectedTags) {
            setTags([...selectedTags]);
        }

    };

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
    }

    return (
        <div className="Content">
            <div className="Middle">
                <h2>Add new recipe</h2>
                <form className="CreateForm" onSubmit={handleSubmit}>
                    <div className="FullWidthInput">
                        <label htmlFor="recipeTitle">Titel</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(input: React.ChangeEvent<HTMLInputElement>) => setTitle(input.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="recipeIngredients">Zutaten</label>
                        <div>
                            {ingredients.map((ingredient: any) => (
                                <p>{ingredient.amount} --- {ingredient.name}</p>
                            ))}
                        </div>
                        <div className="HalfWidthInput">
                            <input
                                type="text"
                                name="amount"
                                value={currentIngredient.amount}
                                onChange={handleChangeIngredients}
                            />
                            <div></div>
                            <input
                                type="text"
                                name="name"
                                value={currentIngredient.name}
                                onChange={handleChangeIngredients}
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleButtonIngredients}>
                            Add ingredient
                        </button>
                    </div>

                    <div className="FullWidthInput">
                        <label htmlFor="recipeMethod">Methode</label>
                        <div>
                            {methods.map((method: any) => (
                                <p>{method}</p>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={currentMethod}
                            onChange={(input: React.ChangeEvent<HTMLInputElement>) => setCurrentMethod(input.target.value)}
                        />
                        <button
                            type="button"
                            onClick={handleButtonMethods}>
                            Add step
                        </button>
                    </div>


                    <div className="FullWidthInput">
                        <label htmlFor="recipeComment">Kommentar</label>
                        <textarea
                            required
                            value={comment}
                            onChange={(input: React.ChangeEvent<HTMLTextAreaElement>) => setComment(input.target.value)}
                        />
                    </div>


                    <div className="FullWidthInput">
                        <label htmlFor="tags">Tags</label>
                        <CreatableSelect
                            isMulti
                            value={tags}
                            options={availableTags}
                            onChange={handleChangeTags}
                            onCreateOption={handleCreateTags}
                        />

                    </div>


                    <button>Add recipe</button>
                </form>
            </div>
        </div>
    );
}

export default Create;