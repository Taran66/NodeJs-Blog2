const express = require('express')
const router = express.Router();

//Route
router.get('', (req, res) => {
    const locals = {
        title: "Nodejs blog",
        description: "Simple Blog created with Nodejs, Express and MongoDb"
    }


    res.render('index', {  locals })
});

router.get('/about', (req, res) => {
    res.render('about')
});
router.get('/contact', (req, res) => {
    res.render('contact')
});

module.exports = router;