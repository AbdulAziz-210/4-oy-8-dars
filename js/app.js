

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


// // 2-masala

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


// let numbers = [1, 2, 3, 4, 5, 11];

// let lastValue = numbers[numbers.length - 1];

// // Oxirgi qiymatni aniqlash va unga 1 qo'shish
// let newValue = lastValue + 1;

// // Yangi qiymatni array oxiriga qo'shish
// numbers.push(newValue);

// console.log(numbers);


// //   4-masala


// let numbers = [88, 77, 3]

// for (let  i = 1; )

// ---------------  ######  ------------------

// //   5-masala


// let array1 = [4, 5, 6, 7]

// console.log("Boshlang'ich array:", array1);

// let birinchiQiymat1 = array1[0];
// let oxirigiQiymat = array1[array1.length - 1];

// array1 [0] = oxirigiQiymat;
// array1[array1.length -1] = birinchiQiymat1;

// console.log("Almshtirilgan array:", array1);

 
//   //   6-masala


function sozlarArraygaQosh(promptSoni, array = []) {
    if (promptSoni > 0) {
        let soz = prompt("So'z kiriting:");
        array.push(soz);
        return sozlarArraygaQosh(promptSoni - 1, array);
    } else {
        return array;
    }
}

let natijaArray = sozlarArraygaQosh(6);
console.log("Natija array:", natijaArray);










/////////////////////-----------.....//////////////




// bu boshqa masalalar//////////
// ############

// let arr = []
// let result = 0

// function addNumber () {
//     let elNumber = Number(prompt("Son kirit"))
//     arr.push(elNumber)
//     if (arr.length < 4) {
//         addNumber ()
//     }
//     else {
//         for (let i = 0; i < arr.length; i++) {
//             result += arr[i]
//         }
//     }
// }
// addNumber()
// console.log(result);


