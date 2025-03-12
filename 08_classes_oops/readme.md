JavaScript ke 4 pillars Object-Oriented Programming (OOP) ke concepts hain jo software development ko efficient, reusable, scalable aur maintainable banate hain. Yeh 4 pillars hain:

Abstraction
Encapsulation
Inheritance
Polymorphism


# Abstraction (سادگی - Simplicity)
## Definition:

* Abstraction ka matlab hai sirf zaroori details show karna aur unnecessary details hide karna. Isse code simple aur easy to use hota hai.

Example:
Agar ek Car object hai, toh humein sirf start(), stop(), aur drive() functions chahiye, na ke engine ki andar ki complex functionality.

```javascript
Copy
Edit
class Car {
  start() {
    console.log("Car started");
  }
  
  drive() {
    console.log("Car is moving");
  }
}
const myCar = new Car();
myCar.start();  // Sirf zaroori details show ho rahi hain
myCar.drive();
```
# Encapsulation (Security - Data ko Hide karna)
## Definition:

*Encapsulation ka matlab hai data aur methods ko ek object ke andar bundle karna aur unnecessary access ko restrict karna. Yeh data ko secure banata hai.

Example:
Private variables aur methods ka use karke hum kisi bhi object ke andar ki implementation ko hide kar sakte hain.

```javascript
Copy
Edit
class BankAccount {
  #balance = 0; // Private variable

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // 1000
```
// account.#balance = 5000; // Error: Private variable access nahi kar sakte


# Inheritance (Reuse - Purane Code ka Dobara Istemaal)
## Definition:

* Inheritance ka matlab hai ek class dusri class ki properties aur methods ko inherit kar sakti hai. Yeh code reuse ko allow karta hai aur redundancy ko kam karta hai.

Example:
Agar ek Car class hai, toh usko use karke hum ElectricCar aur SportsCar bana sakte hain bina same code likhe.

```javascript
Copy
Edit
class Car {
  drive() {
    console.log("Car is driving");
  }
}

class ElectricCar extends Car {
  chargeBattery() {
    console.log("Battery charging...");
  }
}

const tesla = new ElectricCar();
tesla.drive();        // Parent class ka method
tesla.chargeBattery(); // Apni method
```

# Polymorphism (Flexibility - Ek Function ko Multiple Tarike se Use Karna)
## Definition:
* Polymorphism ka matlab hai same function ya method ka multiple classes mein different behavior hona. Yeh flexibility aur scalability ko improve karta hai.

Example:
Agar Car aur Bike dono start() method use karein, toh har ek ka alag behavior ho sakta hai.

```javascript
Copy
Edit
class Vehicle {
  start() {
    console.log("Vehicle is starting...");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car is starting...");
  }
}

class Bike extends Vehicle {
  start() {
    console.log("Bike is starting...");
  }
}

const myCar = new Car();
const myBike = new Bike();

myCar.start();  // "Car is starting..."
myBike.start(); // "Bike is starting..."
```

Short Definitions to Remember:
Abstraction: Sirf zaroori cheezein dikhana, baaki complexity hide karna.
Encapsulation: Data aur functions ko ek object ke andar rakhna aur secure karna.
Inheritance: Ek class ka doosri class se properties aur methods lena (reuse).
Polymorphism: Same method ka different classes mein different behavior hona.
Agar yeh concepts yaad rakhne hain, toh ek real-world example socho:

## Abstraction: Car chalane ke liye sirf start aur drive chahiye, engine ka kaam nahi pata.
## Encapsulation: Car ka engine aur fuel system private hai, sirf drive() function diya gaya.
## Inheritance: Tesla (ElectricCar) bhi ek Car hai, aur usme extra feature chargeBattery() hai.
## Polymorphism: Car aur Bike dono start hote hain, lekin alag tareeke se.
Agar kisi aur example se samajhna chaho ya aur deep explanation chahiye toh batao! 🚀







