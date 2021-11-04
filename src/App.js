import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

import NewRecipeForm from './components/NewRecipeForm'

const App = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/recipes')
      .then((response) => {
        setRecipes(response.data)
      })
  },[])
  return (
    <main>
      <h1>Hello World!</h1>
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
