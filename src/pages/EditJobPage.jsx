import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import {useState, useEffect} from "react"
import {withRouter} from "react-router-dom"
import Form from './Form'

function EditJobPage({loggedInUser, history, match, urlDomain}) {
  const [jobObj, setJobObj] = useState({
    buildAddress: "",
    description: ""
  });


  useEffect(() => {
    fetch(`${urlDomain}/jobs/${match.params.id}`, {
      credentials: 'include'
    })
    .then(data => data.json())
    .then(job => {
      if (job) {
        // console.log(job)
        setJobObj(job)
      }
    })
    .catch(error => {
      // console.log(error)
      }
    )
  }, [])

  const descriptionInput = React.useRef();
  const addressInput = React.useRef();
  const fileInput = React.useRef();

  

  const handleClick = (event) => {
      event.preventDefault();
      handleUpload(fileInput.current.files);
  };

    //idea here is to upload the files to the backend, wait for response from backend, 
    // retrieve the locations from the backend after upload,
    // then upload the job object with the recently retrieved locations
    
  const handleUpload = () => {
    let form = new FormData()
    for (let i = 0; i < fileInput.current.files.length; i++) {
        form.append(fileInput.current.files[i].name, fileInput.current.files[i])
    }

    //if docs
    if (fileInput.current.files.length > 0){
      fetch(`${urlDomain}/jobs/upload`, {
        method: "POST",
        body: form,
        credentials: 'include'
      })
      .then(data => data.json())
      .then(data => {
          // console.log(data.locations)
          //comes back as an array
          const payload = {
            "description": descriptionInput.current.defaultValue,
            "buildAddress": addressInput.current.defaultValue,
            "designDocs": data.locations
          }

          // console.log(payload)
          
          return fetch(`${urlDomain}/jobs/${match.params.id}`, {
              body: JSON.stringify(payload),
              method: "PATCH",
              headers: {
                  'Content-Type': "application/json"
              },
              credentials: 'include'
          })
      })
      .then(data => data.json())
      .then(job => {
        // console.log(job)
        history.push("/") 
      })
      .catch((error) => {
          // console.log(error)
        }
      )
    }
    
    //if no docs
    else {
      const payload = {
        "description": descriptionInput.current.defaultValue,
        "buildAddress": addressInput.current.defaultValue,
        "designDocs": []
      }

      fetch(`${urlDomain}/jobs/${match.params.id}`, {
            body: JSON.stringify(payload),
            method: "PATCH",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: 'include'
      })
      .then(data => data.json())
      .then(job => {
        // console.log(job)
        history.push("/") 
      })
      .catch((error) => {
        // console.log(error)
      }
      )
    }
  }
  
if (loggedInUser) {

  return (
    <div className="loginDiv homePageContainer">
      <div className="loginDiv">
        <h1>Edit your Job!</h1>
        <Form handleSubmit={handleClick} 
          formFields={["Build Address:","Description:", "Design Documents:"]} 
          formTypes={["text", "textarea", "file"]} 
          multiple={[false, false, true]} 
          refers={[addressInput, descriptionInput, fileInput]}  
          defaultValue={[jobObj.buildAddress, jobObj.description, null]}
          title="Edit Job!" 
        />
      </div>
    </div>
  );
}
else {
  return (
  <Jumbotron
      fluid
      style={{
        "textAlign": "center",
        "marginBottom": "0",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
      }}
    >
      <h1>Contact Inspiration Homes!</h1>
      <p>
        Create an account to start a project, or contact us via the link below.
      </p>
      <p>
        <Button variant="primary" onClick={() => window.open('mailto:inspirationhomesqld@gmail.com?subject=Project%20Inquiry')}>Email Us</Button>
      </p>
    </Jumbotron>)
  }
}

export default withRouter(EditJobPage);
