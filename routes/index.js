const express = require('express');
const router = express.Router();

router.get('/inicio', (req,res)=>{
    res.send("SOY UN INICIO ENRUTADO");
})

router.get('/about', (req,res)=>{
    res.send("ESTO ES UN ABOUT");
})

module.exports = router;