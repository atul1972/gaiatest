import { useState } from "react";

const BasicDetails = (props) => {
    const { stepsCompleted } = props

    const [inputFields, setInputFields] = useState({
        name: "",
        mobile: ""
    });
    const [errors, setErrors] = useState({});
    const [isBDCompleted, setIsBDCompleted] = useState(false);

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.name.length === 0) {
          errors.name = "Name is required";
        }
        return errors;
    };

    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        if(Object.keys(validateValues(inputFields)).length===0){
            alert('Data saved successfully')
            setInputFields({ ...inputFields, name: "", mobile: "" });
            stepsCompleted(true)
        }
    }
    return (
        <>
            <form style={{width: 400, marginTop: 20}} onSubmit={handleSubmit}>
                <h2 style={{marginBottom: 20}}>Basic Details</h2>
                <div className="inputBox">
                    <label htmlFor="name">Name<span className="error">*</span></label>
                    <input 
                        type="text" 
                        className="custom" 
                        placeholder="Enter your name" 
                        name="name" 
                        onChange={handleChange}
                        value={inputFields.name}
                    />
                    {errors.name ? (
                      <p className="error">
                        {errors.name}
                      </p>
                    ) : null}
                </div>
                <div className="inputBox">
                    <label htmlFor="mobile">Mobile</label>
                    <input 
                        type="text" 
                        className="custom"
                        maxLength={10} 
                        placeholder="Enter your mobile number" 
                        name="mobile" 
                        onChange={handleChange}
                        value={inputFields.mobile}
                    />
                </div>
                <div>
                    <button className="normal">Save</button>
                    <button className="normal" disabled style={{marginLeft: 20}}>Submit</button>
                </div>
            </form>
        </>
    )
}
export default BasicDetails;
