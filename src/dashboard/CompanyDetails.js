import { useState } from "react";

const CompanyDetails = (props) => {
    const { stepsCompleted, isBDFilled, isADFilled, isPDFilled } = props;

    const [inputFields, setInputFields] = useState({
        company_number: "",
        tin: ""
    });
    
    const [errors, setErrors] = useState({});

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
                <h2 style={{marginBottom: 20}}>Corporate Details</h2>

                <div className="inputBox">
                    <label htmlFor="company_number">Contact Person Name<span className="error">*</span></label>
                    <input 
                        type="text" 
                        className="custom" 
                        placeholder="Enter Contact Person Name" 
                        name="company_number" 
                        onChange={handleChange}
                        value={inputFields.company_number}
                    />
                    {errors.name ? (
                      <p className="error">
                        {errors.name}
                      </p>
                    ) : null}
                </div>
                <div className="inputBox">
                    <label htmlFor="tin">Mobile Number </label>
                    <input 
                        type="text" 
                        className="custom"
                        maxLength={10} 
                        placeholder="Enter Mobile Number" 
                        name="tin" 
                        onChange={handleChange}
                        value={inputFields.tin}
                    />
                </div>
                <div className="inputBox">
                    <label htmlFor="tin">Contact Person Email  </label>
                    <input 
                        type="text" 
                        className="custom"
                        maxLength={10} 
                        placeholder="Enter Email" 
                        name="tin" 
                        onChange={handleChange}
                        value={inputFields.tin}
                    />
                </div>
                <div className="inputBox">
                    <label htmlFor="tin">Designation</label>
                    <input 
                        type="text" 
                        className="custom"
                        maxLength={10} 
                        placeholder="Enter Designation" 
                        name="tin" 
                        onChange={handleChange}
                        value={inputFields.tin}
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
export default CompanyDetails;