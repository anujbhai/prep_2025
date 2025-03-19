(function () {
  console.log("coconuts".slice(4, 7));
  console.log("coconut".indexOf("u"));
  
  // Rest params
  function max(...nums) {
    let result = -Infinity;
    
    for (let num of nums) {
      if (num > result) {
        result = num;
      }
    }

    return result;
  }

  console.log(max(4, 1, 9, -2));

  let numbers = [5, 1, 7];
  console.log(max(...numbers));

  let words = ['never', 'fully'];
  console.log(["will", ...words, "understand"]);

  let coords = { x: 10, y: 0 };
  console.log({ ...coords, y: 5, z: 100 }) // overriden value

  // the Math object
  function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    
    return { x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
  }
  console.log(randomPointOnCircle(2));

  // generate random whole number
  console.log(Math.floor(Math.random() * 10));

  // Destructuring
  function phi(n00, n01, n10, n11) {
    return (n11 * n00 - n10 * n01) /
      Math.sqrt((n10 + n11) * (n00 + n01) *
                (n01 + n11) * (n00 + n10));
  }

  let { name } = { name: 'Tanhaji', age: 23 };
  console.log(name);

  // optional property access
  function city(obj) {
    return obj.address?.city;
  }

  console.log('City name:', city({ address: { city: "Pune" } }));
  console.log('City name:', city({ name: "Mumbai" }));

  console.log("String".notAMethod?.());
  console.log({}.arrayProp?.[0]);

  // JSON
  const squirrel = {
    name: "Chip",
    hazelnutsCollected: 100
  };

  let str = JSON.stringify(squirrel);

  console.log("convert to str:", str);
  console.log(JSON.parse(str).name, typeof JSON.parse(str).name);
})();



