// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // Check numbers, booleans, or null to just stringify right away
  if(typeof obj === "number" || typeof obj === "boolean" || obj === null) {
    return "" + obj;
  }

  // Check for strings
  if(typeof obj === "string") {
    return '"' + obj + '"'; // Opening and close string quotations
  }

  // Check if array, iterate over array
  var stringifiedArr = [];
  if(Array.isArray(obj)) {
    // If empty arr
    if(obj.length === 0) {
      return "[]";
    }

    for (var i = 0; i < obj.length; i++) {
      stringifiedArr.push(stringifyJSON(obj[i]));
    }

    return "[" + stringifiedArr + "]";
  }

  // Check if object, iterate over object
  // typeof null === object,
  var stringifiedObj = [];
  // If object is empty, return
  if (typeof obj === "object" && obj !== null) {
    if(Object.keys(obj).length === 0 && obj.constructor === Object) {
      return "{}";
    }

    // Iterate over each property, key is string, value will be handled by function call
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== "function") {
        var stringKeyValue = '"' + key + '":' + stringifyJSON(obj[key]);
        stringifiedObj.push(stringKeyValue);
      }
    }

    return "{" + stringifiedObj + "}";
  }

};
