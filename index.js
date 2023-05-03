
          //  document.getElementById("count-el").innerText =5 


/*function increment(){
    console.log("button was clicked")
    
}
  increment()*/
//   let lap1 = 1
//   let lap2 = 2
//   let lap3 = 3
//   function lapsum(){
//     console.log(lap1+lap2+lap3)
//   }
//    lapsum()
// **********to create a inc function ************//
// let lap = 0
// function inc(){
//     lap=lap+1
    
// }
// inc()
// inc()
// inc()

// console.log(lap)


let countEl= document.getElementById("count-el")
let saveEl= document.getElementById("save-el")
let total= document.getElementById("Total")

console.log(countEl)

let count = 0

function increment(){
  count += 1;
    
        countEl.innerText = count
}
console.log(count)
// 1.create a function,save(), which logs out the count when called

function save(){
let countStr =   count  +  " - "

saveEl.textContent += countStr
countEl.textContent  = 0
count = 0
}