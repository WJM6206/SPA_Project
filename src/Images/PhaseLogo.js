import React from 'react';
import phaselogo from './Phase10-logo.png';
import './Images.css';


export default function PhaseLogo() {
    
        return(
            <div className="phase-logo">
                <img alt="Phase10 Logo" src={phaselogo} />                
            </div>
        )
      }