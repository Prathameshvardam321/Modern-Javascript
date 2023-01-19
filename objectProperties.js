let empdata = {
    name: "Prathmesh Vardam",
    role: "Mern Stack Developer",
    experience: "Fresher"
}


const { name, role, experience } = empdata

const defaultval = {
    name1: name,
    role1: role,
    experience1: experience
}
console.log(defaultval);

const shortobj = { name, experience, role }
console.log(shortobj);