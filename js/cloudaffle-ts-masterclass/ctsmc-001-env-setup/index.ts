/* Strings and number */
// var firstname: string = "John";
// let age: number = 32;
// let students: number = 32;
// let students_as_strings: string = students.toString();
// let string_to_number: number = parseInt("1985");

// console.log("first name:", firstname, typeof firstname);
// console.log("students as strings:", students_as_strings, typeof students_as_strings);
// console.log("string to number:", string_to_number, typeof string_to_number);

/* Boolean */
// let student: boolean = true;
// let minimum_age: boolean = age >= 6 ? true : false;

// console.log(student ? "is student" : "not student");
// console.log(minimum_age ? "is eligible" : "not eligible");

/* null and undefined */
// let user: undefined;
// console.log("user", user);

// let user_role: null;
// user_role = null;
// console.log("user role:", user_role);

// console.log("user role === user", user === user_role);

// console.log("user (undefined) type:", typeof user);
// console.log("user role (null) type:", typeof user_role);

// if (!user_role) {
//     console.log("condition with user role is true.");
// }

// if (!user) {
//     console.log("condition with user is true.");
// }

/* BigInt */
// let safe_number = Number.MAX_SAFE_INTEGER;
// console.log("safe number:", safe_number);

// const safe_plus_1 = safe_number + 1;
// const safe_plus_2 = safe_number + 2;

// console.log("safe plus one:", safe_plus_1);
// console.log("safe plus two:", safe_plus_2);

// let large_num: bigint = BigInt(safe_plus_2);
// console.log("large number", large_num);

// let big_num: bigint = 123456789n;

// let big_exp: bigint = large_num - big_num;
// console.log("big expression output:", big_exp);

/* Symbol */
// let id: symbol = Symbol(1234);
// let alphabetic_id = Symbol("id");

// let user = {
//     [id]: 1234, // private key, not accessible via 'user.id'
//     name: "Mark",
//     getId () {
//         return this[id];
//     }
// };

// console.log("user name:", user.name);
// console.log("get id:", user.getId());
// console.log("id:", id);

/* Practice */
// let message: string = "Hello, TypeScript";
// let age: number = 42;
// let is_student: boolean = true;
// let fetched: null = null;
// let user: undefined = undefined;
// let large_number: bigint = 9007199254740991n;
// let unique: symbol = Symbol("unique_symbol");

/* unknown type */
// function multiply_by_two(num: unknown) {
//     if (typeof num !== "number") {
//         return "Please provide a valid number";
//     }

//     return num * 2;
// }
// console.log(multiply_by_two(4));
// console.log(multiply_by_two("4"));

/* union type */
// type StringOrUndefined = string | undefined;

// function print(input: StringOrUndefined) {
//     if (input) {
//         console.log(input);
//     } else {
//         console.log("Please input something to print");
//     }
// }
// print();
// print("Hello");

/* Conditional types */
// type CustomDate = Date;
// type CustomString = string;

// type TrueString = CustomString extends string
//     ? true
//     : false;
// type DateAssignment = CustomDate extends Date
//     ? Date
//     : undefined;

/* never: the most strict type (mostly used in case of throwing errors where process never completes) */
// const throw_error = (err_message: string) => {
//     throw new Error(err_message);
// };

/* Type casting */
// let str_val = <string>"John";

// type User = {
//     name: string;
//     email: string;
// };
// const user = {
//     name: str_val,
//     email: "john@mail.com"
// };

// function fetch_user() {
//     return user as User;
// }
// const fetched_user = fetch_user();
