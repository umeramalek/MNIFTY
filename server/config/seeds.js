const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: "Cats" },
        { name: "Dogs" },
        { name: "Reptiles" },
        { name: "Birds" },
        { name: "Insects" },
        { name: "Landscapes"},
        { name: "People" }
    ]);

    console.log("categories seeded");

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: "Delicate Arch",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Banana Cat",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Vino Dog",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Sam and Bo",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Farley",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Maya Cat",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Catventure",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Atlas",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Coffee",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Bison",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Two Bison",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Cleo",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Weirdo",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        }
    ]);

    console.log("products seeded");

    await User.deleteMany();

    await User.create({
        firstName: "May",
        lastName: "Faucher",
        email: "mayyfaucher@gmail.com",
        password: "password123",
        orders: [
            {

            }
        ]
    });

    await User.create({
        firstName: "Umera",
        lastName: "Malek",
        email: "umeramalek796@gmail.com",
        password: "password123",
        orders: [
            {

            }
        ]
    });

    await User.create({
        firstName: "Tyler",
        lastName: "Yeager",
        email: "wow_d2@hotmail.com",
        password: "password123",
        orders: [
            {

            }
        ]
    });

    console.log("users seeded");

    process.exit();
});