// const promise_one = new Promise((res,rej)=>{
//     let err = false
//     if(!err){
//         setTimeout(()=>{
//             console.log("Promise succesfull!");
//             res()     
//         },3000)
//     }else{
//         rej('Error!')
//     }
    
// })

// promise_one.then(()=>{
//     console.log("Promise fullfiled!");
    
// }).catch(()=>{
//     console.log("Promise rejected!");
    
// })

// new Promise((res,rej)=>{
//     let err = false
//     if(!err){
//         setTimeout(()=>{
//             console.log("Promise succesfull!");
//             res()     
//         },3000)
//     }else{
//         rej('Error!')
//     }
    
// })

// .then(()=>{
//     console.log("Promise fullfiled!");
    
// }).catch(()=>{
//     console.log("Promise rejected!");
    
// })

// const promise_two = new Promise((res,rej)=>{
//     let err = false
//     if(!err){
//         setTimeout(()=>{
//             console.log("Promise succesfull!");
//             res([
//                 {
//                 'name':'usama',
//                 'age':23,
//                 'email':'usama@example.com',
//                 'isLoggedIn':true
//                 },
//                 {
//                 'name':'shoaib',
//                 'age':26,
//                 'email':'shoaib@example.com',
//                 'isLoggedIn':true
//                 },
//                 {
//                 'name':'ahmed',
//                 'age':30,
//                 'email':'ahmed@example.com',
//                 'isLoggedIn':true
//                 },
//         ])     
//         },3000)
//     }else{
//         rej('Error 500!')
//     }
    
// })

// promise_two.then((userDetails)=>{
//     console.log("Promise fullfiled!");
//     userDetails.forEach(element => {
//         console.log(element)
//         // return element
//     })
    
// }).catch(()=>{
//     console.log("Promise rejected!");
    
// })

const promise_three = new Promise((res,rej)=>{
    let err = false
    if(!err){
        setTimeout(()=>{
            console.log("Promise succesfull!");
            res([
                {
                'name':'usama',
                'age':23,
                'email':'usama@example.com',
                'isLoggedIn':true
                },
                {
                'name':'shoaib',
                'age':26,
                'email':'shoaib@example.com',
                'isLoggedIn':true
                },
                {
                'name':'ahmed',
                'age':30,
                'email':'ahmed@example.com',
                'isLoggedIn':true
                },
        ])     
        },3000)
    }else{
        rej('Error 500!')
    }
    
})

promise_three.then((userDetails)=>{
    // userDetails.forEach(element => {
    //     console.log(element)
    //     // return element
    // })
    // console.log(userDetails);
    for (const el of userDetails) {
        console.log(el);
        
        
    }
    // return userDetails
    
})
// .then((user)=>{
//     console.log(user);
    
// })
.catch(()=>{
    console.log("Promise rejected!");
    
})