
// This test is from the Fireship TDD introduction

// The challenge was to write a test for a stack data structure where the last item in is the first item out
// The stack cannot be an array

// We created a vanilla JS Vite project
// Installed Jest for unit testing and cypress for e2e testing 

// To run:
// npm run jest
// npm run e2e

// define the Stack class
class Stack {
  // use a constructor to initialise it with the correct data
  constructor() {
    this.top = -1;
    // represent the stack itself as an empty object
    this.items = {};
  }

  // define the peek property to return the top of the stack
  get peek() {
    return this.items[this.top];
  }

  // use the push method to add the value to the top of the stack
  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  // use the pop method to remove the value at the top of the stack
  pop() {
    this.top - 1;
  }
}

describe('My Stack', () => {

  // create a class that doesn't exist to represent the object we want to task
  // create a global stack reference
  let stack;

  // use a jest helper function to reinstantiate the stack before each test automatically
  beforeEach(() => {
    stack = new Stack();
  })

  // instantiate the stack with a valid state
  it('is created empty', () => {

    // what we expect the task to return
    // we want it to return the value of the index for the item at the top of the stack using the top property
    // toBe() is a matcher that tests the actual value to the correct value
    expect(stack.top).toBe(-1);

    // check that items is an empty object
    // the toEqual() matcher checks the actual equality and not the value object reference
    expect(stack.items).toEqual({});

  });

  // check that an item can be added to the top of the stack
  it('can push to the top', () => {

    // push an item to the stack
    stack.push('avocado');
    // expect the top value to be incremented by 1
    expect(stack.top).toBe(0);
    // check that the top value of the stack is what we pushed
    expect(stack.peek).toBe('avocado');

  });

  // check that an item can be removed from the top of the stack
  it('can pop off', () => {

    // remove the item at the top of the stack
    stack.pop();
    //expect the top value to be decreased by 1
    expect(stack.top).toBe(-1);
    // check that items is an empty object
    expect(stack.items).toEqual({});
  });

});
