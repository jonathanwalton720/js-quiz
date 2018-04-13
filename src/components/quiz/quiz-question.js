import React from 'react';
import QuizChoice from './quiz-choice';
import PropTypes from 'prop-types';

export default class QuizQuestion extends React.Component {
  render() {
    var choices = this.props.choices;
    var choicesList = choices.map((choice, index) => 
      <QuizChoice key={index} text={choice} index={index} />
    );

    return <div> 
      <div>
        <p id="question" className="lead">{ this.props.text }</p>
      </div>
      <div id="answers" className="radio">{ choicesList }</div>
    </div>;
  }
}

QuizQuestion.propTypes = {
  choices: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired
}
