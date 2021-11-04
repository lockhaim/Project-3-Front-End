const NewRecipeForm = (props) => {
  const [newTitle, setNewTitle] = useState()
  const [newDescription, setNewDescription] = useState()
  const [newIngredients, setNewIngredients] = useState()
  const [newDirections, setNewDirections] = useState()
  const [newTime, setNewTime] = useState()
  const [newImage, setNewImage] = useState()
  const [newComplete, setNewComplete] = useState(false)

  const addNewTitle = (event) => {
    setNewTitle(event.target.value)
  }

  const addNewDescription = (event) => {
    setNewDescription(event.target.value)
  }

  const addNewIngredients = (event) => {
    setNewIngredients(event.target.value)
  }

  const addNewDirections = (event) => {
    setNewDirections(event.target.value)
  }

  const addNewTime = (event) => {
    setNewTime(event.target.value)
  }

  const addNewImage = (event) => {
    setNewImage(event.target.value)
  }

  const addNewRecipe = (event) => {
    event.preventDefault()
    axios
      .post(
        'https://project-3-recipes.herokuapp.com/recipes',
        {
          title: newTitle,
          description: newDescription,
          ingredients: newIngredients,
          directions: newDirections,
          time: newTime,
          image: newImage
        }
      ).then(() => {
        axios
          .get('https://project-3-recipes.herokuapp.com/recipes')
          .then(() => {
            setRecipes(response.data)
          })
      })
  }

  return (
    <div>
      <form>

      </form>
    </div>
  )
}

export default NewRecipeForm
