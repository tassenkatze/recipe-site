import { useState } from "react";
import { MultiValue } from "react-select";
import CreatableSelect from "react-select/creatable"

function Create() {
    type OptionType = {
        value: string;
        label: string;
    };

    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [tags, setTags] = useState<String[]>([]);

    const [options, setOptions] = useState<OptionType[]>([
        { value: "kochen", label: "kochen" },
        { value: "backen", label: "backen" },
        { value: "herzhaft", label: "herzhaft" },
        { value: "süß", label: "süß" },
    ]);

    const handleCreateTags = (input: string) => {
        const newOption = {
            label: input.toLowerCase().replace(/\W/g, ''),
            value: input.toLowerCase().replace(/\W/g, ''),
        }
        setOptions((prev) => [...prev, newOption]);
        setTags((prev) => [...prev, input]);
    }

    const handleOnCreate = (input: MultiValue<OptionType>) => {
        setTags((prev) => [...prev, input[0].value])
        console.log(input)
        console.log(options)
    }

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
                        options={options}
                        onChange={(input) => handleOnCreate(input)}
                        // onChange={(option: readonly Option[], actionMeta: ActionMeta<Option>) => }
                        // onChange={(input) => setTags((prev) => [...prev, input])}
                        onCreateOption={handleCreateTags}
                    />
                    <button>Add recipe</button>
                    <br />
                    <p>{tags}</p>
                    <p>{options[1].value}</p>
                </form>
            </div>
        </div>
    );
}

export default Create;