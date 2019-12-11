import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import CurrClasses from '../Components/CurrClasses/CurrClasses.js';
import json from '../assignments.json';
import { get } from 'http';

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

test('Clicking assignment button makes modal visible', () => {
    const setClasses = jest.fn();
    const classes = json.courses;

    const {getByText} = render(<CurrClasses state={{classes, setClasses}} />);
    fireEvent.click(getByText('Algorithms - Assignment 1'));
    expect(getByText('Enter hours spent to complete this assignment:')).toBeTruthy();
})