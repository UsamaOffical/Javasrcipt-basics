
// stack memory  ------> copy value
// let myName = 'Usama'
// let newName = myName

// newName = "Usama jameel 123"
// console.log(myName);



// heap memory -----> reference value
let user = {
    name :'usama',
    age : 23,
    email:'usama@example.com',
}

let userTwo = user

userTwo.email = 'usamaJameel@example.com'
userTwo.age = 22

console.table([user,userTwo])