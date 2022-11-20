import React from 'react';
import './nav.css';
import logo from '../img/logoReddit.png'
import burger from '../img/burger.png'

//Assuming logo.png is in the same folder as JS file import logo from './logo.png';//...later<img src={logo} alt="logo" />


class Nav extends React.Component { 

render ()  {
  return (
       <div>
          <nav class="flex"> 
            <div>
                <a href="index.html" >
                    <img src= {logo} id="logo" alt="logoA" />            
                </a>
            </div>
          
            <input type="text"  id='search'/>

            <div class='flex' id='nav_child1'>
              <button class="btn">  S'inscrire</button>
              <button class="btn">  Se connecter</button>  

              <a href="index.html" >
                    <img src= {burger} id="logoburger" alt="logoB" />            
              </a>
          </div>         
        </nav>
      </div>
  )

}











}


export default Nav ;