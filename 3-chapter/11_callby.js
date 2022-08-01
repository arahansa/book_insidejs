var a = 100;

var objA = {
    value: 100
}

function chargeArg(num, obj){
    num  = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj);
}

chargeArg(a, objA);

console.log(a);
console.log(objA);
