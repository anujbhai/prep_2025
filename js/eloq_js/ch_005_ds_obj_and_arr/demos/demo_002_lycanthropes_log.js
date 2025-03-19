(function() {
  const JOURNAL = require("./journal");

  let journal = [];
  // Corelation function
  function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
  }

  function add_entry(events, squirrel) {
    JOURNAL.push({ events, squirrel });
  }

  function table_for(event, journal) {
    let table = [0, 0, 0, 0];

    for (let i = 0; i < journal.length; i++) {
      let entry = journal[i], index = 0;

      if (entry.events.includes(event)) index += 1;
      if (entry.squirrel) index += 2;

      table[index] += 1;
    }

    return table;
  }

  function journal_events(journal) {
    let events = [];

    for (let entry of journal) {
      for (let event of entry.events) {
        if (!events.includes(events)) {
          events.push(event)
        }
      }
    }

    return events;
  }

  for (let event of journal_events(JOURNAL)) {
    let correlation = phi(table_for(event, JOURNAL));
    
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(event + ":", correlation);
    }
  }

  for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
      entry.events.push("peanut teeth")
    }
  }
  console.log(phi(table_for("peanut teeth", JOURNAL)));
  // console.log(journal_events(JOURNAL));

  // console.log(table_for("pizza", JOURNAL));

  // for (let entry of JOURNAL) console.log(`${ entry.events.length } events.`);

  // console.log(phi([76, 9, 4, 1]));
})();

