var assert = require('chai').assert;
var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');
//------------------------------------- Integer ---------------------------------------------
describe('Addition Programm', () => {
    it('should be pass', () =>{
        var a = util.add(5,2);
    });
    it('should not be undefined', () => {
        var b = util.add(undefined, undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var b = util.add(null, null);
        assert.equal("input should not be undefined or null", b);
    });
    it('should be number', () => {
        var c = util.add('abc', 'xyz');
        assert.equal("input should be number", c)
    })
});

//-------------------------------------- String ----------------------------------------------
describe('String Replace Programm', () => {
    it('should be pass', () =>{
        var a = util.stringConcat('abc','xyz');
    });
    it('should not be undefined', () => {
        var b = util.stringConcat(undefined, undefined);
        assert.equal("input should not be undefined or null", b);
    });
    it('should not be null', () => {
        var b = util.stringConcat('', '');
        assert.equal("input should not be undefined or null", b);
    });
    it('should be string', () => {
        var c = util.stringConcat(12, 25);
        assert.equal("input should be string", c)
    });
});
