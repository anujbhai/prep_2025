(function() {
  let ages = {
    Boris: 39,
    Liang: 22,
    Julia: 62,
  };

  console.log(`Julia is ${ ages["Julia"] }`);
  console.log(`Is Jack's age known? ${ "Jack" in ages }`);
  console.log(`Is toString's age known? ${ "toString" in ages }`);

  // avoiding using plain objects
  // approach 1
  console.log("toString" in Object.create(null)); // false

  // when using obj a map is not allowed
  // approach 2
  let ages_map_obj = new Map();
  ages_map_obj.set("Boris", 39);
  ages_map_obj.set("Liang", 22);
  ages_map_obj.set("Julia", 62);
  console.log(`Julia is ${ ages_map_obj.get("Julia") }`);
  console.log(`Is Jack's age known? ${ ages_map_obj.has("Jack") }`);
  console.log(`Is toString's age known? ${ ages_map_obj.has("toString()") }`);

  // 
  console.log(Object.hasOwn({ x: 1 }, "x"));
  console.log(Object.hasOwn({ x: 1 }, "toString"));
})();

