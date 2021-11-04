import axios from 'axios'
import {useState} from 'react'



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
              <button onClick={ (event)=> {props.handleDelete(recipe)}}>DELETE</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RecipeIndex
