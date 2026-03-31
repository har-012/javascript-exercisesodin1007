const reverseString = function(str) {
    let newStr = [];
    for(let i = 0;i < str.length;i++){
        newStr[i] = str[i];
    }
    return newStr.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
