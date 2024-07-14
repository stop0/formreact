import React from 'react'
import { Link } from 'react-router-dom'
import {NavBar} from "./NavBar"
import styled from 'styled-components'
import {Route, Switch} from 'react-router-dom'
import {ContactForm} from "./contactFrom"
import Avatar from "../assets/Avatar-Maker.svg"
import {Cards} from "./Cards"

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
margin-top:1rem;
cursor:pointer;
font-size:3rem;
margin-bottom:5rem;
:hover{
    background:white;
    color:black;
}
`

const I = styled.i`
color:white;

`
const BackgroundG = styled.div`



`
export const Home = () => {
    return (
        <BackgroundG>

            <img src ={Avatar}/>
            <h1>Mohammed Dawod</h1>
            <h4>Software Developer</h4>
            <h5>Based in Philadelphia, PA</h5>
            <h5>dawodmohmmed@gmail.com</h5>
             {/*<Link to='/Portfolio'>
                <Button>View Projects</Button>

    </Link>*/}
            
    <section>
        <a href="https://github.com/stop0">
        <i style={{color:'white', margin:"1rem", fontSize:'48px',marginRight:'5rem'}} class="fa fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/mohammed-dawod-ba33a5123/">

        <i style={{color:'white', margin:"1rem", fontSize:'48px',marginLeft:'5rem'}} class="fa fa-linkedin"></i>
        </a>
    </section>

    <Cards/>
    <ContactForm/>

        </BackgroundG>
    )
}

export default Home