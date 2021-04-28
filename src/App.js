import React from 'react';
import Tweet from './Tweet';

function App() {

  // const sayHello = () => {
  //   console.log('hello!')
  // };

  return (
    <div className="app">
      <h1>Twitter</h1>
      <div className="wrapper">
        <Tweet name="Eenie" message="Hey, folks, I'm Eenie" />
        <Tweet name="Meenie" message="Hey, folks, I'm Meenie" />
        <Tweet name="Miney" message="Hey, folks, I'm Miney" />
        <Tweet name="Mo" message="Hey, folks, I'm Mo" />
      </div>
      {/* <button onClick={sayHello}>Hello</button> */}
    </div>
  );
}

export default App;
