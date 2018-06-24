
// Load assertions
let assert = require('assert');
let expect = require('chai').expect;
let should = require('chai').should();
let sinon = require('sinon');  // Used to spy on out functions


// Describe the component being tested
describe('footer', function() {

    // Test specific behaviour of the component
    it('should start empty', function() {

        // Let's create some variables to test
        let arr = [],
            arrLength = arr.length,
            randomBool = true;

        // Common assertion
        assert.equal(arrLength, 0, 'Array is not empty');

        // Chai's expect
        expect(randomBool).to.be.true;

        // Chai's should
        arrLength.should.equal(0);

    });

    // Pending tests
    it("Should be tested more");

});

