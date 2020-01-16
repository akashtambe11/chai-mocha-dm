var read = require('readline-sync');

module.exports = {
//------------------------------------- Integer ---------------------------------------------
    add(num1, num2){

        //Validation for Integer
        try{ 
            if(num1 == undefined || num2 == undefined)    throw "input should not be undefined"
            
              /**
             * @description If you write null if statement it will also shows undefined
             *              so i commemnt that statement.
             * @note        Either write undefine case or null case.
             */
            // if(num1 == null || num2 == null)           throw "input should not be null (it shows undefined)"
          
            if(num1.length == 0 || num2.length == 0)      throw "input should not be empty"
            if(isNaN(num1) || isNaN(num2))                throw "input should be number"
        }
        catch(e){
            return e;
        }

        //Computation
        let addition = num1 + num2;
        return addition;
    },
//-------------------------------------- String ----------------------------------------------
    stringConcat(str1, str2){
        
        //Validation for String
        try{ 
            if(str1 == undefined || str2 == undefined)                          throw "input should not be undefined"
            if(str1.length == '' || str2.length == '')                          throw "input should not be empty"
            if(!(/^[a-zA-Z]+$/.test(str1)) || !(/^[a-zA-Z]+$/.test(str2)))      throw "input should not be number"
              
        }
        catch(e){
            return e;
        }

        //Computation
        let concating = str1.concat(str2);
        return concating;
    }


}





