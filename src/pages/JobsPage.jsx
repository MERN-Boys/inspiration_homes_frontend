import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom"


function JobsPage(props) {
  const loggedInUser = props.loggedInUser;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status
    // fetch(`https://inspo-homes-api.herokuapp.com/jobs`)
    fetch(`http://localhost:5000/jobs`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (isMounted == true) setJobs(data);
      });
    return () => {
      isMounted = false;
    }; // use effect cleanup to set flag false, if unmounted
  }, []);

  // const jobInput = React.useRef();
  // const addressInput = React.useRef();
  // const fileInput = React.useRef();

  // const handleClick = (event) => {
  //     event.preventDefault();
  //     handleUpload(fileInput.current.files);
  // };

  //idea here is to upload the files to the backend, wait for response from backend,
  // retrieve the locations from the backend after upload,
  // then upload the job object with the recently retrieved locations

  // const handleUpload = (files) => {
  //     let form = new FormData()
  //     for (let i = 0; i < fileInput.current.files.length; i++) {
  //         form.append(fileInput.current.files[i].name, fileInput.current.files[i])
  //     }
  //     (loggedInUser)
  //     fetch("http://localhost:5000/jobs/upload", {
  //         method: "POST",
  //         body: form,
  //         credentials: 'include'
  //     })
  //     .then(data => data.json())
  //     .then(data => {
  //         (data.locations)
  //         //comes back as an array
  //         const payload = {
  //             "client": loggedInUser._id,
  //             "jobTitle": jobInput.current.defaultValue,
  //             "buildAddress": addressInput.current.defaultValue,
  //             "designDocs": data.locations
  //         }

  //         (payload)

  //         return fetch("http://localhost:5000/jobs/", {
  //             body: JSON.stringify(payload),
  //             method: "POST",
  //             headers: {
  //                 'Content-Type': "application/json"
  //             },
  //             credentials: 'include'
  //         })
  //     })
  //     .then(data => data.json())
  //     .then(job => {
  //         (job)
  //     })
  //     .catch((error) => (error))
  // };


  return (
    <div className="page-body">
      {/* <Form handleSubmit={handleClick} 
                formFields={["jobTitle", "buildAddress", "designDocs"]} 
                formTypes={["text", "text", "file"]} 
                multiple={[false, false, true]} 
                refers={[jobInput, addressInput, fileInput]}  
                title="Create Job!" 
            />  */}

      <h1>Your Jobs</h1>

      {typeof jobs !== undefined ? (
          jobs.map((job, index) => (
            <Accordion defaultActiveKey="0" >
            <Card key={job.id}>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                {job.buildAddress}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
                <Card.Body>
                <>
                    <p>Job Description: {job.description}</p>
                    <p>Job Client: {job.client}</p>
                    <p>Job Address: {job.buildAddress}</p>

                    <p>Design Docs:</p>
                    <ul>
                    {job.designDocs.map((doc) => (
                        <li>
                        <img src={doc.link}></img>
                        </li>
                    ))}
                    </ul>

                    <Button >
                        <Link to={`/jobs/${job._id}`} className="nav-link" >Edit Job</Link>
                    </Button>
                    <p>Build Stages:</p>
                    <ul>
                    {job.stages
                        .slice(0)
                        .reverse()
                        .map((stage) =>
                        stage.status === "Hidden" ? (
                            <></>
                        ) : (
                            <li>
                            <p>Stage: {stage.name}</p>
                            <p>Status: {stage.status}</p>
                            <p>Funds Owed: {stage.owed}</p>
                            <p>Funds Paid: {stage.paid}</p>
                            <p>
                                Stage Images:{" "}
                                {stage.pictures.map((picture) => (
                                <li>
                                    <p>{picture.link}</p>
                                    <p>{picture.description}</p>
                                </li>
                                ))}
                            </p>
                            <p>
                                Stage Comments:{" "}
                                {stage.comments.map((comment) => (
                                <li>
                                    <p>{comment.name}</p>
                                    <p>{comment.comment}</p>
                                </li>
                                ))}
                            </p>
                            </li>
                        )
                        )}
                    </ul>
                    {loggedInUser.role == "Builder" ? (
                      <Button> 
                        <Link to="" className="nav-link">Edit Job</Link>
                      </Button>
                    ) : (<></>)}
                </>
                </Card.Body>
            </Accordion.Collapse>
            </Card>
            </Accordion>
        ))
      ) : (
        <p>{"Loading List"}</p>
      )}
    </div>
  );
}

export default JobsPage;
