var express = require('express');
var router = express.Router();
var userModel = require('./users');

router.get('/',function(req,res){
  res.render('index');
});

router.get('/new',function(req,res){
      userModel.create({
        username:'helo',
        password:'helo'
      }).then(function(){
             res.redirect('/');
      });
});


router.get('/checkusername/:username',function(req,res){
    userModel.findOne({username:req.params.username})
    .then(function(foundUser){
           res.send(foundUser);
    });
});
module.exports = router;
