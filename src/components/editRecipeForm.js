const EditRecipeForm = (props) => {
    return (
        <div className="newFormModal">
            <h4>Edit Recipe</h4>
            <form
              id={props.recipe._id}
              onSubmit={(event) => {
                event.preventDefault()
                props.handleEditRecipe(props.recipe)
            }}>

            Title: <input type="text" onChange={props.addNewTitle} placeholder={props.recipe.title}/><br/>

            Description: <input type="text" onChange={props.addNewDescription} placeholder={props.recipe.description}/><br/>

            Ingredients: <input type="text" onChange={props.addNewIngredients} placeholder={props.recipe.ingredients}/><br/>

            Directions: <input type="text" onChange={props.addNewDirections} placeholder={props.recipe.directions}/><br/>

            Time (in minutes): <input type="text" onChange={props.addNewTime} placeholder={props.recipe.time}/><br/>

            Image: <input type="text" onChange={props.addNewImage} placeholder={props.recipe.image}/><br/>
            {props.currentUser.username ?
            <input class='button' type='submit' value='submit'/>
            :
            null
            }
            </form>
        </div>
    )
}

export default EditRecipeForm
