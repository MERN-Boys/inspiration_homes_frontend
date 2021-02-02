import React from 'react'
import {useState, useEffect} from 'react'

function JobsPage() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        let isMounted = true; // note this flag denote mount status
        // fetch(`https://inspo-homes-api.herokuapp.com/jobs`)
        fetch(`http://localhost:5000/jobs`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (isMounted == true) setJobs(data)
        })
        return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
    }, [])

    const fileInput = React.useRef();

    const handleClick = (event) => {
        event.preventDefault();
        let newArr = fileInput.current.files;
        for (let i = 0; i < newArr.length; i++) {
        handleUpload(newArr[i]);
        }
    };
    
    const handleUpload = (file) => {
        //send files to backend
    };

    return (
        <>
            <form className='upload-steps' onSubmit={handleClick}>
            <label>
            Upload file:
            <input type='file' multiple ref={fileInput} />
            </label>
            <br />
            <button type='submit'>Upload</button>
            </form>

            <h1>Your Jobs</h1>

            {
                typeof jobs !== undefined 
                ? jobs.map(
                    (job, index) => (
                        <section key={job._id} >
                            {
                            <>
                                <p>Job Title: {job.jobTitle}</p>
                                <p>Job Client: {job.client}</p>
                                <p>Job Address: {job.buildAddress}</p>

                                <p>Design Docs:</p>
                                <ul>
                                {job.designDocs.map(
                                    doc => (
                                        <li>
                                            <p>{doc.link}</p>
                                            <p>{doc.description}</p>
                                        </li>
                                    )
                                )}
                                </ul>
                                
                                <p>Build Stages:</p>
                                <ul>
                                {job.stages.slice(0).reverse().map(
                                    stage => (
                                        stage.status === "Hidden"  
                                        ? 
                                        <></>
                                        :
                                        <li>
                                            <p>Stage: {stage.name}</p>
                                            <p>Status: {stage.status}</p>
                                            <p>Funds Owed: {stage.owed}</p>
                                            <p>Funds Paid: {stage.paid}</p>
                                            <p>Stage Images: {
                                                    stage.pictures.map(
                                                        picture => (
                                                            <li>
                                                                <p>{picture.link}</p>
                                                                <p>{picture.description}</p>
                                                            </li>
                                                        )
                                                    )
                                                }</p>
                                            <p>Stage Comments: {
                                                    stage.comments.map(
                                                        comment => (
                                                            <li>
                                                                <p>{comment.name}</p>
                                                                <p>{comment.comment}</p>
                                                            </li>
                                                        )
                                                    )
                                                }</p>
                                        </li>

                                    )
                                )}
                                </ul>
                                
                            </>
                            
                            // JSON.stringify(job)
                            
                            }
                        </section>
                        )
                    ) 
                : <p>{"Loading List"}</p>
            }


        </>
    )
}

export default JobsPage