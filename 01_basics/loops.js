

// +++++++++++++++++++++++++++++  for loop ++++++++++++
// let _name = ["Usama","Ahmed","Shoaib","Awais","Saad","Hassan"]
// for(let i = 0 ; i < _name.length ; i++){ // for loop mai agr array ko itrate karna hai to array.length likhna hoga
//     console.log(_name[i]);
// }


// +++++++++++++++++++++++++++++  while loop ++++++++++++
// let _name = ["Usama","Ahmed","Shoaib","Awais","Saad","Hassan"]
// let i = 0
// while ( i < _name.length ){
    //     console.log(_name[i])
    //     i++
// }
    
    
 // +++++++++++++++++++++++++++++  Do while loop ++++++++++++
 
 // let _name = ["Usama","Ahmed","Shoaib","Awais","Saad","Hassan"]
 // let i = 0
 // do{
    //     console.log(_name[i])
    //     i++
// } while( i < _name.length )
    
    
    
    // +++++++++++++++++++++++++++++  for of loop ++++++++++++ this use for arrays
    // let str = "Usama jameel"
    
    // let arr = ["Usama","Ahmed","Shoaib","Awais","Saad","Hassan"]
    // for( let val of arr){ // isme hume array.length likhne ki zarorat ni hai
    //     console.log(val);  
    // }
    
    
    // +++++++++++++++++++++++++++++  for in loop ++++++++++++ this use for ojects
let obj = {
    _name :'usama',
    age : 23,
    phone : 2334435,
    is_student : true,
}

for (const key in obj) {
    console.log(`key =  ${key} --> val = ${obj[key]}`);  // for in se hum obj ki key ko acces kar sakte hai alag or obj[key] pas kar k val bhi acces kar sakte hai
 }

// for (let i = 0 ; i <= 100 ; i++ ){
//     if( i%2 == 0){
//         console.log(i ,' IS EVEN ' );
//     }
//     else{

//         console.log(i ,' IS ODD ' );
        
//     }
// }

let usr_num = prompt("Guess a game number : ")
let game_num = 3

while (Number(usr_num) !== game_num){
    
   usr_num = prompt("You enter a wrong number : try again")
    

}
alert("Congratulation you enter a right number!");


