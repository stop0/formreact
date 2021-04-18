import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Ul = styled.ul`
display: flex;
justify-content:space-around;
font-family: 'Montserrat', sans-serif;
`


const Li = styled.li`
list-style: none;
margin-top: 1rem;
border:white 1px solid;
padding:1rem;
border-radius:1rem;
transition:0.5s;
:hover{
background:white;
color:black;


}

`



export const NavBar = () => {
    return (
        <nav>
            <Ul>
                <Link style={{textDecoration: 'none' ,color:'white'}} to='/'>
                <Li>Home</Li>
                </Link>
                <Link style={{textDecoration: 'none' ,color:'white'}} to='/Portfolio'>
                <Li>Portfolio</Li>
                </Link>
            </Ul>
        </nav>
    )
}
