/* Using type alias for nested objects */
type Author = {
    name: string;
    age: number;
    email: string;
    readonly type: "Human" | "AI";
};
/* Using type signature for objects */
type AwardDetails = {
    name: string;
    date: Date;
};
type Awards = {
    [key: string]: AwardDetails;
};
/* Using type alias for objects */
type Post = {
    title: string;
    content: string;
    date: Date;
    author: Author;
    awards: Awards;
    category?: string; // Optional property
};

let post: Post = {
    title: "This is a blog post",
    content: "This is the content of the post.",
    date: new Date(),
    author: {
        name: "John Doe",
        age: 40,
        email: "johndoe@mail.com",
        type: "Human",
    },
    awards: {
        web: {
            name: "Web awards",
            date: new Date(),
        },
    },
    category: "tech",
};

let post2: Post = {
    title: "This is another blog post",
    content: "This is the content of the post.",
    date: new Date(),
    author: {
        name: "Jane Doe",
        age: 30,
        email: "janedoe@gmail.com",
        type: "AI",
    },
    awards: {
        web: {
            name: "Web awards",
            date: new Date(),
        },
        web3: {
            name: "Web 3",
            date: new Date(),
        },
    },
};

console.log("post title:", post.title);
console.log("post content:", post.content);
console.log("post date:", post.date.toLocaleString());
console.log("post date:", post2.title);
