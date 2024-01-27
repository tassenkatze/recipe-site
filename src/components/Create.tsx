import { useState } from "react";
import { ActionMeta } from "react-select";
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

    const handleCreateTags = (newTagName: string) => {
        const newTag: Tag = {
            label: newTagName.toLowerCase().replace(/\W/g, ''),
            value: newTagName.toLowerCase().replace(/\W/g, ''),
        }
        setTags((prev) => [...prev, newTag]);
        setAvailableTags((prev) => [...prev, newTag]);
    }

    const handleOnCreate = (selectedTags: readonly Tag[]) => {
        if (selectedTags) {
            const tags: Tag[] = [...selectedTags]
            setTags(tags);
        }
    };

    return (
        <div className="Content">
            <div className="Middle">
                <h2>Add new recipe</h2>
                <form className="CreateForm">
                    <label>Recipe title</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(input) => setTitle(input.target.value)}
                    />
                    <label>Kommentar</label>
                    <textarea
                        required
                        value={comment}
                        onChange={(input) => setComment(input.target.value)}
                    />
                    <label>Tags</label>
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