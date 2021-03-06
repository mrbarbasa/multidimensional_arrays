module.exports = (function() {

  this.generateIterative = function() {
    var argsLength = arguments.length;
    var contents = [];
    var value = -1;
    var count = -1;

    if (argsLength === 0) {
      for (var i = 0; i < 3; i++) {
        contents.push([]);

        for (var j = 0; j < 3; j++) {
          value = Math.floor(Math.random() * 2); // 1 or 0
          contents[i].push(value);
        }
      }
    } // end if argsLength === 0
    else if (argsLength === 1) {
      for (var i = 0; i < arguments[0]; i++) {
        value = Math.floor(Math.random() * 2); // 1 or 0
        contents.push(value);
      }
    } // end else if argsLength === 1
    else if (argsLength >= 2) {
      // 4 - 2 = 2 // 2, 1, 0 --> count = 4, then count = 3, then count = 2
      for (var i = argsLength - 2; i >= 0; i--) {
        count = arguments[i]; // count = 4, then count = 3

        var arr = [];
        // count = 4: 0, 1, 2, 3 // count = 3: 0, 1, 2 // count = 2: 0, 1
        for (var j = 0; j < count; j++) {
          if (i === argsLength - 2) {
            arr.push([]);

            for (var k = 0; k < arguments[argsLength - 1]; k++) {
              value = Math.floor(Math.random() * 2); // 1 or 0
              arr[j].push(value);
            }
          }
          else {
            arr[j] = contents.slice(0);
          }
        }
        contents = arr.slice(0);
      }
    } // end else if argsLength >= 2

    return contents;
  };

  this.generate = function() {
    var argsLength = arguments.length;
    var contents = [];
    var value = -1;
    var count = -1;

    if (argsLength === 0) {
      for (var i = 0; i < 3; i++) {
        contents.push([]);

        for (var j = 0; j < 3; j++) {
          value = Math.floor(Math.random() * 2); // 1 or 0
          contents[i].push(value);
        }
      }
    } // end if argsLength === 0
    else if (argsLength === 1) {
      for (var i = 0; i < arguments[0]; i++) {
        value = Math.floor(Math.random() * 2); // 1 or 0
        contents.push(value);
      }
    } // end else if argsLength === 1
    else if (argsLength >= 2) {
      var args = [];
      for (var l = 0; l < argsLength; l++) {
        args.push(arguments[l]);
      }
      contents = this.generateHelper(args, 0, []);
    } // end else if argsLength >= 2

    return contents;
  };

  this.generateHelper = function(args, index, contents) {
    for (var j = 0; j < args[index]; j++) {
      if (index === args.length - 1) {
        contents.push(Math.floor(Math.random() * 2));
      }
      else {
        contents.push([]);
        this.generateHelper(args, index + 1, contents[j]);
      }
    }
    return contents;
  };

  this.count = function(array, value) {
    var valueCount = 0;
    var arrValue;

    for (var i = 0; i < array.length; i++) {
      arrValue = array[i];
      if (arrValue instanceof Array) {
        valueCount += this.count(arrValue, value);
      }
      else {
        if (value === true && arrValue === 1) {
          valueCount++;
        }
        else if (value === false && arrValue === 0) {
          valueCount++;
        }
        else if (value === arrValue) {
          valueCount++;
        }
      }
    }

    return valueCount;
  };

  return this;
})();
