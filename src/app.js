require ("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies, deleteOne, updateMovie } = require("./movies/movieMethods");
const Movie = require ("./movies/movieModels");


const app = async (yargsObj) => {
    try{
        if (yargsObj.add) {
            await addMovie({title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director})
            console.log(await listMovies());

        } else if (yargsObj.list) {
            console.log(await listMovies());

        } else if (yargsObj.delete){ 
           let titleToDelete = {
            title: yargsObj.delete
           }
            await deleteOne(Movie, titleToDelete);
            console.log("Deleted Movie");

        } else if (yargsObj.update){
            await updateMovie({title:yargsObj.update}, {title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director});
            console.log(await listMovies());

        } else {
            console.log("Incorrect command");
        } 
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};


app(yargs.argv);