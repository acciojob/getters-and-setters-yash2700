class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getAge(){
        return this.age;
    }
    getName(){
        return this.name;
    }
}

class Student extends Person{

    study(){
    console.log(`${student.name} is teaching`);
        ;
    }
}

class Teacher extends Person{
    teach(){
        console.log(`${teacher.name} is teaching`);
    }
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
