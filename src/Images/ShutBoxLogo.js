import React from 'react';
import shutlogo from './shutthebox.jpg';
import './Images.css';


export default function ShutLogo() {
    
        return(
            <div className="shutbox-logo">
                <img alt="Shut the Box" src={shutlogo} />                
            </div>
        )
      }