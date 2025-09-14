let a: number[] = [1, 2, 3]; 
let b: Array<string> = ["a", "b", "c"];
let c: (string | number | boolean) = ["a", 1, true];

/* practice */
type Caterer = {
    name: string;
    address: string;
    phone: string;
};
type Seats = {
    [key: string]: string;
}
type AirPlane = {
    model: string;
    flight_number: string;
    time_of_departure: Date;
    time_of_arrival: Date;
    caterer: Caterer,
    seats: Seats;
};
type AirPlanes = AirPlane[];

let airplane: AirPlanes = [
  {
    model: "Airbus A380",
    flight_number: "A2201",
    time_of_departure: new Date(),
    time_of_arrival: new Date(),
    caterer: {
        name: "John Doe",
        address: "484, Some Street, New York",
        phone: "7867856751",
    },
    seats: {
        A1: "John Doe",
        A2: "Jane Doe",
        A3: "James Doe",
    },
  },
];
