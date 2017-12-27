import React from 'react';

import './info-section.css';

export default function InfoSection(props) {
  return (
    <section id="what">
      <div class="info-container">
        <h2><center>How to play?</center></h2>
        <br></br>
        <p>Hot or Cold is a number guessing game.</p>
        <ol>
          <li>You get to guess a <strong>random secret number</strong> between 1 to 100.</li>
          <li>As you make your guesses, you will get feedback as to whether you are</li>
          <li>Hot (if you're close to guessing the number) or cold (if you're not close at all).</li>
        </ol>
        {/* <p>If you're using a screen reader, you can use the visually hidden "Hear state of game" link in the navigation region to get a reminder of all your past guesses and how close your current guess is to being correct.</p> */}
      </div>
    </section>
    
  );
}