const Author = require("../models/authors.models");

module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then(allAuthors => res.json({ results: allAuthors }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleAuthor = (req, res) => {
	Author.findOne({ _id: req.params._id })
		.then(oneSingleAuthor => res.json({ results: oneSingleAuthor }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
    .then(newlyCreatedAuthor => res.json({ results: newlyCreatedAuthor }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingAuthor = (req, res) => {
    console.log(req.body);
    Author.findOneAndUpdate({ _id: req.params._id }, req.body, {runValidators: true})
    .then(updatedAuthor => res.json({ result: updatedAuthor }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params._id })
    .then(results => res.json({ results: results }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

