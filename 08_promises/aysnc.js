
// async function async_func() {
//     const res = await fetch('https://api.github.com/users/usamaoffical')

//     const data = await res.json()
//     console.log(data.bio); 
// }
// async_func()

// fetch('https://api.github.com/users/usamaoffical')
// .then((response)=>{
//     return response.json()   
// })
// .then((data)=>{
//     console.log(data);   
// })
// .catch((err)=>{
//     console.log(err); 
// })

function _name() {
    setTimeout(() => {
        console.log('Usama jameel');
    }, 1000)
}

_name()
console.log('hello');

async function async_func() {
        try {
            const res = await fetch('https://api.github.com/users/usamaoffical')
            const data = await res.json()
            // console.log(data.bio);
            console.log(data);

        } catch (error) {
            console.log(error)
        }
}
async_func()