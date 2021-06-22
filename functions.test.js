const { expect, test, describe } = require('@jest/globals')
const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions.js');

test('name', function() {
    expect(returnTwo()).toBe(2);
});

test('test name', function() {
    expect(greeting('jill', 'James')).toBe('Hello, jill', 'Hello, James')
});

test('adding stuff', function() {
    expect(add(1, 2)).toEqual(3),
    expect(add(5, 9)).toEqual(14)
});

describe ('calculator', function() {
    test('multiply', function() {
        expect(multiply(1, 2)).toEqual(2),
        expect(multiply(10, 5)).toEqual(50)
    }) 
    test('divide', function() {
        expect(divide(1, 2)).toEqual(.5),
        expect(divide(10, 5)).toEqual(2)
    }) 
    test('subtract', function() {
        expect(subtract(1, 2)).toEqual(-1),
        expect(subtract(10, 5)).toEqual(5)
    }) 
})