const NewRecipeForm = (props) => {

  return (
    <div>
    <h2>Add New Recipe</h2>
      <form onSubmit={props.addNewRecipe}>
        Title: <input type="text" onChange={props.addNewTitle} /><br/>
        Decription: <input type="text" onChange={props.addNewDescription} /><br/>
        Ingredients: <input type="text" onChange={props.addNewIngredients} /><br/>
        Directions: <input type="text" onChange={props.addNewDirections} /><br/>
        Time (in minutes): <input type="text" onChange={props.addNewTime} /><br/>
        Image: <input type="text" onChange={props.addNewImage} /><br/>
        <input class='button' type="submit" value="Submit Recipe" />
      </form>
    </div>
  )
}

export default NewRecipeForm
