import React from 'react'
import styled from 'styled-components'
import UseMyTechStuff from '../images/UseMyTechStuff.jpg'
import {NavBar} from "./NavBar"


const Card = styled.div`
font-family: 'Montserrat', sans-serif;
background:#2f3646;
width:20%;
margin:5rem;
padding:1rem;
border-radius:1rem;
transition:0.5s;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;


:hover{
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
`

const Image = styled.img`
width:100%;
height:70%;

`

const Techs = styled.div`
background:none;
border-radius:1rem;
width:4rem;
font-size:0.8rem;
padding:1rem;
margin:0.5rem;
background:none;
border:white 1px solid;
`
const TechContainer = styled.div`
display:flex;
justify-content:center;
flex-wrap: wrap;


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
margin-top:1rem;
cursor:pointer;
:hover{
    background:white;
    color:black;
}
`
const H6 = styled.h6`
font-size:1rem;
font-family: "Montserrat", sans-serif;
letter-spacing:3px;
`

const BackgroundC = styled.div`

    background: linear-gradient(132deg, #FC415A, #591BC5, #212335);
    background-size: 400% 400%;
    animation: Gradient 15s ease infinite;
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    padding:0;
    margin:0px;
    @keyframes Gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }



`




export const Portfolio = () => {
    return (
        <div>
            <NavBar/>
            <Card>
                <Image src={UseMyTechStuff} />
                <h3>Use My Tech Suff</h3>
                <TechContainer>
                <Techs>HTML</Techs>
                <Techs>CSS</Techs>
                <Techs>Javascript</Techs>
                <Techs>React</Techs>
                <Techs>Node</Techs>
                <H6>Description:  React Based Platform  in which individuals can create an account and rent their tech equipment for a price. </H6>
                <H6>Contributors: Nam Woo, Juan Ruiz,  
Nate Grandelis, Monica Zwissler, Mohammed Dawod</H6>
                </TechContainer>
                <a href="https://tt27-rent-my-tech.vercel.app/">
                <Button><i class="fa fa-desktop"></i> Demo</Button>
                </a>
                <a href="https://github.com/Build-Week-TT27-Use-My-Tech-Stuff">
                <Button><i class="fa fa-code"></i> Code</Button>
                </a>                                
            </Card>

        </div>
    )
}


export default Portfolio