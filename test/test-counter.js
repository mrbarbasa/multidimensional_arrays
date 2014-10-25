var MDA = require('../MultidimensionalArray');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('MultidimensionalArray.count', function() {
  it('should be a function', function() {
    expect(MDA.generate).to.be.a('function');
  });

  describe('called with two arguments: sample_array, true', function() {
    it('should return an array of length 3, each containing arrays of length 3 with random boolean values', function() {
      var something = "some value";
      expect(something).to.be.a('string');
      something.should.equal('some value');
    });
  });

  describe('called with two arguments: sample_array, false', function() {

  });

  describe('called with two arguments: sample_array, "red"', function() {

  });

});
