const User = require("./models/user");
const Message = require("./models/message");
const db = require("./db");

async function addUsers() {
    await db.query("DELETE FROM messages");
    await db.query("DELETE FROM users");

    await User.register({
        username: "foo",
        password: "password",
        first_name: "Test",
        last_name: "User",
        phone: "555-555-5555"
    });

    await User.register({
        username: "bar",
        password: "password",
        first_name: "Test2",
        last_name: "User2",
        phone: "444-444-4444"
    });

    console.log("Users added!");
}


async function addMessages() {
    await Message.create({
        from_username: "foo",
        to_username: "bar",
        body: "Hello"
    });

    await Message.create({
        from_username: "bar",
        to_username: "foo",
        body: "Hi"
    });

    await Message.create({
        from_username: "foo",
        to_username: "bar",
        body: "How are you?"
    });

    await Message.create({
        from_username: "bar",
        to_username: "foo",
        body: "I am good, how are you?"
    });

    console.log("Messages added!");
}

async function main() {
    await addUsers();
    await addMessages();
    await db.end();

    console.log("Tables seeded!");
}

main();