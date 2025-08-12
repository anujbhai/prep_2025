export type User = {
  first: string;
  last: string;
  age: number;
}

export type SortOrder = "asc" | "desc";

const users: User[] = [
  {
    first: "John", last: "Doe", age: 40
  },
  {
    first: "Jaco", last: "Postarious", age: 30
  },
  {
    first: "Julien", last: "Lage", age: 30
  },
  {
    first: "Jimmy", last: "Hendrix", age: 30
  },
];

export function fetchUsers(order: SortOrder): Promise<User[]> {
  return new Promise((resolve) => {
    order === "desc" ? resolve(users.slice(0).reverse()) : resolve(users);
  });
};

export function fetchUser(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    const user = users[id];

    if (user === undefined) {
      reject('User ${id} not found');
    } else {
      resolve(user);
    }
  });
};

