import React, { Component } from "react";
import ShutBoxLogo from '../../Images/ShutBoxLogo';
import './Shut.css';

 
class Shut extends Component {
  render() {
    return (
      <div className="shut-description">
        <h2>Shut the Box</h2>
        <div >
            <ShutBoxLogo />
            <ol className="shut-insructions">
                <li>All players need to flip up all tiles on their section of the board.</li>
                <li>Goal is to be the first to flip down all tiles and/or have the lowest remaining score.</li>
                <li>Determine who will roll first. The first person rolls the 2 dice.</li>
                <li>The value of the dice are added together for a total.</li>
                <li>Player then flips down any combination of tiles. The exact total must be flipped down.</li>
                <li>If the exact total can not be played, then you are done taking turns for the rest of the game. </li>
                <li>Add up all remaining tiles that are still up for your score.</li>
                <li>Next person now goes. Game continues until only 1 person remains. This does not mean you are the winner. </li>
            </ol>
        </div>
      </div>
    );
  }
}
 
export default Shut;