import React from 'react';
import PropTypes from 'prop-types';

export default class QuizChoice extends React.Component {
  render() {
    var id = "answer" + this.props.index;
    return <div key={this.props.index} htmlclass="radio">
        <label htmlFor={id}>
          <input id={id} name="answers" type="radio" value={this.props.index} />
          <span>{this.props.text}</span>
        </label>
      </div>;
  }
}

QuizChoice.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}
