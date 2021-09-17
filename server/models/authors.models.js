const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "must have a name!"],
        minLength: [3, "need at least 3 characters!"]
    },
    quote: {
        type: String,
        required: [true, "must have a quote!"],
        minLength: [3, "need at least 3 characters!"]
    },
    bookCount: {
        type: Number,
        required: [true, "must have a book count"],
        required: [true, "must be larger than 0"],
        min:0,
    }
}, {timestamps:true });

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;