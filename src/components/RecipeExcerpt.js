import React from "react";

const RecipeExcerpt = ({recipe}) => {
    return (
        <article className='recipe-card'>
            <figure className='recipe-image'>
                <img src={recipe.image_url} alt={recipe.title}/>
            </figure>
            <h2>{recipe.title}</h2>
            <p className='flex-spacing'>Description: {recipe.description}</p>
            <button>View</button>
        </article>
    )
}

export default RecipeExcerpt