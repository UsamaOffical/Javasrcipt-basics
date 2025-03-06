
let usrItem = [
    {
        id:1,
        item_name:'mobile-cover',
        price:300
    },
    {
        id:2,
        item_name:'handfree',
        price:799
    },
    {
        id:3,
        item_name:'lipstick',
        price:300
    },
    {
        id:4,
        item_name:'watch',
        price:900
    },
    {
        id:5,
        item_name:'watch',
        price:1100
    },
    {
        id:6,
        item_name:'watch',
        price:12200
    },
]

let itemPrice = usrItem.map((pr) => pr.price  ).reduce((acc,crr)=> {return acc + crr},0 )
console.log(`Your total price is ${itemPrice}` );


// let items = [100,240,350,900,450,599] 

// let total_amount = items.reduce((acc,crr)=>{
//      let total = acc + crr
//      return total
// },0)

// console.log(`Total amount is = RS, ${total_amount}.0`);
