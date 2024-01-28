import { useState } from "react";

const AddressDetails = (props) => {
    const { stepsCompleted } = props;
    
    const [inputFields, setInputFields] = useState({
        address: "",
        pincode: ""
    });
    const [errors, setErrors] = useState({});

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.address.length === 0) {
          errors.address = "Address is required";
        }
        if (inputValues.pincode.length === 0) {
            errors.pincode = "Pin Code is required";
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
            setInputFields({ ...inputFields, address: "", pincode: "" });
            stepsCompleted(true)
        }
    }
    return (
        <>
            <form style={{width: 400, marginTop: 20}} onSubmit={handleSubmit}>
                <h2 style={{marginBottom: 20}}>Address Details</h2>
                <div className="inputBox">
                    <label htmlFor="address">Address<span className="error">*</span></label>
                    <input 
                        type="text" 
                        className="custom" 
                        placeholder="Enter your address" 
                        name="address" 
                        onChange={handleChange}
                        value={inputFields.address}
                    />
                    {errors.address ? (
                      <p className="error">
                        {errors.address}
                      </p>
                    ) : null}
                </div><div className="inputBox">
                    <label htmlFor="address">Address Line2<span className="error">*</span></label>
                    <input 
                        type="text" 
                        className="custom" 
                        placeholder="Enter your address" 
                        name="address2" 
                        onChange={handleChange}
                        value={inputFields.address2}
                    />
                    {errors.address2 ? (
                      <p className="error">
                        {errors.address2}
                      </p>
                    ) : null}
                </div>
                <div className="inputBox">
                    <label htmlFor="disctrict">Disctrict<span className="error">*</span></label>
                    <input 
                        type="text" 
                        className="custom" 
                        placeholder="Enter your disctrict" 
                        name="disctrict" 
                        onChange={handleChange}
                        value={inputFields.disctrict}
                    />
                    {errors.disctrict ? (
                      <p className="error">
                        {errors.disctrict}
                      </p>
                    ) : null}
                </div>
                <div className="inputBox">
                    <label htmlFor="city">City<span className="error">*</span></label>
                    <input 
                        type="text" 
                        className="custom" 
                        placeholder="Enter your City" 
                        name="city" 
                        onChange={handleChange}
                        value={inputFields.city}
                    />
                    {errors.city ? (
                      <p className="error">
                        {errors.city}
                      </p>
                    ) : null}
                </div>
                <div className="inputBox">
                    <label htmlFor="state">Disctrict<span className="error">*</span></label>
                    <input 
                        type="text" 
                        className="custom" 
                        placeholder="Enter your State" 
                        name="state" 
                        onChange={handleChange}
                        value={inputFields.state}
                    />
                    {errors.state ? (
                      <p className="error">
                        {errors.state}
                      </p>
                    ) : null}
                </div>
                <div className="inputBox">
                    <label htmlFor="pincode">Pincode</label>
                    <input 
                        type="text" 
                        className="custom"
                        maxLength={10} 
                        placeholder="Enter your pincode number" 
                        name="pincode" 
                        onChange={handleChange}
                        value={inputFields.pincode}
                    />
                    {errors.pincode ? (
                      <p className="error">
                        {errors.pincode}
                      </p>
                    ) : null}
                </div>
                <div>
                    <button className="normal">Save</button>
                    <button className="normal" disabled style={{marginLeft: 20}}>Submit</button>
                </div>
            </form>
        </>
    )
}
export default AddressDetails;