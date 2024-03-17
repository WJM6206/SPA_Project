import React from 'react';
import battleLogo from './battleship.jpg';
import './Images.css';


export default function BattleLogo() {
    
        return(
            <div className="battle-logo">
                <img alt="Battleship Outer Space" src={battleLogo} />                
            </div>
        )
      }