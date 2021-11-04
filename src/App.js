import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

import NewRecipeForm from './components/NewRecipeForm'

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

  useEffect(() => {
    axios
      .get('https://project-3-recipes.herokuapp.com/recipes')
      .then((response) => {
        setRecipes(response.data)
      })
  },[])
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
      />
      {console.log(recipes)}
      <ul>
        {recipes.map((recipe) => {
          return (
            <li>
              {recipe.description}
            </li>
          )
        })}
      </ul>
    </main>
  )
}

// this comment

export default App;
