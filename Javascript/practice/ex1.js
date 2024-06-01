function buildArray (num, myArray){
    var myArray = [];

    for(var count=0; count < num; count++) {
        
        myArray.push(count);
    }
    return myArray;
}

//invoke ====> call..
var result = buildArray(25);
console.log(result)