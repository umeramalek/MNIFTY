const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: "Cats" },
        { name: "Dogs" },
        { name: "Coffee" },
        { name: "Mammals" },
        { name: "Landscapes"},
        { name: "People" }
    ]);

    console.log("categories seeded");

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: "Delicate Arch",
            description: "A picture of Delicate Arch at Arches National Park",
            image: "https://imgur.com/pms2HOc.png",
            price: 50,
            category: categories[4]._id
        },
        {
            name: "Banana Cat",
            description: "A cat in a banana bed",
            image: "https://imgur.com/R112jGs.png",
            price: 40,
            category: categories[0]._id
        },
        {
            name: "Vino Dog",
            description: "A sweet dog named Vino",
            image: "https://imgur.com/saFBZme.png",
            price: 60,
            category: categories[1]._id
        },
        {
            name: "Sam and Bo",
            description: "'Sami' and his dog bo JUST VIBING at their place of residence, absolutely kickin' it back",
            image: "https://imgur.com/ZgUkANm.png",
            price: 170,
            category: categories[1]._id
        },
        {
            name: "Farley",
            description: "The one and only, Farley",
            image: "https://imgur.com/ktdbq6w.png",
            price: 1000,
            category: categories[0]._id
        },
        {
            name: "Maya Cat",
            description: "Emily's cat Maya",
            image: "https://imgur.com/0Frc6Vn.png",
            price: 100,
            category: categories[0]._id
        },
        {
            name: "Catventure",
            description: "placeholder",
            image: "https://imgur.com/Ne4TEpU.png",
            price: 180,
            category: categories[0]._id
        },
        {
            name: "Atlas",
            description: "A specially minted NFT for Catventure",
            image: "https://imgur.com/vApXLGi.png",
            price: 120,
            category: categories[0]._id
        },
        {
            name: "Coffee",
            description: "Cafe' Mocha",
            image: "https://imgur.com/oP4wNRj.png",
            price: 90,
            category: categories[2]._id
        },
        {
            name: "Bison",
            description: "Lone Bison at Yellowstone National Park",
            image: "https://imgur.com/ASbrHGD.png",
            price: 70,
            category: categories[3]._id
        },
        {
            name: "Two Bison",
            description: "Two Bison at Yellowstone National Park",
            image: "https://imgur.com/sleK1G2.png",
            price: 75,
            category: categories[3]._id
        },
        {
            name: "Cleo",
            description: "Furry predator named Cleopatra",
            image: "https://imgur.com/dIQCakf.png",
            price: 120,
            category: categories[0]._id
        },
        {
            name: "Schturman",
            description: "Cartoonized NFT of a software developer",
            image: "https://imgur.com/ndUOP1P.png",
            price: 10,
            category: categories[5]._id
        }
    ]);

    console.log("products seeded");

    await User.deleteMany();

    await User.insertMany({
        firstName: "May",
        lastName: "Faucher",
        email: "mayyfaucher@gmail.com",
        password: "password123"
    },
    {
        firstName: "Umera",
        lastName: "Malek",
        email: "umeramalek796@gmail.com",
        password: "password123"
    },
    {
        firstName: "Tyler",
        lastName: "Yeager",
        email: "wow_d2@hotmail.com",
        password: "password123"
    });

    // await User.create({
    //     firstName: "May",
    //     lastName: "Faucher",
    //     email: "mayyfaucher@gmail.com",
    //     password: "password123"
    // }),

    // await User.create({
    //     firstName: "Umera",
    //     lastName: "Malek",
    //     email: "umeramalek796@gmail.com",
    //     password: "password123"
    // }),

    // await User.create({
    //     firstName: "Tyler",
    //     lastName: "Yeager",
    //     email: "wow_d2@hotmail.com",
    //     password: "password123"
    // });

    console.log("users seeded");

    process.exit();
});