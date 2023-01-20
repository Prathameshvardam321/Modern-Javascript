const fruits = ["Banana", "Orange", "Apple", "Mango", "Avacado"];
poped
let poped = fruits.pop();
console.log(fruits);
console.log(poped, "removed last");

//shift
let firstEle = fruits.shift()
console.log(firstEle, "removed first");
console.log(fruits);

//unshift
fruits.unshift("Lemon");
console.log(fruits);
//push
let pushEle = fruits.push("Kiwi");
console.log("Kiwi", "Added Last");
console.log(fruits);

//concat
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

fruits[fruits.length] = "Onion"
// console.log(fruits);

////splice
let splice = fruits.splice(0, 2)
console.log(splice);
console.log(fruits);
const fruits = ["Banana", "Orange", "Apple", "Mango", "Avacado"];
let slice1 = fruits.slice(2)
console.log(slice1);
const citrus = fruits.slice(1, 4);
console.log(citrus);


//Array iteration

const fruits = ["Banana", "Orange", "Apple", "Mango", "Avacado"];
fruits.forEach(x => console.log(x))

const numbers = [23, 5549, 46, 5, 24, 521, 42]
numbers.filter(x => x % 2 == 0).forEach(x => console.log(x, "Even"))
numbers.sort((a, b) => { return a - b }).forEach(x => console.log(x))
const list = [81, 9, 1, 1434]
list.map(Math.sqrt).forEach(x => console.log(x))
//Array Objects
const ob1 = [
    {
        name: "Prathmesh Vardam",
        role: "Developer",
        techstack: "Nodejs"
    },
    {
        name: "Sarvesh Pednejar",
        role: "Developer",
        techstack: "SpringBoot"
    },
    {
        name: "Romil Ghadage",
        role: "Developer",
        techstack: "ReactJS"
    }

]
ob1.filter(x => x.techstack == "SpringBoot").forEach(x => console.log(x.name))
