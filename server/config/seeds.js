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
            description: "A picture of Delicate Arch at Arches National Park",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Banana Cat",
            description: "A cat in a banana bed",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Vino Dog",
            description: "A sweet dog named Vino",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Sam and Bo",
            description: "'Sami' and his dog bo",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Farley",
            description: "The one and only, Farley",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Maya Cat",
            description: "Emily's cat Maya",
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
            description: "A specially minted NFT for Catventure",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Coffee",
            description: "Cafe' Mocha",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Bison",
            description: "Lone Bison at Yellowstone National Park",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Two Bison",
            description: "Two Bison at Yellowstone National Park",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Cleo",
            description: "Furry predator named Cleopatra",
            image: "placeholder",
            price: "placeholder",
            category: "placeholder"
        },
        {
            name: "Weirdo",
            description: "Cartoonized NFT of a software developer",
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