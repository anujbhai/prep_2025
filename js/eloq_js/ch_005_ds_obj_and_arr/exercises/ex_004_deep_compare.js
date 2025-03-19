(function() {
  const deep_compare = function(a, b) {
    let result = false;

    // comparing primitives/references to similar objects
    if (a === b) {
      result = true;
      console.log(`1. ${ JSON.stringify(a) } comparision with ${ JSON.stringify(b) }`, result);
      return result;
    }

    // comparing null against objects
    if (a === null || typeof a !== "object" || b === null || typeof b !== "object") {
      result = false;
      console.log(`2. ${ JSON.stringify(a) } comparision with ${ JSON.stringify(b) }`, result);
      return result;
    }

    // Compare object keys
    const keys_a = Object.keys(a);
    const keys_b = Object.keys(b);

    if (keys_a.length !== keys_b.length) {
      result = false;
      console.log(`3. ${ JSON.stringify(a) } comparision with ${ JSON.stringify(b) }`, result);
      return result;
    }

    // recursively compare props
    for (let key of keys_a) {
      if (!keys_b.includes(key)) {
        result = false;
        console.log(`4. ${ JSON.stringify(a) } comparision with ${ JSON.stringify(b) }`, result);
        return result;
      }

      if (!deep_compare(a[key], b[key])) {
        result = false;
        console.log(`5. ${ JSON.stringify(a) } comparision with ${ JSON.stringify(b) }`, result);
        return result;
      }
    }
        
    console.log(`6. ${ JSON.stringify(a) } comparision with ${ JSON.stringify(b) }`, true);

    return true;
  };

  const obj_1 = { a: 1, b: { c: 2 } };
  const obj_2 = { a: 1, b: { c: 2 } };
  const obj_3 = { a: 1, b: { c: 3 } };
  const obj_4 = obj_2;
  

  deep_compare(obj_1, obj_2); // true
  deep_compare(obj_1, obj_3); // false
  deep_compare(obj_1, obj_4); // true

  deep_compare(5, 5);
  deep_compare("5", 5);

  deep_compare(null, null);
  deep_compare(null, {});
})();

