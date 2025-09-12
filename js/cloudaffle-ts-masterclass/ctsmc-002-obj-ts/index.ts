/* Objects and Union Types */
// type Dog = {
//     name: string;
//     barks: boolean;
//     wags_tail: boolean;
// };

// type Cat = {
//     name: string;
//     purrs: boolean;
// };

// type DogAndCatUnion = Dog | Cat;

// let dog: DogAndCatUnion = {
//     name: "Buddy",
//     barks: true,
//     wags_tail: true,
// };
// let cat: DogAndCatUnion = {
//     name: "Bella",
//     purrs: true,
// };
// let hybrid_animal: DogAndCatUnion = {
//     name: "Brutus",
//     barks: true,
//     wags_tail: true,
//     purrs: true,
// };

/* Discriminating union */
// type network_loading_state = {
//     state: "loading";
// };

// type network_failed_state = {
//     state: "failed";
//     code: number;
// };

// type network_success_state = {
//     state: "success";
//     response: {
//         title: string;
//         duration: number;
//         summary: string;
//     };
// };

// type network_state =
//     network_loading_state
//     | network_failed_state
//     | network_success_state;

// function logger(state: network_state) {
//     switch(state.state) {
//         case "loading":
//             return "Loading ..";
//         case "failed":
//             return `Error ${state.code}`;
//         case "success":
//             return `Downloading ${state.response.title} response`;
//     }
// }

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
let airplane: AirPlane = {
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
};
