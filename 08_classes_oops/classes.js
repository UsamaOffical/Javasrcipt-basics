

function Users (UserName,userAge,userEdu){
    this.UserName = UserName
    this.userAge = userAge
    this.userEdu = userEdu

    this.greet = () => {
        console.log(`Hello ${this.UserName} Your age is ${this.userAge} And Your education is ${this.userEdu}`)
    };
    
    
}

const userOne = new Users('usama',23,'Matric')
// console.log(userOne.constructor);
// console.log(userOne);
console.log(userOne.greet());

// // const userOne = new Users('Usama',23,'matric')
// // const userTwo = new Users('ahemd',27,'matric')

// // for(let i in userOne){
// //     console.log(i,userOne[i]);
    
// // }
// // console.log(userTwo);
// // console.log(userOne);


// class Person {
//     constructor(name,age,phone) {
//         this.name = name
//         this.age = age
//         this.phone = phone 
//     }
//     greet(){
//         console.log(`Hello ${this.name} your age is ${this.age} and phone is ${this.phone}`);
        
//     }
// }

// class Power extends Person{
//     // constructor(power){
//     //     this.power = power
//     // }
//     // personGreet(){
//     //     console.log(`Hello ${this.name} your age is ${this.age} and phone is ${this.phone} And Your power ${this.power} `);
//     // }
//     // console.log('helo');
//     say(){
//         console.log(
//             'hello'
//         );
        
//     }
    
// }

// let user_1 = new Person('Usama',23,3232374)
// let user_2 = new Power('Ahmed',29,55232374,'Cosmatics')
// console.log(user_1.greet());
// console.log(user_2.greet());
// console.log(user_2.say());


