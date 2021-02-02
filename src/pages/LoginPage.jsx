import React from 'react'
import {useState, useEffect} from "react"
import {withRouter} from "react-router-dom"
import Form from './Form'
function LoginPage(props) {
  const loggedInUser = props.loggedInUser
  const setLoggedInUser = props.setLoggedInUser

  const dummyRef = React.useRef()

  const [flashErr, setFlashError] = useState(false)

  const handleLogin = (e, form) => {
    e.preventDefault()
    fetch("http://localhost:5000/users/login", {
      body: JSON.stringify(form),
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      credentials: 'include'
    })
    .then(data => data.json())
    .then(user => {
        if (user) {
          setLoggedInUser(user.user)
          props.history.push("/") 
        }
    })
    .catch(() => setFlashError("Invalid Email or Password"))
    // Send Data
  }

  return (
    <>
    {flashErr != false ? 
    <div>
      <h2>{flashErr}</h2>
    </div>
    : <></>
    } 

    {!loggedInUser
    || loggedInUser == false 
    || loggedInUser.user == null ? (
      <div>
      <h2>Login</h2>
      <Form handleSubmit={handleLogin} 
        multiple={[false, false]} 
        refers={[dummyRef, dummyRef]}  
        formFields={["email", "password"]} 
        formTypes={["text", "password"]} 
        title="Log In!" />
      </div>
    ) : (
      <h2>You are logged in</h2>
    )}
    </>
  )
}

export default withRouter(LoginPage);
