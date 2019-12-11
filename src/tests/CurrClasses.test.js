import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import CurrClasses from '../Components/CurrClasses/CurrClasses.js';
import json from '../assignments.json';

test('CurrClasses should render passed props as buttons for each assignment', () => {
    const setClasses = jest.fn();
    
    const classes = json.courses;
    const {getByTestId} = render(<CurrClasses state={{classes, setClasses}} />);
    console.log(classes);
    expect(getByTestId('00').textContent).toBe('Algorithms - Assignment 1');
    expect(getByTestId('01').textContent).toBe('Algorithms - Assignment 2');
    expect(getByTestId('10').textContent).toBe('Intro to OOP - Lab 1');
    expect(getByTestId('20').textContent).toBe('Data Structures - HW 1');


})