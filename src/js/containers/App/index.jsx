import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { dashboardActions } from '../../actions';
import AppComp from '../../components/App';

class App extends React.Component {
  render() {
    return (
      <AppComp />
    );
  }
}

export default withRouter(connect(
  (state, props) => ({
    ...state,
    ...props
  }),
  ((dispatch) => ({
    dashboardActions: bindActionCreators(dashboardActions, dispatch)
  }))
)(App));
