// let arr = ["usama",'ahmed','awais','shoaib']

// let arr = [
//     {
//         name:'usama',
//         age:23,
//         phone:343455,
//         city:'karachi',
//         lang:'python'
//     },
//     {
//         name:'shoaib',
//         age:26,
//         phone:3434543,
//         city:'karachi',
//         lang:'java'
//     },
//     {
//         name:'ahmed',
//         age:29,
//         phone:34345588,
//         city:'karachi',
//         lang:'python'
//     },
//     {
//         name:'awais',
//         age:28,
//         phone:3434555,
//         city:'karachi',
//         lang:'java'
//     },
// ]

let users = [
    {
        name:'usama',
        age:23,
        phone:343455,
        city:'karachi',
        lang:'python',
        id:1,
        student: true
    },
    {
        name:'shoaib',
        age:26,
        phone:3434543,
        city:'karachi',
        lang:'java',
        id:2
    },
    {
        name:'ahmed',
        age:29,
        phone:34345588,
        city:'karachi',
        lang:'python',
        id:3
    },
    {
        name:'awais',
        age:28,
        phone:3434555,
        city:'karachi',
        lang:'java',
        id:4
    },
]


let usr = users.map((user) => user )

let std = usr.filter((user)=> user.student === true)

console.log(std);


// arr.map((val)=>{
//     console.log(val.age);   
// })
// const lang_py = arr.filter((val)=> val.lang === 'python' && val.age >= 28)

// lang_py.map((val)=>{
//     console.log(val.name);
// })
