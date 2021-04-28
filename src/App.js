import './App.css';
import { NavBar } from './Components/NavBar';
import {Route, Switch} from 'react-router-dom'
import Portfolio from './Components/Portfolio'
import Home from './Components/Home'
import styled from 'styled-components'
import contactFrom from "./Components/contactFrom"

const BackgroundC = styled.div`

    background: linear-gradient(132deg, #FC415A, #591BC5, #212335);
    background-size: 400% 400%;
    animation: Gradient 5s ease infinite;
    position: relative;
    height: auto;
    width: 100%;
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




function App() {
  return (
    <BackgroundC className="App">
      <Switch>
      <Route exact path="/" component={Home}/>
      {/*<Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={contactFrom}/>*/}
      </Switch>
    </BackgroundC>
  );
}

export default App;
