var MDA = require('../MultidimensionalArray');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

describe('MultidimensionalArray.generate', function() {

  it('should be a function', function() {
    expect(MDA.generate).to.be.a('function');
  });

  describe('called with no arguments', function() {
    it('should return a top-level array of length 3', function() {
      var array = MDA.generate();
      expect(array.length).to.equal(3);
    });

    it('each item inside the top-level array should be an array of length 3', function() {
      array.forEach(function(a, index) {
        expect(a).to.be.an('array');
        expect(a.length).to.equal(3);
      });
    });

    it('each item inside each second-level array should be a number, either 1 or 0', function() {
      array.forEach(function(a, index) {
        a.forEach(function(b) {
          expect(b).to.be.a('number');
          // expect([1, 0]).to.include(b);
          // expect(b).to.be.at.most(1);
          // expect(b).to.be.at.least(0);
        });
      });
    });
  }); // end called with no arguments

  describe('called with one argument', function() {

  }); // end called with one argument

  describe('called with two arguments', function() {

  }); // end called with two arguments

  describe('called with three arguments', function() {

  }); // end called with three arguments

});
