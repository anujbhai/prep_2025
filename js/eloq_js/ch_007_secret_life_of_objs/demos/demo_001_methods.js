(function() {
  const speak_line = function(line) {
    console.log(`The ${ this.type } rabbit says '${ line }'`);
  };

  let killer_rabbit = { type: "killer", speak_line };
  let junkie_rabbit = { type: "junkie", speak_line };

  killer_rabbit.speak_line("No mercy!");
  junkie_rabbit.speak_line("Got more of that white stuff?");
})();

