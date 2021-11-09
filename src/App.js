import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

import NewRecipeForm from './components/NewRecipeForm'
import RecipeIndex from './components/RecipeIndex'
import LoginForm from './components/LoginForm'
import NewAccountForm from './components/NewAccountForm'

const App = () => {
  ///////////////////////////
  // recipe states
  ///////////////////////////
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

  //modal code
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
                directions: newDirections,
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

  ///////////////////////////
  // user states
  ///////////////////////////
  const [toggleLogin, setToggleLogin] = useState(true)
  const [toggleError, setToggleError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [toggleLogout, setToggleLogout] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const handleCreateUser = (userObj) => {
    axios.post(
      'https://project-3-recipes.herokuapp.com/user/newaccount', userObj
    ).then((response) => {
      if (response.data.username) {
        setToggleError(false)
        setErrorMessage('')
        setCurrentUser(response.data)
        handleToggleLogout()
      } else {
        setErrorMessage(response.data)
        setToggleError(true)
      }
    })
  }

  const handleLogin = (userObj) => {
    axios.put(
      'https://project-3-recipes.herokuapp.com/user/login', userObj
    ).then((response) => {
      if(response.data.username) {
        setToggleError(false)
        setErrorMessage('')
        setCurrentUser(response.data)
        handleToggleLogout()
      } else {
        setToggleError(true)
        setErrorMessage(response.data)
      }
    })
  }

  const handleLogout = () => {
    setCurrentUser({})
    handleToggleLogout()
  }

  const handleToggleForm = () => {
    setToggleError(false)
    if (toggleLogin === true) {
      setToggleLogin(false)
    } else {
      setToggleLogin(true)
    }
  }

  const handleToggleLogout = () => {
    if (toggleLogout) {
      setToggleLogout(false)
    } else {
      setToggleLogout(true)
    }
  }



  return (
    <main>
      <h1 class="main-header">Welcome to Culinary REACT-ion!</h1>
      <div class="auth-container">
        {toggleLogout ?
          <button class="logout-btn" onClick={handleLogout} class="button">Logout</button>
          :
            <div class="auth-section">
                <LoginForm
                  handleLogin={handleLogin}
                  toggleError={toggleError}
                  errorMessage={errorMessage}
                />
                <NewAccountForm
                  handleCreateUser={handleCreateUser}
                  toggleError={toggleError}
                  errorMessage={errorMessage}
                />
            </div>
        }
      </div>

      {currentUser.username ?
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
          currentUser={currentUser}
        />
        :
        null
      }


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
        currentUser={currentUser}
      />

    </main>
  )
}

// this comment

export default App;
