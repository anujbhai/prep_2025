(function() {
  class Group {
    constructor() {
      this.members = [];
    }

    add(val) {
      if (!this.has(val)) {
        this.members.push(val);
      }
    }

    delete(val) {
      this.members = this.members.filter(member => member !== val);
    }

    has(val) {
      return this.members.includes(val);
    }

    static from(iterable) {
      let group = new Group();

      for (let value of iterable) {
        group.add(value);
      }

      return group;
    }

    // Custom iterator implementation
    [Symbol.iterator]() {
      let index = 0;
      let members = this.members;

      return {
        next() {
          if (index < members.length) {
            return { value: members[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  }

  let group1 = Group.from([10, 20, 30, 20]);
  console.log(group1.has(10));
  console.log(group1.has(40));

  group1.add(40);
  console.log(group1.has(40));

  group1.delete(20);
  console.log(group1.has(20));
  console.log("Group 1", group1);

  let group2 = Group.from([100, 250, 600, 1200]);

  for (let val of group2) {
    console.log(val);
  }
  console.log("Group 2", group2);
})();

