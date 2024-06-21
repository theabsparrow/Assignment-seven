import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../recipe/Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleCookButton}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect( () => {
        fetch('recipes.json')
        .then(response => response.json())
        .then(info => setRecipes(info))
    }, [])
    return (
        <div className="grid grid-cols-2 gap-4 w-[55vw]">
            {
            recipes.map(recipe => <Recipe 
                key={recipe.recipe_id}
                 recipe={recipe}
                 handleCookButton={handleCookButton}
                 ></Recipe>)
            }


        </div>
    );
};
Recipes.propTypes = {
    handleCookButton: PropTypes.func
}
export default Recipes;