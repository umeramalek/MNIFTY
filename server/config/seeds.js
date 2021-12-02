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

    
})