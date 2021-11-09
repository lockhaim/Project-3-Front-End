import React, {useState} from 'react'

const LoginForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = (event) => {
    event.preventDefault()
    let userObj = {
      username: username,
      password: password
    }
    props.handleLogin(userObj)
  }

  return (
    <div>
      <h4>Login</h4>
      <form onSubmit={login}>
        <input type="text" placeholder="Username" onChange={(event) => {
          setUsername(event.target.value)
        }}/><br/>
        <input type="text" placeholder="Password" onChange={(event) => {
          setPassword(event.target.value)
        }}/><br/>
        {props.toggleError?
          props.errorMessage
          :
          null
        }
        <input type="submit" value="Login" class="button"/>
      </form>
    </div>
  )
}

export default LoginForm
