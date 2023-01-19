const data = {
    name: "Prathmesh",
    age: 21,
    born: "India"
}
const { born, name, age } = data

console.log(born);

let array1 = ["BMW", "AUDI", "MERCEDZ", "FERRARI"]

let [c1, , , c2] = array1 //skiping position using ,
console.log(c2);

//swaping without 3 rd variable
let n1 = 10;
let n2 = 5;
[n2,n1]= [n1,n2]
console.log(n1);
console.log(n2);
