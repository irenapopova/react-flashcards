import React from 'react';

const QUESTION_DATA = [
  {
    question: <span>Which of the following is TRUE about reflows and repaints?</span>,
    answers: [
      <span>They are the same thing.</span>,
      <span>Repaints (or redraws) occur when elements change their visual styles but not layout.</span>,
      <span>Reflows compute layout, are more performance critical, and occur when elements are inserted, removed, moved, animated, etc.</span>,
      <span>The previous two answers are correct.</span>
    ],
    correct: 3
  },
  {
    question: <span>What are the three types of JavaScript errors?</span>,
    answers: [
      <span>Parse Errors, Syntax Errors and Runtime Errors.</span>,
      <span>Loading Errors, Runtime Errors and Logic Errors.</span>,
      <span>Syntax Errors, Logic Errors and Loading Errors.</span>,
      <span>Bad Errors, Very Bad Errors, and Fatal Errors.</span>
    ],
    correct: 1
  },

  {
    question: <span>What is a closure?</span>,
    answers: [
      <span>An inner function that has access to an outer function is variables, even after the outer function has executed.</span>,
      <span>A stateful function; a function that preserves state.</span>,
      <span>The combination of a function and the lexical environment within which that function was declared.</span>,
      <span>All of the above.</span>
    ],
    correct: 3
  },