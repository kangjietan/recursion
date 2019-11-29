// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var stringified = "";

  // Check numbers, booleans, or null to just stringify right away
  if(typeof obj === "number" || typeof obj === "boolean" || obj === null) {
    return "" + obj;
  }

  // Check for strings
  if(typeof obj === "string") {
    return '"' + obj + '"'; // Opening and close string quotations
  }

  // Check if array, iterate over array
  if(Array.isArray(obj)) {
    if(obj.length === 0) {
      return "[]";
    }

    for (var i = 0; i < obj.length; i++) {

    }
  }

  // Check if object, iterate over object


};
