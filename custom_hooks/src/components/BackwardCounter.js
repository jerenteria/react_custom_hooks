import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter';

const BackwardCounter = () => {
  const counter = useCounter(false); // set to false to count backwards from function in use-counter.js

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
