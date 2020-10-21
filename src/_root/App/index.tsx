import React from "react";
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
        <div>
          <Header />
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default App;
