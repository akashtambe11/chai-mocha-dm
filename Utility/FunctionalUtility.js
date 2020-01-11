var read = require('readline-sync');

module.exports = {

add(a, b){
    try{
        if(isInteger(a) && isInteger(b)){
            var ans = a + b;
            return ans;
        }
        else{
            throw "Not a Integer"
        }
    }
    catch(err){
        console.log(err);

    }
}
}