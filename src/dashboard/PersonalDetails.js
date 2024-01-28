import { useState } from "react";

const PersonalDetails = (props) => {
    const { stepsCompleted, isBDFilled, isADFilled, isPDFilled } = props;

    const [inputFields, setInputFields] = useState({
        pan: "",
        vehicle: ""
    });
    
    const [errors, setErrors] = useState({});
    let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.pan.length === 0) {
          errors.pan = "PAN is required";
        }
        if(inputValues.pan.search(regex) === -1){
            errors.pan = "PAN is Not Valid";
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
            setInputFields({ ...inputFields, pan: "", vehicle: "" });
            stepsCompleted(true)
        }
        if(Object.keys(validateValues(inputFields)).length === -1){
            alert('Data saved successfully')
            setInputFields({ ...inputFields, pan: "", vehicle: "" });
            stepsCompleted(true)
        }
    }
    return (
        <>
            <form style={{width: 400, marginTop: 20}} onSubmit={handleSubmit}>
                <h2 style={{marginBottom: 20}}>Personal Details</h2>
                <div className="inputBox">
                    <label htmlFor="pan">PAN<span className="error">*</span></label>
                    <input 
                        type="text" 
                        className="custom" 
                        placeholder="Enter your PAN" 
                        name="pan" 
                        onChange={handleChange}
                        value={inputFields.pan}
                    />
                    {errors.pan ? (
                      <p className="error">
                        {errors.pan}
                      </p>
                    ) : null}
                </div>
                <div className="inputBox">
                    <label htmlFor="vehicle">Vehicle Number</label>
                    <input 
                        type="text" 
                        className="custom"
                        maxLength={10} 
                        placeholder="Enter your Vehicle Number" 
                        name="vehicle" 
                        onChange={handleChange}
                        value={inputFields.vehicle}
                    />
                </div>
                <div>
                    <button className="normal">Save</button>
                    <button className="normal" disabled={(isBDFilled && isADFilled && isPDFilled)?false:true} style={{marginLeft: 20}}>Submit</button>
                </div>
            </form>
        </>
    )
}
export default PersonalDetails;