import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
// import { connect, bindActionCreators } from 'react-redux';


class Counter extends Component {
  constructor(props) {
    super(props);
    this.setRandomColor = this.setRandomColor.bind(this);
  }
  render() {
    return (
      <div>
        <Value number={this.props.number} />
      </div>
    );
  }
}

// Counter.propTypes = {
//   handleSetColor: PropTypes.func.isRequired,
//   number: PropTypes.number.isRequired,
//   handleIncrement: PropTypes.func.isRequired,
//   handleDecrement: PropTypes.func.isRequired,
// };

const mapStateToProps = state => (
  {
    number: state.counter.number,
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleAddPost: () => { dispatch(actions.addpost()); },
    handleDeletePost:
    (title, category, content) => { dispatch(actions.deletepost(title, category, content)); },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
