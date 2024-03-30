// // Function
// function myfunction(){
//     console.log("Avinash Udata");
//     console.log("Im in Solapur");
// }
// myfunction();  


// function myPara(msg){ 
//     //Parameter --> input    
//     console.log(msg)
// }
// myPara("I Love JS"); // Argument

// function sum(x,y){
//     console.log(x+y);
// }

//Practice program

// function myfunction(str){
//     let count = 0;
//     for (const char of str)
//     {
//         if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
//     {
//     count++;
//     console.log(char);
// }
//     }
// console.log(count);
// }

// let array = [1,2,3,4,5];

// array.forEach((avi, idx) => {
//     console.log(avi, idx);
// });

let marks = [52,87,92,99,85];

let newArr = marks.filter((val) =>{
    return val >90; 
 
})
console.log(newArr);