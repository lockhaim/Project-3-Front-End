import EditRecipeForm from './editRecipeForm'

const RecipeIndex = (props) => {
  return (
    <div class='base'>
      <ul class='flex-container'>
        {props.foods.map((recipe) => {
          return (
            <li class='recipe'>
                <div>
                {console.log(recipe._id)}
                  <h3>{recipe.title}</h3><br/>
                  {recipe.description}<br/>
                  {recipe.time} Minutes<br/>
                  {recipe.ingredients}<br/>
                  <img class='recipe-img' src={recipe.image} alt={recipe.title}></img><br/>
                  <button class='button delete' onClick={ (event)=> {props.handleDelete(recipe)}}>Delete</button>
                </div>
                <div>
                  <EditRecipeForm handleEditRecipe={props.handleEditRecipe}
                  addNewTitle={props.addNewTitle}
                  addNewDescription={props.addNewDescription}
                  addNewIngredients={props.addNewIngredients}
                  addNewDirections={props.addNewDirections}
                  addNewTime={props.addNewTime}
                  addNewImage={props.addNewImage}
                  recipe={recipe}
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
