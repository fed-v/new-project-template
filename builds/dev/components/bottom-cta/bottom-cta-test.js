
// Load required dependencies
let chai = require('chai');
let assert = require('assert');

// Load the component being tested
//let bottomCta = require('./bottom-cta');  // TODO: This throws an error


// Describe the component being tested
describe('bottom-cta', function() {

    // You can use this as an init to have everything ready before running each test!
    beforeEach(function setUp(){
        console.log('Run this before each "it".');
    });

    // Test specific behaviour of the component
    it('should start empty', function() {
        // Test implementation goes here
        var arr = [];
        assert.equal(arr.length, 0, 'Array is not empty');

    });

    // Pending tests
    it("Should be tested more");

});

