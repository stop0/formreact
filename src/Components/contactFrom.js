import React from "react"
import styled from 'styled-components'


const NEcontainer = styled.div`
display: flex;
padding: 1rem;
justify-content:center;
align-items:center;
margin: 0 auto;

}

`


const H1 = styled.h1`
color:white;

`


const Card = styled.div`
margin-left:105% ;
margin-right:105% ;
width: 90%;

padding:1rem;
border-radius:1rem;
margin-top:1rem;
font-size:2rem;
margin-bottom:5rem;
background:#2f3646;
box-shadow: 0 0 30px rgba(0,0,0,0.18);

}
`


const Input = styled.input`
height: 2rem;
border:none;
border-color:#2f3646 0px;
border-radius: 0.5rem;
padding:0.3rem;
font-size:1rem;
margin-right:1rem;
width:12.4rem;
margin-left:1rem;
margin-right:1rem;

`

const Subject = styled.input`
height: 2rem;
border:none;
border-color:#2f3646 0px;
border-radius: 0.5rem;
padding:0.3rem;
font-size:1rem;
margin-right:2rem;
width:25rem;
margin-left:1rem;
margin-right:1rem;

`

const Textarea = styled.textarea`
height: 10rem;
border-radius: 0.5rem;
padding:0.3rem;
font-size:1rem;
resize: none;
width:25rem;
margin-left:1rem;
margin-right:1rem;


`
const Button = styled.button`
margin-left:1rem;
margin-right:1rem;

padding:1rem;
border-radius:1rem;
border: none;
background:none;
color:white;
border:white 1px solid;
transition:0.5s;
cursor:pointer;
font-size:2rem;
:hover{
    background:white;
    color:black;
}
`


export const ContactForm = () => {


    return(
        <NEcontainer>
        <Card>
            <H1>Contact</H1>
        <form 
        name="contact"
        method="post"
        action="/contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"

        >
            <NEcontainer>
                <Input 
                required
                type="text" 
                name="name"
                placeholder = "Name" 
                />  
            
                <Input 
                required
                type="email" 
                name="email"
                placeholder = "Email"  
                />
        </NEcontainer>
            
                <Subject 
                required
                type="text" 
                name="subject"
                placeholder = "Subject"  
                />

        <p>
            <Textarea 
            required
            name="message"
            placeholder = "Your Message"
            ></Textarea>
        </p>
        <p>
            <Button type="submit">SEND MESSAGE</Button>
        </p>
        </form>
        </Card>

        </NEcontainer>


    )

}

export default ContactForm