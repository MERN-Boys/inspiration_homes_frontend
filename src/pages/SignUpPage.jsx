import React from 'react'
import {useState, useEffect} from "react"
import {withRouter} from "react-router-dom"
import Form from './Form'
function SignUpPage(props) {
    const loggedInUser = props.loggedInUser
    const setLoggedInUser = props.setLoggedInUser
    const urlDomain = props.urlDomain

    const dummyRef = React.useRef()

    const [flashErr, setFlashError] = useState(false)

  const handleSignup = (e, form) => {
    e.preventDefault()
    fetch(`${urlDomain}/users/register`, {
      body: JSON.stringify(form),
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      credentials: 'include'
    })
    .then(data => data.json())
    .then(user => {
        if (user.user) {
          setLoggedInUser(user.user)
          props.history.push("/") 
        }
        else{
          setFlashError("Invalid Email or Password")
        }
    })
    .catch((err) => {
        // console.log(err)
        setFlashError("Email Taken")
      }
    )
    
    // Send Data
  }

  return (
    <div className="loginDiv homePageContainer">
    {flashErr != false ? 
    <div>
      <h2>{flashErr}</h2>
    </div>
    : <></>
    } 
    {!loggedInUser
    || loggedInUser == false 
    || loggedInUser.user == null  ? (
      <div className="loginDiv">
        <h2>Register</h2>
        <Form handleSubmit={handleSignup} 
          formFields={["name", "email", "password", "confirm"]} 
          formTypes={["text", "text", "password", "password"]}
          multiple={[false, false, false, false]} 
          refers={[dummyRef, dummyRef, dummyRef, dummyRef]}
          defaultValue={[null, null, null, null]}   
          title="Register!" />
      </div>
    ) : (
      <h2>You are logged in</h2>
    )}
    </div>
  )
}

export default withRouter(SignUpPage);
