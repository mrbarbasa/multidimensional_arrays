var MDA = require('../MultidimensionalArray');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('MultidimensionalArray.count', function() {
  it('should be a function', function() {
    expect(MDA.generate).to.be.a('function');
  });

  describe('called with two arguments: sample_array, true', function() {
    it('should return a number representing how many true values there are inside each array in sample_array', function() {
      var sample_array = [1, 0, 0, 1, 0, 0, 0, 0, 1];
      var result = MDA.count(sample_array, true);
      expect(result).to.equal(3);
    });
  }); // end called with two arguments: sample_array, true

  describe('called with two arguments: sample_array, false', function() {
    it('should return a number representing how many false values there are inside each array in sample_array', function() {
      var sample_array = [[1, 0], [0, 1], [0, 0], [0, 0]];
      var result = MDA.count(sample_array, false);
      expect(result).to.equal(6);
    });
  }); // called with two arguments: sample_array, false

  describe('called with two arguments: sample_array, "red"', function() {
    it('should return a number representing how many "red" values there are inside each array in sample_array', function() {
      var sample_array = [
        [
          ["red", "green", "blue"],
          ["red", "green", "blue"],
          ["red", "green", "blue"],
        ],
        [
          ["red", "green", "red"],
          ["red", "green", "red"],
          ["red", "green", "red"],
        ],
        [
          ["red", "red", "blue"],
          ["red", "red", "blue"],
          ["red", "red", "blue"],
        ],
      ];
      var result = MDA.count(sample_array, "red");
      expect(result).to.equal(15);
    });
  }); // called with two arguments: sample_array, "red"

});
