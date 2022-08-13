function myFunction(){
    console.dir(arguments);

    var args = Array.prototype.slice.apply(arguments);
    console.dir(args);
}

myFunction(1,2,3);
