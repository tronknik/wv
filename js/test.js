
function mapArray(arr, fn) {
    
    var newArr = []
    
    for(i=0; i< arr.length; i++) {
        
        newArr.push (
            
            fn(arr[i])
            
            );
        
    }
    
    
    return newArr;
}

var aArr = [1,2,3];

var xArr = mapArray(aArr, function(limiter, item) {
    return limiter < item;
}.bind(null, 1)
                   
                   
);

var fixedFunc = function(lim) {
    return function (limiter, item){
        return limiter < item;
    }.bind(null, lim);
}
    
xArr = mapArray(aArr, fixedFunc(0));
console.log(xArr);
console.log(xArr);