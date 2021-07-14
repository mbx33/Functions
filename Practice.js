
// let parts = ['shoulders', 'knees'];
// let lyrics = ['head', ...parts, 'and', 'toes'];
// console.log(lyrics);

//         let arr = [1, 2, 3];
//             let arr2 = [...arr]; 

//             arr2.shift();
//             console.log(arr2);

// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// let arr3 = [6, 7, 8];

// // arr1 = arr1.concat(arr2);
//     // console.log(arr1);


// // arr1 = [...arr1, ...arr2];
// //     console.log(arr1);    

// arr1 = [...arr1, ...arr2, ...arr3];
//         console.log(arr1);  


// let wallet = 50;

// function buyStuff(item1, item2, item3) {
//     return item1 + item2 + item3
// }

// wallet -= buyStuff(5.05, 12.88, 11.12)
// console.log(wallet);

function rollDice(){
    let possibleRolls =[1,2,3,4,5,6];
    let randomNumber = Math.floor(Math.random() *
    possibleRolls.length)
    return possibleRolls[randomNumber]
  }
  
  let firstRoll = rollDice();
  let secondRoll = rollDice();
  
  function diceMultiplier(){
   let firstRoll = rollDice()
   let secondRoll = rollDice()
    return firstRoll + secondRoll;
  }
  
  let multipliedNumber = diceMultiplier()
  console.log(multipliedNumber)


  //function declaration 
//   function myFunc(parameter){
//       return paramater  
//   }

//   //function expression
//   const myFunc  = function(parameter){
//       return parameter 
//   }