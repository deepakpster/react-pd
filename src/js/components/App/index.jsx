import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

class App extends Component {
  render() {
    return (
      <div className={`container ${styles.app}`}>
        <span>React-PD Application</span>
        <Link className="btn btn-link" to="/dashboard">Dashboard</Link>
      </div>
    );
  }
}

export default App;
