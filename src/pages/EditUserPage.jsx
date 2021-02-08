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

    if(form.name 
      && form.email 
      && form.password
      && form.confirm === form.password){
      fetch(`${urlDomain}/users/${loggedInUser._id}`, {
        body: JSON.stringify(form),
        method: "PUT",
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
      .catch((err) => console.log(err))
      // .catch((err) => setFlashError(JSON.stringify(err)))
    }
    else{
      setFlashError("All field are required")
    }

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
    || loggedInUser == false ? (
      <></>
    ) : (
      <div className="page-body loginDiv">
          <h2>Edit Details</h2>
        <div>
        <Form handleSubmit={handleSignup} 
          formFields={["name", "email", "password", "confirm"]} 
          formTypes={["text", "text", "password", "password"]}
          multiple={[false, false, false, false]} 
          refers={[dummyRef, dummyRef, dummyRef, dummyRef]}
          defaultValue={[loggedInUser.name, loggedInUser.email, null, null]}   
          title="Confirm Changes!" />
        </div>
      </div>
    )}
    </>
  )
}

export default withRouter(SignUpPage);
