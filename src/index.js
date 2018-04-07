import allQuestions from './index.service';

var currentQuestion = 0; // 0 based index
var question = document.getElementById('question');
var answers = document.getElementById('answers');
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var maxQuestion = allQuestions.length - 1;
var selectedAnswers = {};
var scoreQuiz = document.getElementById('scoreQuiz');

function goToQuestion(questionNumber) {
  var isLastQuestion = currentQuestion == maxQuestion;
  if (!answers) {
    return;
  }

  answers.innerHTML = "";
  previous.disabled = currentQuestion == 0;
  next.disabled = isLastQuestion;
  if (isLastQuestion) {
    scoreQuiz.disabled = false;
  }

  question.innerHTML = allQuestions[questionNumber].question;

  var choices = allQuestions[questionNumber].choices;
  for (var i = 0; i < choices.length; i++) {
    answers.appendChild(createAnswerDiv(i, choices));
  }

  if (selectedAnswers[questionNumber]) {
    var selectedValue = selectedAnswers[questionNumber];
    var radioList = answers.getElementsByTagName('input');
    if (radioList) {
      radioList[selectedValue].checked = true;
    }
  }
}

function createAnswerDiv(i, choices) {
  var div = document.createElement('div');
  var answer = document.createElement('input');
  var label = document.createElement('label');
  var answerText = document.createElement('span');
  var answerId = 'answer' + i;

  div.className = 'radio';

  answer.id = answerId;
  answer.name = 'answers';
  answer.type = 'radio';
  answer.value = i;

  label.setAttribute('for', answerId);

  answerText.innerHTML = choices[i];

  div.appendChild(label);
  label.appendChild(answer);
  label.appendChild(answerText);

  return div;
}

function getSelectedAnswer(radioContainer) {
  if (!radioContainer || !radioContainer.getElementsByTagName) {
    return null;
  }
  var radioList = radioContainer.getElementsByTagName('input');
  for (var i = 0; i < radioList.length; i++) {
    if (radioList[i].checked) {
      return radioList[i].value;
    }
  }
  return null;
}

function getCorrectAnswers(answers) {
  var numCorrect = 0;
  for (var answer in answers) {
    var answerValue = answers[answer];
    if (allQuestions[answer].correctAnswer == answerValue) {
      numCorrect += 1;
    }
  }
  return numCorrect;
}

if (next) {
  next.onclick = function () {
    selectedAnswers[currentQuestion] = getSelectedAnswer(answers);
    currentQuestion += 1;
    goToQuestion(currentQuestion);
  }
}

if (previous) {
  previous.onclick = function () {
    selectedAnswers[currentQuestion] = getSelectedAnswer(answers);
    currentQuestion -= 1;
    goToQuestion(currentQuestion);
  }
}

if (scoreQuiz) {
  scoreQuiz.onclick = function () {
    var scoreReport = document.getElementById('scoreReport');
    selectedAnswers[currentQuestion] = getSelectedAnswer(answers);
    scoreReport.innerHTML = "";

    var numCorrect = getCorrectAnswers(selectedAnswers);
    var scoreHeader = document.createElement("p");
    var scoreBody = document.createElement("p");

    scoreHeader.className = "lead";
    scoreHeader.innerHTML = "Score Report";
    scoreBody.innerHTML = "You have answered " + numCorrect + " out of " + maxQuestion + " correct!";
    scoreReport.appendChild(scoreHeader);
    scoreReport.appendChild(scoreBody);
  }
}

goToQuestion(currentQuestion);

module.exports = getSelectedAnswer;
