import React from 'react';
import Question from './quiz-question';
import service from '../../service';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    var allQuestions = service.GetQuizQuestions();

    this.state = {
      selectedAnswers: {},
      currentQuestion: 0,
      maxQuestion: allQuestions.length - 1,
      selectedAnswer: null,
      allQuestions: allQuestions
    }

    this._onNextClick = this._onNextClick.bind(this);
    this._onPreviousClick = this._onPreviousClick.bind(this);
    this._onScoreQuizClick = this._onScoreQuizClick.bind(this);
  }

  _onNextClick() {
    this.updateSelectedAnswers(this.state.currentQuestion, this.state.selectedAnswer);
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    this.goToQuestion(this.state.currentQuestion);
  }

  _onPreviousClick() {
    this.updateSelectedAnswers(this.state.currentQuestion, this.state.selectedAnswer);
    this.setState({ currentQuestion: this.state.currentQuestion - 1 });
    this.goToQuestion(this.state.currentQuestion);
  }

  _onScoreQuizClick() {
    var scoreReport = document.getElementById('scoreReport');
    this.updateSelectedAnswers(this.state.currentQuestion, this.state.selectedAnswer);
    scoreReport.innerHTML = "";

    var numCorrect = this.getCorrectAnswers(this.state.selectedAnswers);
    var scoreHeader = document.createElement("p");
    var scoreBody = document.createElement("p");

    scoreHeader.className = "lead";
    scoreHeader.innerHTML = "Score Report";
    scoreBody.innerHTML = "You have answered " + numCorrect + " out of " + this.state.maxQuestion + " correct!";
    scoreReport.appendChild(scoreHeader);
    scoreReport.appendChild(scoreBody);
  }

  updateSelectedAnswers(index, value) {
    var selectedAnswers = this.state.selectedAnswers;
    selectedAnswers[index] = value;
    this.setState({selectedAnsers: selectedAnswers});
  }

  setSelectedAnswer(value) {
    this.setState({selectedAnswer: value});
  }

  getCorrectAnswers() {
    var numCorrect = 0;
    if (service.GetQuizQuestions()[this.state.currentQuestion].correctAnswer == this.state.selectedAnswer) {
      numCorrect += 1;
    }
    return numCorrect;
  }

  goToQuestion(questionNumber) {
    if (this.state.selectedAnswers[questionNumber]) {
      this.selectedValue = this.state.selectedAnswers[questionNumber];
    }
  }

  render() {
    var isLastQuestion = this.state.currentQuestion == this.state.maxQuestion;
    var scoreQuizDisabled = !isLastQuestion;
    var previousDisabled = this.state.currentQuestion == 0;
    var nextDisabled = isLastQuestion;
    var quizQuestion = this.state.allQuestions[this.state.currentQuestion];

    return <div>
        <Question text={quizQuestion.question} choices={quizQuestion.choices} />
        <div>
          <button onClick={this._onPreviousClick} className="btn" type="button" disabled={previousDisabled}>Previous</button>
          <button onClick={this._onNextClick} className="btn" type="button" disabled={nextDisabled}>Next</button>
          <button onClick={this._onScoreQuizClick} className="btn" type="button" disabled={scoreQuizDisabled}>Score Quiz</button>
        </div>
      </div>;
  }
}
