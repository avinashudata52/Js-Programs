// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("The button is clicked");
//     let a= 20;
//     a++;
//     console.log(a);
// }

// let btn2 = document.querySelector("#btn2");

let btnmode = document.querySelector("#mode"); 
let body = document.querySelector("body");
let currmode = "light";

btnmode.addEventListener("click", () => {
if(currmode === "light"){
    currmode ="dark";
    body.classList.add("dark");
    body.classList.remove("light");
} else{
    currmode = "light";
    body.classList.add("light");
    body.classList.remove("dark");

}
console.log(currmode);
});


