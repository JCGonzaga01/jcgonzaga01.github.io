import React from "react";
import alien from "assets/alien.png";
import Header from "../Header";
import styles from "./App.scss";

class App extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />
          <div className={styles.children}>
            <span>Hello Human of the Earth!</span>
            <br />
            <img src={alien} alt={"Alien"} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
