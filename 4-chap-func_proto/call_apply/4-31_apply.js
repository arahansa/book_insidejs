function Person(name, age, gender, position){
    this.name = name;
    this.age = age;
    this.gender= gender;
}

var foo = {};

Person.apply(foo, ['foo', 30, 'main']);
console.dir(foo);
