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
})