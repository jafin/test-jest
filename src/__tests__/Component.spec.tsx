/**
 * @jest-environment jsdom
 */
import React from 'react';
import { Component } from '..';
import { render, cleanup } from '@testing-library/react';

test("can run test", () => {
    render(<Component />);
  });
  