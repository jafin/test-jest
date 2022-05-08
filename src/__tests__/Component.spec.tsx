/**
 * @jest-environment jsdom
 */
//import { Component } from '..';
//import { render } from '@testing-library/react';
import { generateUUID } from '../id';

test('can run test', () => {
  expect(generateUUID()).toBeDefined();
  //render(<Component />);
});
