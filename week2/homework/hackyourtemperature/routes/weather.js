const express = require('express');
const router = express.Router();

 router.post('/',(req,res)=>{
  
    if(!req.body.name)
    return res.status(400).json({msg:'Please enter a city'});
    
    res.render('index', {
        result: `The temperature in ${req.body.name} is 24.58 °C!`,
      })

  });


  module.exports = router;