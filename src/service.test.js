import service from './service';

test('it returns correct mock data', () => {
  var quizQuestions = service.GetQuizQuestions();
  expect(quizQuestions).toMatchSnapshot();
})
