const mongoose = require("mongoose");
const Movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
    try{
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
try{
    return await Movie.find({});
} catch (error) {
    console.log(error);
}
};

// create a delete one or delete many function
exports.deleteOne = async (Movie, titleToDelete) => {
    try {
        return Movie.deleteOne(titleToDelete);
} catch (error) {
    console.log(error);
}
};


// create an update one or update many function

exports.updateMovie = async (updateTitle, newUpdate) => {
    try {
        return Movie.updateOne(updateTitle, newUpdate);
    } catch (error) {
        console.log(error);
    }
};
