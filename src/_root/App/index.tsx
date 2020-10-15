import React from "react";
import alien from "assets/alien.png";

class App extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <span>Hello Human of the Earth!</span>
        <br />
        <img src={alien} alt={"Alien"} />
      </div>
    );
  }
}

export default App;
