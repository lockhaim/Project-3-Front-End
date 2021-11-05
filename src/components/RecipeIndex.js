import EditRecipeForm from './editRecipeForm'

const RecipeIndex = (props) => {
  return (
    <div>
      <ul>
        {props.foods.map((recipe) => {
          return (
            <li>
            {console.log(recipe._id)}
              {recipe.title}<br/>
              {recipe.description}<br/>
              {recipe.time} Minutes<br/>

              <button onClick={ (event)=> {props.handleDelete(recipe)}}>Delete</button>

              <EditRecipeForm handleEditRecipe={props.handleEditRecipe}
              addNewTitle={props.addNewTitle}
              addNewDescription={props.addNewDescription}
              addNewIngredients={props.addNewIngredients}
              addNewDirections={props.addNewDirections}
              addNewTime={props.addNewTime}
              addNewImage={props.addNewImage}
              recipe={recipe}
              />
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
