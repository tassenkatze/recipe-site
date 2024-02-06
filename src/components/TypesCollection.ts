
declare global {

    type RecipeData = Recipe | Array<Recipe>;

    type RecipeListProps = {
        recipes: RecipeData,
        title: string,
        handleClick(title: string): void
    }


    type Ingredient = {
        amount: string;
        name: string;
    }

    type Tag = {
        value: string;
        label: string;
    };

    type Recipe = {
        title: string;
        key: string;
        ingredients: Array<Ingredient>;
        method: Array<string>;
        comment: string;
        tags: Array<string>;
    };
}

export { }