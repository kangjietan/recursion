// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // You should use document.body, element.childNodes, and element.classList
  // Use childNodes recursively to iterate through and store if the element contains the className
  // childNodes returns undefined if there are none
  // Check the classList at each node to see if className is present
  // Push element into array if it exists
  var result = [];

  var checkChildNodes = function(node) {
    // if current 
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }

    if (node.hasChildNodes()) {
      for (var i = 0; i < node.childNodes.length; i++) {
        checkChildNodes(node.childNodes[i]);
      }
    }
  }
  checkChildNodes(document.body);
  return result;
};
