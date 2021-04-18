import React from "react"
import styled from 'styled-components'


const FormBackground = styled.div`
background:red;
width:30%;
display:flex;
flex-direction:column;
`

export const ContactForm = () => {


return(
    <FormBackground>
        <h1>Contact</h1>
    <form 
    name="contact"
    action = "/contact"
    method="POST" 
    >
        <input type = "hidden " name="form-name"
        value="contact"/>
    <p>
            <input 
            required
            type="text" 
            name="name"
            placeholder = "Name" 
            />  
    </p>
    <p>
        
            <input 
            required
            type="email" 
            name="email"
            placeholder = "Email"  
            />
    </p>
    <p>
         
            <input 
            required
            type="text" 
            name="subject"
            placeholder = "Subject"  
            />
    </p>

    <p>
        <textarea 
        required
        name="message"
        placeholder = "Your Message"
        ></textarea>
    </p>
    <p>
        <button type="submit">SEND MESSAGE</button>
    </p>
    </form>
    </FormBackground>




)

}

export default ContactForm