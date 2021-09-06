const express = require('express');
const router = express.Router();

const Sausage = require('../models/sausage')

router.get('/', (req, res) => {
    const sausagesData = Sausage.all
    res.send(sausagesData);
});

router.post('/', (req,res) => {
    const data = req.body;
    const newSausageSomething = Sausage.create(data);
    res.send({
        message: `${newSausageSomething}.name added to collection`
})})


module.exports = router;
