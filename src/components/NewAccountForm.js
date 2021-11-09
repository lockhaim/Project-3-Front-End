import React, {useState} from 'react'

const NewAccountForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const createUser = (event) => {
    event.preventDefault()
    let userObj = {
      username: username,
      password: password
    }
    props.handleCreateUser(userObj)
  }

  return (
    <div>
      <h4>Create New Account</h4>
      <form onSubmit={createUser}>
        <input type="text" placeholder="Username" onChange={(event) => {
          setUsername(event.target.value)
        }}/><br/>
        <input type="text" placeholder="Password" onChange={(event) => {
          setPassword(event.target.value)
        }}/><br/>
        {props.toggleError ?
          props.errorMessage
          :
          null
        }
        <input type="submit" value="Create Account" class="button"/>
      </form>
    </div>
  )
}

export default NewAccountForm
