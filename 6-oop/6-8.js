function Person(arg){
    this.name = arg;
}

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
}


Person.method("setName", function(value){
    this.name = value;
})

Person.method("getName", function(){
    return this.name;
})

function Student(){

}


function F(){
}
F.prototype = Person.prototype;

Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype;


