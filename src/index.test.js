const getSelectedAnswer = require('./index');

test('returns null with no input', () => {
  expect(getSelectedAnswer()).toBe(null);
});

test('returns null with empty input', () => {
  var answers = document.createElement('div');
  answers.id = 'answers';
  expect(getSelectedAnswer(answers)).toBe(null);
});

test('returns null with no checked input', () => {
  var answers = document.createElement('div');
  answers.id = 'answers';
  answers.innerHtml = `<div class="radio"><label for="answer0"><input id="answer0" name="answers" type="radio" value="0"><span>Sixteen</span></label></div><div class="radio"><label for="answer1"><input id="answer1" name="answers" type="radio" value="1"><span>Twelve</span></label></div><div class="radio"><label for="answer2"><input id="answer2" name="answers" type="radio" value="2"><span>Four</span></label></div><div class="radio"><label for="answer3"><input id="answer3" name="answers" type="radio" value="3"><span>Fifteen</span></label></div>`;
  expect(getSelectedAnswer(answers)).toBe(null);
});

test('returns 1 with checked input', () => {
  var answers = document.createElement('div');
  answers.id = 'answers';
  answers.innerHTML = `<div class="radio"><label for="answer0"><input id="answer0" name="answers" type="radio" value="0"><span>Sixteen</span></label></div><div class="radio"><label for="answer1"><input id="answer1" name="answers" type="radio" value="1" checked="checked"><span>Twelve</span></label></div><div class="radio"><label for="answer2"><input id="answer2" name="answers" type="radio" value="2"><span>Four</span></label></div><div class="radio"><label for="answer3"><input id="answer3" name="answers" type="radio" value="3"><span>Fifteen</span></label></div>`;
  expect(getSelectedAnswer(answers)).toBe("1");
});
