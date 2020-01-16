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
    it('should not be string', () => {
        var c = util.add('', '');
        assert.equal("input should not be string", c)
    })
//-------------------------------------- String ----------------------------------------------
   
});
