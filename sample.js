//In case of  arrow function "this " is pointing to the place where it is declared and in case of normal function "this " is pointing to the place where it is called
class Person{
    constructor(name){
        this.name=name;
    }

    printNameArrow=() => {
        setTimeout(()=>{
            console.log("Arrow function : "+this.name)
        },100)
    }

    printNameFunction(){
        setTimeout(function(){
            console.log("Normal function : "+this.name);
        },100)
    }

}

let person=new Person('Lokesh');
person.printNameArrow();
person.printNameFunction();
console.log(this.name);