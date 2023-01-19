let developer1 = {
    name: "Sarvesh",
    skills: {
        primary: 'Full Stack',
        secondary: 'Development'
    }
}
// let developer2 = {...developer1}
let developer2 = JSON.parse(JSON.stringify(developer1))
developer2.name = "Romil"
developer2.skills.primary = "Frontend"
console.log(developer1);
console.log(developer2);