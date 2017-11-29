function countLetter(str) {
  var noSpace = str.split(" ").join("");
  var object = {};
  for (var i = 0; i < noSpace.length; i++) {
    var letter = noSpace[i];
    if (object[letter] === undefined) {
      object[letter] = 1;
    }
    else {
      object[letter] += 1;
    }
  }
  return object;
}

