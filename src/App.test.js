// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Ship , Gameboard} from './App'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let testShip = Ship("testShip",4);
it('Create a Ship with name:test and length:4', () => {
  expect(testShip.getName()).toBe("testShip");
  expect(testShip.getLength()).toBe(4);
});

it('testShip throws error if hit position >= length or < 0', () => {
    expect(() => {testShip.hit(5)}).toThrow();
});

it('testShip isSunk true only after 4 hits', () => {
  expect(testShip.isSunk()).toBe(false)
  testShip.hit(0)
  testShip.hit(1)
  expect(testShip.isSunk()).toBe(false)
  testShip.hit(2)
  testShip.hit(3)
  expect(testShip.isSunk()).toBe(true)
});

let testGameboard
it('Creats a Gameboard', () => {
  testGameboard = new Gameboard({})
})

it('allSunk true when there are no ships',() => {
  expect(testGameboard.allSunk()).toBe(true)
})

it('Adds a Ship to the Gameboard', () => {
  testGameboard.placeShip(testShip, 2 , 2 )
  testGameboard.placeShip(Ship("test",4), 2 , 3 , false)
})

it('throw error if ship does not fit', () => {
  expect(() => {testGameboard.placeShip(Ship("test",4) , 8 , 2)}).toThrow();
  expect(() => {testGameboard.placeShip(Ship("test",4) , 2 , 8, false)}).toThrow();
})

it('throw error if ship overlaps', () => {
  expect(() => {testGameboard.placeShip(Ship("test",4) , 0 , 2)}).toThrow();
  expect(() => {testGameboard.placeShip(Ship("test",4) , 2 , 0,false)}).toThrow();
})

it('the Gameboard receiveAttack', () => {
  testGameboard.receiveAttack( 1 , 1 )
})

it('throw error if receiveAttack to allrdy hit location', () => {
  expect(() => {testGameboard.receiveAttack( 1 , 1 )}).toThrow();
})

it('allSunk false when there unsunk ships',() => {
  expect(testGameboard.allSunk()).toBe(false)
})