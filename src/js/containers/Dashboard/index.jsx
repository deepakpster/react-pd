import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { dashboardActions } from '../../actions';

class Dashboard extends React.Component {
  render() {
    return (
      <div>Dashboard Page</div>
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
)(Dashboard));
