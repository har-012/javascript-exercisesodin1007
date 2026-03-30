const repeatString = function(str,num) {
    if(num < 0){
        return 'ERROR';
    }
    if(str === ''){
        return '';
    }
    else if(num === 0){
        return ''
    }
    let newStr = str;
    for(let i = 1;i < num;i++){
        newStr += str;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
