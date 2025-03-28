(function() {
  const speak_line = function(line) {
    console.log(`The ${ this.type } rabbit says '${ line }'`);
  };

  let killer_rabbit = { type: "killer", speak_line };
  let junkie_rabbit = { type: "junkie", speak_line };
  let fast_rabbit = { type: "fast", speak_line };

  killer_rabbit.speak_line("No mercy!");
  junkie_rabbit.speak_line("Got more of that white stuff?");
  speak_line.call(fast_rabbit, "Gangway!!");

  // 'this' in arrow fn
  let finder = {
    find(arr) {
      return arr.some(v => v == this.value)
    },
    value: 5,
  };
  console.log(finder.find([1, 3, 5]));

  // ======= Prototype =======
  console.log(Object.getPrototypeOf({}) == Object.prototype);
  console.log(Object.getPrototypeOf(Object.prototype));

  let proto_bunny = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };

  let devine_rabbit = Object.create(proto_bunny);
  devine_rabbit.type = 'God';
  devine_rabbit.speak("Come one and come all, to me.")
})();

