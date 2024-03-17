import React, { Component } from "react";
import BattleLogo from '../../Images/Battlelogo';
import './Battle.css';

 
class Battle extends Component {
  render() {
    return (
      <div className="battle-description">
        <h2>Battleship Outerspace</h2>
        <div>            
            <BattleLogo />
            <div >
              <ol className="howto">
                <li>Building the board is where the fun begins! Once you get all the levels built, evenly divide all the ships.</li>
                <li>Without the other player seeing, both players place ships where you want across the 3 levels.</li>
                <li>First player calls out a level, then a row or column where they think thier oponent might have a ship.</li>
                <li>If any part of a ship is in that row or column, then a red peice is placed on that ship in the corresponding hole.</li>
                <li>Player calling out the row or column can keep track of thier hits and misses by placing a while miss or red hit peice next to the row or column.</li>
                <li>Player also calls out hit. If no ship is in that row or column that was called, they shout miss.</li>
                <li>Next player now calls out a level and a row or column.</li>
                <li>If all holes of a ship are filled in, player must announce that a ship is sunk.</li>
                <li>Player does not have to specify which ship is sunk, just that one has been sunk.</li>
                <li>Game play conitinues untill first person sinks all of their oponents ships.</li>
              </ol>
            </div>
        </div>
      </div>
    );
  }
}
 
export default Battle;