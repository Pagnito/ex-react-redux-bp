import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {getUser} from '../../actions/actions';


class Home extends Component {
  componentDidMount(){
    this.props.getUser();
  }
  hello = () =>{
    return (
      <p>Hello</p>
    )
  }
  render() {
    return (
      <div>{this.hello()}</div>
    );
  }
}
Home.propTypes = {
  auth: PropTypes.object,
  getUser: PropTypes.func
}
function mapStateToProps(state){
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, {getUser})(Home);
