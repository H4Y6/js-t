const objC = { c: 1 };

const objB = Object.create(objC);
objB.b = 2;

const objA = Object.create(objB);
objA.a = 3;
objA.c = 11;

console.log('objC: ', objC);
console.log('objB: ', objB);
console.log(objA.c, objA.b, objA.a, 'objA: ', objA);
console.log(objA.hasOwnProperty('c'));
console.log(objA.hasOwnProperty('a'));
console.log(objA.hasOwnProperty('b'));

const objD = Object.create({ message: "This is the prototypal property." });
console.log(objD);
console.log(objD.message);
