const express = require('express');
const router = express.Router();
const People = require('../models/People');

//Post request
router.post('/', async(req, res) => {
    const people = new People({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        complexion: req.body.complexion,
        height: req.body.height,
        race: req.body.race
    });
    try {
        const savedPost = await people.save()
        res.json(savedPost);
    }catch(err) {
        res.json({ message: err });
    }
});

//Get request
router.get('/', async(req, res) => {
    try {
        const peoples = await People.find();
        res.json(peoples);
    }catch(err) {
        res.json({ message: err });
    };
});


//Delete request
router.delete('/:peopleId', async(req, res) => {
    try {
        const deletePost = await People.deleteOne({ _id: req.params.peopleId });
        res.json(deletePost);
    }catch(err) {
        res.json({ message: err });
    }
});













module.exports = router;