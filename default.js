funAge = (age = 18) => {
    console.log(age);
}
funAge()

sum=(...params)=>{
let total = 0
for(let i of params){
    total+= i
}
console.log(total);
}
sum(31,1)