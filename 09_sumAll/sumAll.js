const sumAll = function(num1,num2) {

    if(Number.isInteger(num1) && Number.isInteger(num2)){
        if(num1<0 || num2<0) return "ERROR";
        let small,large,sum = 0 ;
        if(num1 > num2){ 
            small = num2;
            large = num1;
        }
        else{
            small = num1;
            large = num2;
        }
        for(let i = small;i <= large;i++){
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
