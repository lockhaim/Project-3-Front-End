import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios
      .get('https://project-3-recipes.herokuapp.com/recipes')
      .then((response) => {
        setRecipes(response.data)
      })
  })
  return (
    <main>
      <h1>Hello World!</h1>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li>
              {recipe.description}
            <li>
          )
        })}
      </ul>
    </main>
  )
}

// this comment

export default App;
