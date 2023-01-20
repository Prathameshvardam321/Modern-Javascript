// // Initiate counter
// let counter = 0;

// // Function to increment counter
// function add() {
//   counter += 1;
//   console.log(counter);
// }

// // Call add() 3 times
// add();
// add();
// add();
function sumTwo(a, b) {
  console.log(a, b);
return function(){
return a+b;
}
}

let a = sumTwo(12,23)
console.log(a());


let k =  new Promise((resolve, reject) => {
  resolve(12)
})
