import {useState, useEffect} from "react"

export default function Form({handleSubmit, formFields, formTypes, multiple, refers, title, defaultValue}) {

    // useEffect(() => {
    //     for (let index = 0; index < defaultValue.length;){
    //         defaultValue[index] = null
    //     }
    // }, [])

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
        console.log(e.target.name)
        setFormData({...formData, [e.target.name]: e.target.value})
        for (let index = 0; index < defaultValue.length;){
            defaultValue[index] = null
        }
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
                        value={formData[field] || defaultValue[index] || ""} 
                    />
                </div>
            </>
        ))}
        <button>{title}</button>
    </form>
    )
}