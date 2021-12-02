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
            name: "placeholder",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "placeholder",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "placeholder",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "placeholder",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "placeholder",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "placeholder",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "placeholder",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "placeholder",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "placeholder",
            description: "placeholder",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "placeholder",
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