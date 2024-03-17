import React, { Component } from "react";
import PhaseLogo from '../../Images/PhaseLogo';
import PhaseRules from '../../Images/PhaseRule';
import './Phase10.css';

 
class Phase extends Component {
  render() {
    return (
    <div>
        <div className="phase-description">
            <h2>Battleship Outerspace</h2>  
        </div>
        <PhaseLogo />        
        <div className="phase-insructions">            
            <ol className="phase-list">
                <li>The goal of this game is to complete all the phases on the Phase Rules card.</li>
                <li>The goal of each hand is to complete the phase and play all remaining card in hand.</li>
                <li>First person to play all card in their hand wins the hand.</li>
                <li>After shuffling deck, dealer of choice gives everyone 7 cards face down.</li>
                <li>The rest of the deck is placed in the center of the table face down.</li>
                <li>One card from the top of the deck is placed face up next to the deck. This is the discharge pile.</li>
                <li>Player to the left of dealer goes first.</li>
                <li>One card from the top of deck or the top card of the discharge pile must be picked up to start the turn.</li>
                <li>Player then tries to complete the current phase that they are working on.</li>
                <li>Only when the phase is complete in hand can the cards be placed on the table.</li>
                <li>At the end of the turn, a card must be discharged to the discharge pile.</li>
                <li>After playing your current phase, remaining cards in your hand can be played on existing cards already played.</li>
                <li><p>Example: You have completed your 2 sets of 3 (meaning (3) 10's and (3) 4's). You have a 5 and a 2 left in your hand.
                    You can play that five or a 2 if someone else has already phased and they have 5's or 2's on the table,
                    you can place your card(s) on theirs. Remember, you must have a discard to end your turn. </p></li>
                <li>Color does not matter except noted on the Phase rule card for Phase 8.</li>
                <li>When someone plays all their cards, game is over. Any cards still in your hand are counted up for your total.</li>
                <li>Scoring: (1-9) are worth 5 points. (10-12) are 10 points. Skips are 15 points. Wilds are 25 points.</li>
                <li>First player to complete all 10 phases stops the game. Winner is the one with the lowest score!</li>        
            </ol>
            <PhaseRules />
        </div>        
    </div>
    );
  }
}
 
export default Phase;