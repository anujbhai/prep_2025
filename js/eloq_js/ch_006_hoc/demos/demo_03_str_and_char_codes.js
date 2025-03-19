(function() {
  const SCRIPTS = require("./scripts");
  
  const print_emoji = function() {
    let horse_shoe = "🐴 👞";

    console.log(horse_shoe.length);
    console.log(horse_shoe[0]);
    console.log(horse_shoe.charCodeAt(0));
    console.log(horse_shoe.codePointAt(0));

    let nail_file = "💅 📄";

    for (let item of nail_file) {
      console.log(item);
    }
  };

  const count_by = function(items, group_name) {
    let counts = [];

    for (let item of items) {
      let name = group_name(item);
      let known = counts.find(c => c.name === name);

      if (!known) {
        counts.push({ name, count: 1 });
      } else {
        known.count++;
      }
    }

    return counts;
  };

  // STRINGS
  const char_script = function(code) {
    for (let item of SCRIPTS) {
      if (item.ranges.some(([from, to]) => code >= from && code < to)) {
        return item;
      }
    }

    return null;
  };

  // RECOGNIZING TEXT
  const text_script = function(text) {
    let scripts = count_by(text, char => {
      let script = char_script(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({ name }) => name != "none");

    let total = scripts.reduce((n, { count }) => n + count, 0);

    if (total == 0) return "No scripts found!";

    return scripts.map(({ name, count }) => {
      return `${ Math.round(count * 100 / total)}% ${ name }`;
    }).join(", ");
  };

  console.log(text_script('中国邮政 已收取邮件"woof", 送交境外进口海关"тяв"'));
  
  console.log(count_by([1, 2, 3, 4, 5, 6],  n => n > 2));
  print_emoji();
})();

