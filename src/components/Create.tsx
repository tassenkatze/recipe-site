import { useState } from "react";
import CreatableSelect from "react-select/creatable"

function Create() {
    type Tag = {
        value: string;
        label: string;
    };

    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [tags, setTags] = useState<Tag[]>([]);

    const [availableTags, setAvailableTags] = useState<Tag[]>([
        { value: "kochen", label: "kochen" },
        { value: "backen", label: "backen" },
        { value: "herzhaft", label: "herzhaft" },
        { value: "süß", label: "süß" },
    ]);

    const handleCreateTags = (newTagName: string): void => {
        const newTag: Tag = {
            label: newTagName.toLowerCase().replace(/\W/g, ''),
            value: newTagName.toLowerCase().replace(/\W/g, ''),
        }
        setTags((prev) => [...prev, newTag]);
        setAvailableTags((prev) => [...prev, newTag]);
    }

    const handleOnCreate = (selectedTags: readonly Tag[]): void => {
        if (selectedTags) {
            setTags([...selectedTags]);
        }

    };

    return (
        <div className="Content">
            <div className="Middle">
                <h2>Add new recipe</h2>
                <form className="CreateForm">
                    <label htmlFor="recipeTitle">Recipe title</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(input: React.ChangeEvent<HTMLInputElement>) => setTitle(input.target.value)}
                    />
                    <label htmlFor="recipeComment">Kommentar</label>
                    <textarea
                        required
                        value={comment}
                        onChange={(input: React.ChangeEvent<HTMLTextAreaElement>) => setComment(input.target.value)}
                    />
                    <label htmlFor="tags">Tags</label>
                    <CreatableSelect
                        isMulti
                        options={availableTags}
                        onChange={handleOnCreate}
                        onCreateOption={handleCreateTags}
                        value={tags}
                    />
                    <button>Add recipe</button>
                </form>
            </div>
        </div>
    );
}

export default Create;