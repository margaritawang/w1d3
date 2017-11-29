function returnIndices(str) {
  var noSpace = str.split(" ").join("");
  var object = {};
  for (var i = 0; i < noSpace.length; i++) {
    var letter = noSpace[i];
    if (object[letter] === undefined) {
      object[letter] = [i];
    }
    else {
      object[letter].push(i);
    }
  }
  return object;
}

console.log(returnIndices('lighthouse in the house'));