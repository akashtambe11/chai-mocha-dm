var assert = require('chai').assert;
var read = require('readline-sync');
var util = require('../Utility/FunctionalUtility');
//------------------------------------- Integer ---------------------------------------------
describe('Addition Programm', () => {
    it('should be pass', () =>{
        var a = util.add(5,2);
        console.log(a);
    });
    it('should not be undefined', () => {
        var b = util.add(undefined, undefined);
        assert.equal("input should not be undefined", b);
    });
    it('should be number', () => {
        var c = util.add('abc', 'xyz');
        assert.equal("input should be number", c)
    })
    it('should not be empty', () => {
        var c = util.add('', '');
        assert.equal("input should not be empty", c)
    });
});
//-------------------------------------- String ----------------------------------------------
describe('String Replace Programm', () => {
    it('should be pass', () =>{
        var a = util.stringConcat('abc','xyz');
        console.log(a);
    });
    it('should not be undefined', () => {
        var b = util.stringConcat(undefined, undefined);
        assert.equal("input should not be undefined", b);
    });
    it('should be number', () => {
        var c = util.stringConcat('', '');
        assert.equal("input should not be empty", c)
    })
    it('should not be number', () => {
        var c = util.stringConcat(12, 25);
        assert.equal("input should not be number", c)
    });
});
