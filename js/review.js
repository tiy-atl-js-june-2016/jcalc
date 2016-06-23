// 1) How does forEach work and when do I use it?
// 2) what do addEventListener, forEach, filter, map, reduce return?
// 3) How do borders, margin, and padding effect total object dimensions?
   // Let's talk the box model!
   // Definitely use updated box-sizing: border box no matter what.
   // http://learnlayout.com/box-sizing.html
   // You also will probably much prefer flexbox and/or inline-block
   // to using floats for layout: http://learnlayout.com/flexbox.html
// 4) How do you make dynamic sizes to handle browser resizing and mobile devices, etc?
   // * Responsive Design ( check learnlayout.com )
// 5) When can I use vertical-align and how do I use it correctly?
  // TODO: Answer this by Friday, have a posted document/CSS Notes on TIYO.


// Answer 1
var names = ["brit", "josh", "jenna", "ben"];


// Answer 2

/*

 Remember that higher order functions are functions that take a function
 as an argument or return a function as a result.

 function name :: (arguments, with, commas) -> return value
 forEach :: [x], callback(x) -> undefined
 map     :: [x], callback(x) -> [x]
 filter  :: [x], callback(x) -> [x]
 reduce  :: [x], callback(total, x) -> x
 addEventListener :: eventName, callback(event) -> undefined
 on      :: eventName, callback(event) -> PageNode it was called on (a jQuery thing)

forEach: If you want something to happen for every item in a collection and
  you *DON'T* care about the result.
map: If you want to run a function for everything in a collection and you *DO*
  want to keep the result.
filter: You have a lot of data but you only want to work with the data that
  obeys some rule. WARNING: Filter is *not* good for pulling out things inside a container.
reduce: You have a collection of X and you want to boil the collection down
  to just one value.

 */

function addOne (x) {
  return x + 1;
};

var incrementedNums = [1,2,3,4].map(addOne); // returns [2,3,4,5]


// Returns undefined!
names.forEach(function (name) {
  console.log(name.toUpperCase());
  return name.toUpperCase();
});

// Returns a new array based on the function!
// Doesn't modify the original array, just builds a new one.
// If you want to "keep" the modified thing, store it in a new variable.
names.map(function (name) {
  return name.toUpperCase();
});

// Returns undefined! But it has a side effect ....
function sum (x, y) {
  console.log(x + y);
};

var total = sum(10, 7);
console.log(total);

function workingSum (x, y) {
  return x + y;
};

var workingTotal = workingSum(10, 7);
console.log(workingTotal);


