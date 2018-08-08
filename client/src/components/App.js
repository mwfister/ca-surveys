import React, { Component } from 'react';

class App extends Component {
  render() {
    fetch('/api/surveys')
      .then((response) => response.json())
      .then((jsond) => console.log(jsond))
      .catch((e) => console.error("error", e))

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
