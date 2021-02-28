import React from 'react';
import logo from './pet-house.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
          <div className="w3-theme-orange container">
            <div className="w3-theme-d1 container" id="summary">
              <p>Summary:<br />
            Inspired by early 2010s personality quizzes,
            Pet Matchmaker is a web app that matches you to the best
            possible pet. The quiz is simple and takes many factors into account such as:
            home environment, attentional availability, emotional needs, budget, allergies, and more!
            Click the start button below to find <i>your</i> perfect pet!
          </p>
            </div>
              <button className="button">START</button>
          </div>
        </div>
      );
}

export default App;
