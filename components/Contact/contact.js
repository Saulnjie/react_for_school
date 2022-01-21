import { useState } from 'react'

export default function Contact() {
    const [firstName, setFirstName] = useState ("");
    const [email, setEmail] = useState ("");
    const [message, setMessage] = useState ("");

    const handleOnChangeEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        if (name === "firstName") {
          setFirstName(value);
        }
        if (name === "email") {
          setEmail(value);
        }
        if (name === "message") {
          setMessage(value);
        }
      };

    return (
        <div>
            <form
            onSubmit={(event) => {
                event.preventDefault();
                const formData = {
                    firstName: firstName,
                    email: email,
                    message: message
                };
                console.log('form submit event', formData);
            }}>

                <label htmlFor="firstName">
                    first name:
                    <input 
                    id="firstName" 
                    type="text" 
                    name="firstName" 
                    onChange={handleOnChangeEvent}
                    onBlur={(event) => {
                        console.warn("Element has been blurred", event);
                    }}
                    >    
                    </input>
                </label>

                <label htmlFor="email">
                    email:
                    <input 
                    id="email" 
                    type="text" 
                    name="email" 
                    onChange={handleOnChangeEvent}
                    onBlur={(event) => {
                        console.warn("Element has been blurred", event);
                    }}
                    >    
                    </input>               
                </label>

                <label htmlFor="message">
                    message:
                    <input 
                    id="message" 
                    type="text" 
                    name="message" 
                    onChange={handleOnChangeEvent}
                    onBlur={(event) => {
                        console.warn("Element has been blurred", event);
                    }}
                    >    
                    </input>
                </label>

                <input type="submit" value="Submit"></input>
            </form>
            <section>First Name: {firstName}</section>
            <section>Email: {email}</section>
            <section>Message: {message}</section>
        </div>
    );
}


