import React from 'react';
import { generateUUID } from './id';

export const Component = (): JSX.Element => {
  const x = generateUUID();
  return <div>Test</div>;
};
