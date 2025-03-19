(function() {
  const SCRIPTS = require("../demos/scripts");
  // console.log(SCRIPTS.filter(s => s.direction == 'ttb'));
  // let rtl_scripts = SCRIPTS.filter(s => s.direction == 'rtl');

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
  // console.log(count_by([1, 2, 3, 4, 5, 6],  n => n > 2));

  const char_script = function(code) {
    for (let item of SCRIPTS) {
      if (item.ranges.some(([from, to]) => code >= from && code < to)) {
        return item;
      }
    }

    return null;
  };
  // console.log(char_script(121));

  const dominant_write_direction = function(text) {
    let counted = count_by(text, char => {
      let script = char_script(char.codePointAt(0));

      return script ? script.direction : null;
    }).filter(({ name }) => name !== null);

    if (counted.length === 0) return "unknown";

    return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
  };

  console.log(dominant_write_direction("Quick brown fox..."));
  console.log(dominant_write_direction("جمع اللغة"));
  console.log(dominant_write_direction("ཡིག་མགོ་ཨ་ཕྱེད"));
  console.log(dominant_write_direction("を前部要素とする複合語の形態素説明で"));
  console.log(dominant_write_direction("文意的完整性亦可能受到影響"));
  console.log(dominant_write_direction("한국어 어문 규범. 국립국어원."));
  console.log(dominant_write_direction("ᠥᠷᠭᠡᠰᠦᠲᠡᠢ ᠰᠢᠯᠪᠢ"))
})();

