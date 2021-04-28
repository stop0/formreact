import React from 'react';
import styled from 'styled-components'
import UseMyTechStuff from '../images/UseMyTechStuff.jpg'
import Crypto from "../assets/60ab146b15d38f9a1e423f77f4f6eade.png"
import AfricanMarketplace from "../assets/afri.jpg"
import WaterMyPlants from "../assets/plants.jpg"
import ShoppingCart from "../assets/shopping.png"

const Cardss = styled.div`

display:flex;
padding:4rem;
flex-wrap:wrap;
justify-content:center;
align-content:center;
`


const Card = styled.div`
background-color: #1c1b29;
border-radius: 20px;
box-shadow: 0 0 30px rgba(0,0,0,0.18);
width:50rem;
margin:1.5rem;
transition:0.5s;

:hover{
    transform: scale(1.1);
}



`

const Container = styled.div`

position: relative;
clip-path: polygon(0 0,100% 0, 100% 85%, 0 100%);


`

const Image = styled.img`
width:100%;
border-radius: 20px 20px 0 0;
clip-path: polygon(0 0,100% 0, 100% 85%, 0 100%);

`
const Details = styled.div`
padding:1rem;
width:80%;
font-size:1rem;
`
const FlexT = styled.div`
display:flex;


`
const Button = styled.button`
margin-left:1rem;
margin-right:1rem;

padding:1rem;
border-radius:1rem;
border: none;
background:none;
color:white;
border:white 0.1rem solid;
transition:0.5s;
margin-top:1rem;
cursor:pointer;
margin-bottom:1rem;
:hover{
    background:white;
    color:black;
}
`


export const Cards = () => {
    return (
        <Cardss>
            <Card>
                <FlexT>
                    <Container>
                        <Image src ={UseMyTechStuff} />
                    </Container>
                    <Details>
                    <h1>Use My Tech Stuff</h1>
                    <p>A web app that users can create an account, log in, and either place their tech equipment for lease or another user can lease tech equipment that's available.
</p>
                    </Details>
    
                </FlexT>
                <a href="https://tt27-rent-my-tech.vercel.app/">
                <Button><i class="fa fa-desktop"></i> Website</Button>
                </a>
                <a href="https://github.com/Build-Week-TT27-Use-My-Tech-Stuff">
                <Button><i class="fa fa-code"></i> Code</Button>
                </a> 
            </Card>
            <Card>
                <FlexT>
                <Container>
                    <Image src ={AfricanMarketplace} />
                </Container>

            <Details>
            <h1>African Marketplace</h1>

            <p>A web app that users can create an account, log in, and either place their produce for sale or buy produce with any type of quantities that they so should choose.
</p>
            </Details>
            </FlexT>
            <a href="https://front-end-odsqgnge3-ttwebft27.vercel.app//">
                <Button><i class="fa fa-desktop"></i> Website</Button>
                </a>
                <a href="https://github.com/African-Marketplace-TT27">
                <Button><i class="fa fa-code"></i> Code</Button>
                </a> 
            </Card>
            <Card>
                <FlexT>
                <Container>
            <Image src ={WaterMyPlants} />
            </Container>

            <Details>
            <h1>Water My Plants</h1>

            <p>A web app that users can create an account, log in, and can add a specific set of plants and modify their properties as to be reminded at what time of week the plant in question should be watered .
</p>
            </Details>
            </FlexT>
            <a href="https://watermyplants-tt27-tt27.vercel.app//">
                <Button><i class="fa fa-desktop"></i> Website</Button>
                </a>
                <a href="https://github.com/water-my-plants-tt27">
                <Button><i class="fa fa-code"></i> Code</Button>
                </a> 
            </Card>
            <Card>
                <FlexT>
                <Container>
            <Image src ={Crypto} />
            </Container>

            <Details>
            <h1>Crypto Tracker</h1>

            <p>A Crypto tracker demo that has dark mode which can be enabled or disabled weather you leave the website or refresh it</p>
            </Details>
            </FlexT>
            <a href="https://laughing-bardeen-7e14b4.netlify.app//">
                <Button><i class="fa fa-desktop"></i> Demo</Button>
                </a>
                <a href="https://github.com/stop0/dark-mode">
                <Button><i class="fa fa-code"></i> Code</Button>
                </a> 
            </Card>
            <Card>
                <FlexT>
                <Container>
            <Image src ={ShoppingCart} />
            </Container>

            <Details>
            <h1>Shopping Cart</h1>

            <p>A working shopping cart demo that can be implanted into a Ecommerce store.</p>
            </Details>
            </FlexT>
            <a href="https://stupefied-shirley-b8bcd8.netlify.app/">
                <Button><i class="fa fa-desktop"></i> Demo</Button>
                </a>
                <a href="https://github.com/stop0/react-shopping-cart">
                <Button><i class="fa fa-code"></i> Code</Button>
                </a> 
            </Card>

        </Cardss>
    )
}


export default Cards