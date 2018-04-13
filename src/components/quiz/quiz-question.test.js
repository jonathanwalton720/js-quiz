import React from 'react';
import renderer from 'react-test-renderer';
import Question from './question';

test('it renders correctly', () => {
  var component = renderer.create(<Question text="What is my name?" choices={['Tim', 'Bob', 'Harry']} />)
  var json = component.toJSON();
  expect(json).toMatchSnapshot();
});
