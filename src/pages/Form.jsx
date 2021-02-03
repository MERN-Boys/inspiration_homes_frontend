import {useState} from "react"

export default function Form({handleSubmit, formFields, formTypes, multiple, refers, title}) {
    console.log(refers)
    const generateFormFields = () => {
        let newFormData = {}
        formFields.forEach(field => {
            newFormData[field] = ""
        })
        return newFormData
    }
    const [formData, setFormData] = useState(generateFormFields)
    let CustomInput = "";


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
    <form onSubmit={(event) => handleSubmit(event, formData)}>
        {formFields.map((field, index) => (
            <>
                <div hidden>{CustomInput = formTypes[index] == "textarea" ? "textarea" : "input"}</div>
                <div key={index}>
                    <label htmlFor={field}>{field}</label>
                    
                    <CustomInput 
                        name={field} 
                        type={formTypes[index]} 
                        multiple={multiple[index]} 
                        ref={refers[index]}  
                        onChange={handleChange} 
                        value={formData[field]}
                    />
                </div>
            </>
        ))}
        <button>{title}</button>
    </form>
    )
}