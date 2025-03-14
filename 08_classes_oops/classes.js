

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
// console.log(userOne.greet());

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


// class User{
//     constructor(user_name,email){
//         this.user_name = user_name
//         this.email = email
//     }
//     say(){
//         console.log(`Hello ${this.user_name} You logged in this email ${this.email}`);       
//     }
// }

// class Person extends User{
//     constructor(user_name,email,age,phone){
//         super(user_name,email)
//         this.age = age
//         this.phone = phone
        
//     }

//     greet(){
//         console.log(`Welcome ${this.user_name}`);
        
//     }
// }

// class Power extends Person{
//     constructor(user_name,email,age,phone,power){
//         super(user_name,email)
//         this.age = age
//         this.phone = phone
//         this.power = power
        
//     }
//     // static powers(){
//     //     console.log(`Hello ${this.user_name} Your power is ${this.power}`);
        
//     // }
//      powers(){
//         console.log(`Hello ${this.user_name} Your power is ${this.power}`);
        
//     }

    
// }

// const user_1 = new User('Usama','hc@hc.com')
// console.log(user_1);
// user_1.say()

// const person_! = new Person('Usama','hc@hc.com',23,'03223435')
// console.log(user_1);
// user_1.greet()


// const power_1 = new Power('Usama','hc@hc.com',23,'03223435','Programmer')
// console.log(power_1);
// power_1.static_power()


class User{
    #password;

    constructor(userName,email,password){
        this.userName = userName
        this.email = email
        this.#password = password

    }

    helloUser(){
        console.log(`Hello ${this.userName} your just logged in to this email ${this.email}`);     
    }

    #encryptPassword() { // 🔒 Private Method
        return this.#password.split('').reverse().join(''); // Fake encryption
    }

    showEncryptedPassword() {
        return this.#encryptPassword(); // ✅ Private method ko class ke andar access kar sakte hain
    }
}

const person_1 =  new User ('Usama Jameel' ,'usama@gmail.com','secret123') 
console.log(person_1);

const pass = person_1.showEncryptedPassword()
console.log(pass);

