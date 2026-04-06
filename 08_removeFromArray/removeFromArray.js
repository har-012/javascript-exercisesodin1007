const removeFromArray = function(arr,...theArgs) {
    for(let arg of theArgs){
        if(arr.includes(arg)){
            let i = arr.indexOf(arg);
            arr.splice(i,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
