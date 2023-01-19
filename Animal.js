export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    voice = (sound = "Louder") => {
        console.log(sound);
    }
    static sayHii() {
        console.log("Hellow");
    }
}

export class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail;
    }
    voice = (sound = "Meow") => {
        console.log(sound);
    }
}