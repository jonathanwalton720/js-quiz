import React from 'react';
import renderer from 'react-test-renderer';
import Choice from './choice';

test('it renders correctly', () => {
  var component = renderer.create(<Choice index={5} text='This is a choice.' />);
  var json = component.toJSON();
  expect(json).toMatchSnapshot();
})
