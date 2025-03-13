

let user_name = '       usama.     '

let trim_val = user_name.trim()
console.log(trim_val);
console.log(user_name);

String.prototype.trueLength = function(){
    console.log(`${this}`)
    return `${this.trim().length} `  
}

let userName = user_name.trueLength()
console.log(userName);
