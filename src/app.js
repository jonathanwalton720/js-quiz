import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Quiz from './components/quiz/quiz';
import Home from './components/home';

export default class App extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    
    return <Router>
        <div>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Nerd Quiz</Link>
      </div>
    </nav>
    <div className="container">
    <Route exact path="/" component={Home} />
    <Route exact path="/quiz" component={Quiz} />
    {/* <Route exact path="/score" component={ScoreQuiz} /> */}
    </div>
  </div>
</Router>;
  }
}

var appElement = document.getElementById('app');
var app = <App />;
ReactDOM.render(app, appElement);
