Array Iteration Methods.
JavaScript has array methods that come from functional languages. Most of them are pure functions. They create a new array, populate it, applying the specified callback to the value of each element, and then return this new array.

All array iteration methods have a similar syntax. The original array, array, the method method call and the callback callback function as the method argument.

array.method(callback[currentValue, index, array])

In most methods, callback arguments are the value of the currentValue element (the first parameter), the position of the index element (the second parameter) and the original array, array (the third parameter).

array.method((item, idx, arr) => {
  // logic that will be used in each iteration
});

All parameters, except for the item element value, are optional. Parameter names can be arbitrary, but there are unofficial conventions.

array.method(item => {
  // logic that will be used in each iteration
});