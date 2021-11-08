const NewRecipeForm = (props) => {

  return (
    <div id="newFormContainer">
      <button onClick={props.displayModal}>Add New Recipe</button>
      <div id="modal" className="hide">
        <div id="modalInfo">
          <h2>Add New Recipe</h2>
          <button onClick={props.hideModal}>Close</button><br/><br/>
          <form onSubmit={props.addNewRecipe}>
            Title: <input type="text" onChange={props.addNewTitle} /><br/><br/>
            Decription: <input type="text" onChange={props.addNewDescription} /><br/><br/>
            Ingredients: <input type="text" onChange={props.addNewIngredients} /><br/><br/>
            Directions: <input type="text" onChange={props.addNewDirections} /><br/><br/>
            Time (in minutes): <input type="text" onChange={props.addNewTime} /><br/><br/>
            Image: <input type="text" onChange={props.addNewImage} /><br/><br/>
            <input type="submit" value="Submit Recipe" />
            </form>
          </div>
      </div>
    </div>
  )
}

export default NewRecipeForm
