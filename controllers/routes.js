var express = require('express');
var router = express.Router();
var taco = require('../models/taco.js');

//  Basic route
router.get('/', function(req, res){
    taco.all(function(taco_data){
        console.log(taco_data);
        res.render('index', {taco_data});
    })
})

router.put('/tacos/update', function(req, res){
    taco.update(req.body.taco_id, function(result){
        console.log(result);
        res.redirect('/');
    })
})

router.post('/tacos/created', function(req, res){
    taco.create(req.body.taco_name, function(result){
        res.redirect('/');
    })
})

module.exports = router;
