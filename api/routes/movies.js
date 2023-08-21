const router = require("express").Router();
const User = require("../models/User");
const Movie = require("../models/Movie");
const verify = require('../verifyToken');
const { default: mongoose } = require("mongoose");



//CREATE

router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin ) {
        const newMovie = new Movie(req.body);

        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (err) {
            res.status(500).json({err})
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});

//UPDATE

router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {

        try {
            const updatedMovie = await Movie.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedMovie);
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});

//DELETE

router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {

        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("The Movie has been deleted...");
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});

//GET

router.get("/find/:id", verify, async (req, res) => {
        try {
            const movie = await Movie.findById(req.params.id);
            res.status(200).json(movie);
        } catch (err) {
            res.status(500).json(err)
        }
});

//GET RANDOM----------for home page trailer according to movie and series

router.get("/random", /*verify,*/ async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if(type === "series"){
            movie = await Movie.aggregate([
                { $match:{ isSeries: true } },
                { $sample: { size: 1} },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match:{isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET ALL

router.get("/", verify, async (req, res)=>{
    if(req.user.isAdmin){
        try{
            const movies = await Movie.find();
            let filterMovies = []
            for (const iterator of movies) {
                console.log(iterator._id.toString())
                if(iterator._id.toString() !== "64d3500e9e11c6d9915e6531"){
                    filterMovies.push(iterator)
                }
            }
            res.status(200).json(filterMovies);
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});


router.get("/find/:id", verify, async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;