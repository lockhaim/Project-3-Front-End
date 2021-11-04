import EditRecipeForm from './editRecipeForm'

const RecipeIndex = (props) => {
  return (
    <div>
      <ul>
        {props.foods.map((recipe) => {
          return (
            <li>
              {recipe.title}<br/>
              {recipe.description}<br/>
              {recipe.time}<br/>
              <button onClick={ (event)=> {props.handleDelete(recipe)}}>Delete</button>
              <EditRecipeForm handleEditRecipe={props.handleEditRecipe}
              addNewTitle={props.addNewTitle}
              addNewDescription={props.addNewDescription}
              addNewIngredients={props.addNewIngredients}
              addNewDirections={props.addNewDirections}
              addNewTime={props.addNewTime}
              addNewImage={props.addNewImage}
              />

            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RecipeIndex
