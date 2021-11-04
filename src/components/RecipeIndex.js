const RecipeIndex = (props) => {
  return (
    <div>
      <ul>
        {props.foods.map((recipe) => {
          return (
            <li>
              {recipe.title}
              {recipe.description}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RecipeIndex
