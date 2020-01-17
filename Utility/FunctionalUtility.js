var read = require('readline-sync');

module.exports = {
//------------------------------------- Integer ---------------------------------------------
    add(num1, num2){

        //Validation for Integer
        try{ 
            if(num1 == undefined || num2 == undefined || num1 == null || num2 == null || num1.length == 0 || num2.length == 0)    
                                                          throw "input should not be undefined or null"
            if(isNaN(num1) || isNaN(num2))                throw "input should be number"
        }
        catch(e){
            return e;
        }

        //Computation
        let addition = parseInt(num1) + parseInt(num2);
        return addition;
    },
//-------------------------------------- String ----------------------------------------------
    stringConcat(str1, str2){
        
        //Validation for String
        try{ 
            if(str1 == undefined || str2 == undefined || str1 == null || str2 == null || str1.length == 0 || str2.length == 0)                 
                                                                                throw "input should not be undefined or null"
            if(!(/^[a-zA-Z]+$/.test(str1)) || !(/^[a-zA-Z]+$/.test(str2)))      throw "input should be string"
              
        }
        catch(e){
            return e;
        }

        //Computation
        let concating = str1.concat(str2);
        return concating;
    }


}





