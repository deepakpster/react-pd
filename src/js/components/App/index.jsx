import React, { Component } from 'react';
import styles from './styles.scss';

class App extends Component {
  render() {
    return (
      <div className={`container ${styles.app}`}>
        Hello, React PDster!
      </div>
    );
  }
}

export default App;
