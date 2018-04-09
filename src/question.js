import React from 'react';
import Choice from './choice';
import PropTypes from 'prop-types';

export default class Question extends React.Component {
  render() {
    var choices = this.props.choices;
    var choicesList = choices.map((choice, index) => 
      <Choice key={ index } text={choice} index={index} />
    );

    return <div> 
      <div>
        <p id="question" className="lead">{ this.props.text }</p>
      </div>
      <div id="answers" className="radio">{ choicesList }</div>
    </div>;
  }
}

Question.propTypes = {
  choices: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired
}
