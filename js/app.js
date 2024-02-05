


// let number = 5;

// function addNumber () {
//     return number += 5
// }

// console.log(addNumber());
// console.log(number);



//////////////  Pure function        ////////////////




// function addNumber () {
//     let number = 5;
//     return number += 5
// }

// console.log(addNumber());





// let arr = [2, 3, 5, 7]
// let cars = [
//     {mark: "Mercedes-Benz", year:2005, price: "15.000$"},
//     {mark: "Toyota", year:2012, price: "30.000$"},
//     {mark: "Lexus", year:2023, price: "80.000$"}
// ]

// let carss = { mark: "Mercedes-Benz", year:2005, price: "15.000$"}

// const newObj = Object.create(carss)
// console.log(newObj.price);



// let obj = { mark: "Mercedes-Benz", year:2005, price: "15.000$"}

// console.log(Object.entries(obj));



// for (let [index, value] of Object.entries(cars)) {
//     console.log(index);
// }






function yigindi (n) {
    let summ = 0;
    for ( let i = 0; i <= n; i++ ) {
        summ += i;
    }
    return summ
}
console.log(yigindi(10));












// uy ishi


// 1-masala


// let person = {
//     name : "Abdulloh", 
//     age : 19,
//     jop : "Logistic company",
//     interested: "game",
//     hobby : "sleep",
//     number : "+998944683325",
//     username : "AU"
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));


// 2-masala

// const person1 = {
//     name : "Abdulloh",
//     age : 19
// }
// const person2 = {
//     hobby : "Voleybol",
//     interested: "Sleep"
// }

// console.log(Object.assign(person1, person2));


//  //  3-masala

// let arr = [4, 5, 7]

let numbers = [1, 2, 3, 4, 5];
let lastValue = numbers[numbers.length - 1];

// Oxirgi qiymatni aniqlash va unga 1 qo'shish
let newValue = lastValue + 1;

// Yangi qiymatni array oxiriga qo'shish
numbers.push(newValue);

console.log(numbers); // Natijada oxirida [1, 2, 3, 4, 5, 6]







// let num = [3, 9, 5, 10]

// for (let i =0; i < num.length; i++) {
//     if (num [i] % 2 ==0)
// }
