import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function JobsPage(props) {
  const loggedInUser = props.loggedInUser;
  const setLoggedInUser = props.setLoggedInUser;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users/me", {
      credentials: "include",
    })
      .then((data) => data.json())
      .then((user) => {
        if (user) {
          setLoggedInUser(user.user);
        }
      });
  }, []);

  useEffect(() => {
    // let isMounted = true; // note this flag denote mount status
    // fetch(`https://inspo-homes-api.herokuapp.com/jobs`)
    fetch(`http://localhost:5000/jobs/get`, {
      body: JSON.stringify({ user: loggedInUser }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
    // return () => {
    //   isMounted = false;
    // }; // use effect cleanup to set flag false, if unmounted
  }, [loggedInUser]);

  const commentInput = React.useRef();
  const checkBoxInput = React.useRef();
  const owedInput = React.useRef();

  const handleComplete = (event, form) => {
    event.preventDefault()
    const stageCost = parseInt(form["Stage Cost"], 10);

    if (form["Work Complete"] !== true 
      || typeof stageCost !== "number"
      || stageCost <= 0){
      alert("Must ensure work is complete and stage cost is more than $0")
      return
    }

    const payload = {
        "status"  : "PaymentPending",
        "owed" : stageCost
    }

    fetch(`http://localhost:5000/jobs/${form.jobId}/${form.stageId}`, {
           method: "PATCH",
           body: JSON.stringify(payload),
           credentials: 'include',
           headers: {
            'Content-Type': "application/json"
          }
    })
  };

  const handleClick = (event, form) => {
    event.preventDefault();
    const payload = {
      "comments": [{
        "name"  : loggedInUser.name,
        "comment" : form.Comment
      }]
    }
    fetch(`http://localhost:5000/jobs/${form.jobId}/${form.stageId}`, {
           method: "PATCH",
           body: JSON.stringify(payload),
           credentials: 'include',
           headers: {
            'Content-Type': "application/json"
          }
    })
  };

  const handleApprove = (event, jobId) => {
    event.preventDefault();
    console.log("approved")
    console.log(jobId)
    const payload = {
      "status": "Complete"
    }
    console.log(payload)
    fetch(`http://localhost:5000/jobs/${jobId}/0`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      credentials: 'include',
      headers: {
        'Content-Type': "application/json"
      }
    })

  }

  const handlePayment = (event, jobId, stageId) => {
    event.preventDefault();
    console.log("payment")
    console.log(jobId)
    const payload = {
      "owed": 0
    }
    console.log(payload)
    fetch(`http://localhost:5000/jobs/${jobId}/${stageId}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      credentials: 'include',
      headers: {
        'Content-Type': "application/json"
      }
    })

  }

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

  const handleUpload = (files) => {
        // console.log(tickboxRef.current.defaultValue)
        // console.log(owedRef.current.defaultValue)
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
  };

  return (
    <div className="page-body">
      <h1>Your Jobs</h1>
      {jobs.length === 0 ? (
        <div id="emptyJobsMsg">
          <h1>Go to the contact page to start a job today!</h1>
        </div>
      ) : (
        <></>
      )}

      {typeof jobs !== undefined ? (
        jobs.map((job, index) => (
          <Accordion defaultActiveKey="0">
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
                              {loggedInUser.role === "Builder" && stage.status === "InProgress" ? (
                                <Form 
                                  jobId={job._id}
                                  stageId={stage.index}
                                  handleSubmit={handleComplete}
                                  formFields={["Work Complete", "Stage Cost"]}
                                  formTypes={["checkbox", "number"]}
                                  multiple={[false, false]}
                                  // required={[true, true]}
                                  refers={[checkBoxInput, owedInput]}
                                  defaultValue={[false, 0]}
                                  title="Set Stage Cost"
                                />
                              ) : (
                                <></>
                              )}
                              {loggedInUser.role === "Client" && stage.status === "PaymentPending" ? (
                                 <Button className="nav-link" onClick={(e => handlePayment(e, job._id, stage.index))}>Pay Stage Cost</Button>
                              ) : (
                                <></>
                              )}
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
                                <Form
                                  jobId={job._id}
                                  stageId={stage.index}
                                  handleSubmit={handleClick}
                                  formFields={["Comment"]}
                                  formTypes={["textarea"]}
                                  multiple={[false]}
                                  refers={[commentInput]}
                                  defaultValue={[null]}
                                  title="Comment!"
                                />
                              </p>
                            </li>
                          )
                        )}
                    </ul>
                    {loggedInUser.role == "Builder" ? (
                      <>
                        <Button className="nav-link">
                          <Link to={`/jobs/${job._id}`} style={{"color": "white"}} >
                            Edit Job
                          </Link>
                        </Button>
                        <Button className="nav-link" onClick={(e => handleApprove(e, job._id))}>Approve</Button>
                      </>
                    ) : (
                      <></>
                    )}
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
