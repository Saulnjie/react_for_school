import { useFormik, validateYupSchema } from "formik";

const ContactUs = () => {
    const { values, handleSubmit, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            musicTaste: "",
            message: "I like this music because...",

        },
        validate: (values) => {
            const errors = {}
            if(!values.firstName){
                errors.firstName = 'Required'
            } else if(values.firstName.length < 2) {
                errors.firstName = "Please don't lie";
            }
            return errors;
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="firstName" name="firstName" value={values.firstName} placeholder="First Name" onChange={handleChange}/>
                <br />
                
                <input id="lastName" name="lastName" value={values.lastName} placeholder="Last Name" onChange={handleChange}/>
                <br />

                <input id="email" name="email" value={values.email} placeholder="Email" onChange={handleChange}/>
                <br />

                <select 
                id="musicTaste" 
                name="musicTaste" 
                value={values.musicTaste} 
                onChange={handleChange}>
                <option value="change" >Select your music taste</option>
                <option value="classical" >Classical</option>
                <option value="rap" >Rap</option>
                <option value="jazz" >Jazz</option>
                <option value="heavyMetal" >Heavy Metal</option>
               </select>
                <br />
               
               <textarea id="message" name="message" value={values.textarea} onChange={handleChange}/>
               <br />
               <button type="submit">Submit 📧</button>
               <button style={{ background: red }} type="reset" onClick={resetForm}>
                Reset ❌
               </button>
            </form>
        </div>
    );
};



export default ContactUs;