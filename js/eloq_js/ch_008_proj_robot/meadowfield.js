(function() {
  const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
  ];

  function build_graphs(edges) {
    let graph = Object.create(null);

    function add_edge(from, to) {
      if (from in graph) {
        graph[from].push(to);
      } else {
        graph[from] = [to];
      }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
      add_edge(from, to);
      add_edge(to, from);
    }

    return graph;
  }

  const road_graph = build_graphs(roads);

  function run_robot(state, robot, memory) {
    
  }

  class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }

    move(destination) {
      if (!road_graph[this.place].includes(destination)) {
        return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.parcels != this.place) return p;

          return { place: destination, address: p.address }
        }).filter(p => p.place != p.address);

        return new VillageState(destination, parcels);
      }
    }
  }

  let first = new VillageState("Post Office", [{ place: "Post Office", address: "Alice's House" }]);
  let next = first.move("Alice's House");

  console.log(next.place);
  console.log(next.parcels);
  console.log(first.place);
})();

