const EditRecipeForm = (props) => {
    return (
        <div>
            <h4>Edit Recipe</h4>
            <form onSubmit={props.handleEditRecipe}>
            Title: <input type="text" onChange={props.addNewTitle}/><br/>
            <input type='submit' value='submit'/>
            </form>
        </div>
    )
}

export default EditRecipeForm
