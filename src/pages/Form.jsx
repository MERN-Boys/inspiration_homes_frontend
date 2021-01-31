import {useState} from "react"

export default function Form({handleSubmit, formFields, title}) {
    const generateFormFields = () => {
        let newFormData = {}
        formFields.forEach(field => {
            newFormData[field] = ""
        })
        return newFormData
    }
    const [formData, setFormData] = useState(generateFormFields)

    const handleChange = (e) => {
        console.log(e.target.name)
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
    <form onSubmit={(event) => handleSubmit(event, formData)}>
        {formFields.map((field, index) => (
            <div key={index}>
                <label htmlFor={field}>{field}</label>
                <input name={field} onChange={handleChange} value={formData[field]} />
            </div>
        ))}
        <button>{title}</button>
    </form>
    )
}