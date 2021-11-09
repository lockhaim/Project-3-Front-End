import EditRecipeForm from './editRecipeForm'

const RecipeIndex = (props) => {
  return (
    <div class='base'>
      <ul class='flex-container'>
        {props.foods.map((recipe) => {
          return (
            <li class='recipe'>
                <div class='recipe-main'>
                {console.log(recipe._id)}
                  <h3>{recipe.title}</h3><br/>
                  {recipe.description}<br/>
                  Time: {recipe.time} Minutes <br/>
                  Ingredients: {recipe.ingredients}<br/>
                  Directions: {recipe.directions}<br/>
                  <img class='recipe-img' src={recipe.image} alt={recipe.title}></img><br/>
                  {props.currentUser.username ?
                    <button class='button delete' onClick={ (event)=> {props.handleDelete(recipe)}}>Delete</button>
                    :
                    null
                  }
                </div>
                <div class='edit-form'>
                  <EditRecipeForm handleEditRecipe={props.handleEditRecipe}
                  addNewTitle={props.addNewTitle}
                  addNewDescription={props.addNewDescription}
                  addNewIngredients={props.addNewIngredients}
                  addNewDirections={props.addNewDirections}
                  addNewTime={props.addNewTime}
                  addNewImage={props.addNewImage}
                  recipe={recipe}
                  currentUser={props.currentUser}
                  />
                </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// <EditRecipeForm handleEditRecipe={props.handleEditRecipe}
// addNewTitle={props.addNewTitle}
// addNewDescription={props.addNewDescription}
// addNewIngredients={props.addNewIngredients}
// addNewDirections={props.addNewDirections}
// addNewTime={props.addNewTime}
// addNewImage={props.addNewImage}
// recipe={recipe}
// />

export default RecipeIndex
