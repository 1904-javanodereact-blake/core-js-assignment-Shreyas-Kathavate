/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
//object literal notation:
let anime = {
    name: `Goku`,
    age: 167,
    skills: `off the charts`
}
console.log(anime);
anime.hair = "super spiky";
console.log(anime);
// constructor function:
function harryPotter(name, skill, age) {
    this.name = name;
    this.skill = skill;
    this.age = age;
}
let Weasley = new harryPotter(
    `Ronald`,
    `Okay at spells`,
    23);
console.log(Weasley);
// es6 class
class onePiece {
    constructor(name, skills, age) {
        this.name = name;
        this.skills = skills;
        this.age = age;
    }
}
let Zoro = new onePiece(`Roronoa`, `Greatest Swordsman`, 22);
console.log(Zoro);