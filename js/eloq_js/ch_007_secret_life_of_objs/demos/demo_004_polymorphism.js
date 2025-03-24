class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${ this.type } rabbit says '${ line }'`);
  }
}

let killer_rabbit = new Rabbit('killer');
killer_rabbit.speak('No mercy!');

Rabbit.prototype.toString = function() {
  return `a ${ this.type } rabbit`;
};
console.log(String(killer_rabbit));

// The forEach array prototye interface
Array.prototype.forEach.call({
  length: 2,
  0: "A",
  1: "B"
}, el => console.log("Element:", el));

