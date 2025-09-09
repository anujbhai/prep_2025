/* Using type alias for nested objects */
type Author = {
    name: string;
    age: number;
    email: string;
};
/* Using type alias for objects */
type Post = {
    title: string;
    content: string;
    date: Date;
    author: Author;
};

let post: Post = {
    title: "This is a blog post",
    content: "This is the content of the post.",
    date: new Date(),
    author: {
        name: 'John Doe',
        age: 40,
        email: 'johndoe@mail.com',
    },
};

let post2: Post = {
    title: "This is another blog post",
    content: "This is the content of the post.",
    date: new Date(),
    author: {
        name: 'Jane Doe',
        age: 30,
        email: 'janedoe@gmail.com',
    },
};

console.log("post title:", post.title);
console.log("post content:", post.content);
console.log("post date:", post.date.toLocaleString());
console.log("post date:", post2.title);
