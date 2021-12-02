const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new Schema({
    name: {
        type: string,
        required: true,
        trim: true
    }
});

const Category = mongoose.model('category', categorySchema);

module.exports = Category;