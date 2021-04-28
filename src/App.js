import React from 'react';
import Tweet from './Tweet';

function App() {

  return (
    <div className="app">
      <h1>Twitter</h1>
      <div className="wrapper">
        <Tweet name="Eenie" message="Hey, folks, I'm Eenie" />
        <Tweet name="Meenie" message="Hey, folks, I'm Meenie" />
        <Tweet name="Miney" message="Hey, folks, I'm Miney" />
        <Tweet name="Mo" message="Hey, folks, I'm Mo" />
      </div>
    </div>
  );
}

export default App;
