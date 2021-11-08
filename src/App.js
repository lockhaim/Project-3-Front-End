import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

import NewRecipeForm from './components/NewRecipeForm'
import RecipeIndex from './components/RecipeIndex'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [newTitle, setNewTitle] = useState()
  const [newDescription, setNewDescription] = useState()
  const [newIngredients, setNewIngredients] = useState()
  const [newDirections, setNewDirections] = useState()
  const [newTime, setNewTime] = useState()
  const [newImage, setNewImage] = useState()
  const [newComplete, setNewComplete] = useState(false)


  //new form handlers
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

  const modal = document.getElementById('modal')

  const displayModal = () => {
    modal.setAttribute('class', 'show')
  }

  const hideModal = () => {
    modal.classList.replace('show', 'hide')
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
          .then((response) => {
            setRecipes(response.data)
          })
      })
    hideModal()
  }

  useEffect(() => {
    axios
      .get('https://project-3-recipes.herokuapp.com/recipes')
      .then((response) => {
        setRecipes(response.data)
      })
  },[])

  const handleDelete = (recipeData) => {
      axios
          .delete(`https://project-3-recipes.herokuapp.com/recipes/${recipeData._id}`)
          .then(() => {
              axios
                  .get(`https://project-3-recipes.herokuapp.com/recipes`)
                  .then((response) => {
                      setRecipes(response.data)
                  })
          })
  }

  const handleEditRecipe = (recipeData) => {
      axios
        .put(
            `https://project-3-recipes.herokuapp.com/recipes/${recipeData._id}`,
            {
                title:newTitle,
                description:newDescription,
                ingredients:newIngredients,
                time:newTime,
                image:newImage,
                complete:newComplete,
            }
        )
        .then(()=>{
            axios
            .get('https://project-3-recipes.herokuapp.com/recipes')
            .then((response)=>{
                setRecipes(response.data)
            })
        })
  }




  return (
    <main>
      <h1>Hello World!</h1>
      <NewRecipeForm
        addNewTitle={addNewTitle}
        addNewDescription={addNewDescription}
        addNewIngredients={addNewIngredients}
        addNewDirections={addNewDirections}
        addNewTime={addNewTime}
        addNewImage={addNewImage}
        addNewRecipe={addNewRecipe}
        displayModal={displayModal}
        hideModal={hideModal}
      />
      {console.log(recipes)}
      <RecipeIndex foods={recipes}
        handleDelete={handleDelete}
        handleEditRecipe={handleEditRecipe}
        addNewTitle={addNewTitle}
        addNewDescription={addNewDescription}
        addNewIngredients={addNewIngredients}
        addNewDirections={addNewDirections}
        addNewTime={addNewTime}
        addNewImage={addNewImage}
      />

    </main>
  )
}

// this comment

export default App;
