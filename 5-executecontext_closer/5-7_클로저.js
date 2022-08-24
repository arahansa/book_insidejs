
function outerFunc(){
    var x = 10;
    var innerFunc = function(){
        console.log(x);
    }
    return innerFunc;
}

var innerFunc = outerFunc();
innerFunc();
