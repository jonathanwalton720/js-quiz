import React from 'react';
import Choice from './choice';

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
