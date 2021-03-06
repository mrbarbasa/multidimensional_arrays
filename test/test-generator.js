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
      var array = MDA.generate();
      array.forEach(function(a) {
        expect(a).to.be.an('array');
        expect(a.length).to.equal(3);
      });
    });

    it('each item inside each second-level array should be a number, either 1 or 0', function() {
      var array = MDA.generate();
      array.forEach(function(a) {
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
    it('should return an array of length equivalent to the number argument', function() {
      expect(MDA.generate(4).length).to.equal(4);
      expect(MDA.generate(10).length).to.equal(10);
    });

    it('each item inside the array should be a number, either 1 or 0', function() {
      var array = MDA.generate(4);
      array.forEach(function(a) {
        expect(a).to.be.a('number');
      });
    });
  }); // end called with one argument

  describe('called with two arguments', function() {
    it('should return a top-level array of length equivalent to the first number argument', function() {
      expect(MDA.generate(5, 4).length).to.equal(5);
      expect(MDA.generate(10, 3).length).to.equal(10);
    });

    it('each item inside the top-level array should be an array of length equivalent to the second number argument', function() {
      var array = MDA.generate(5, 4);
      array.forEach(function(a) {
        expect(a).to.be.an('array');
        expect(a.length).to.equal(4);
      });
    });

    it('each item inside each second-level array should be a number, either 1 or 0', function() {
      var array = MDA.generate(5, 4);
      array.forEach(function(a) {
        a.forEach(function(b) {
          expect(b).to.be.a('number');
        });
      });
    });
  }); // end called with two arguments

  describe('called with three arguments', function() {
    it('should return a top-level array of length equivalent to the first number argument', function() {
      expect(MDA.generate(3, 4, 5).length).to.equal(3);
      expect(MDA.generate(5, 4, 3).length).to.equal(5);
    });

    it('each item inside the top-level array should be an array of length equivalent to the second number argument', function() {
      var array = MDA.generate(3, 4, 5);
      array.forEach(function(a) {
        expect(a).to.be.an('array');
        expect(a.length).to.equal(4);
      });
    });

    it('each item inside the second-level array should be an array of length equivalent to the third number argument', function() {
      var array = MDA.generate(3, 4, 5);
      array.forEach(function(a) {
        a.forEach(function(b) {
          expect(b).to.be.an('array');
          expect(b.length).to.equal(5);
        });
      });
    });

    it('each item inside each third-level array should be a number, either 1 or 0', function() {
      var array = MDA.generate(3, 4, 5);
      array.forEach(function(a) {
        a.forEach(function(b) {
          b.forEach(function(c) {
            expect(c).to.be.a('number');
          });
        });
      });
    });
  }); // end called with three arguments

});
