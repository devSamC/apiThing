const express = require('express');
const router = express.Router();
const helpers = require(`../helpers/helpers`)
const Sausage = require('../models/sausage')

router.get('/', (req, res) => {
    const sausagesData = Sausage.all
    res.send(sausagesData);
});

// router.get('/:id',(req, res)=> {
//     const sausagesData = Sausage.all
//     res.send(sausagesData[req.params.id -1]);
    
//     console.log('hello world')
// })

router.get('/most:property',(req, res)=> {
    const sausagesData = Sausage.all;
    let max = helpers.findMaxPropertyValue(sausagesData, req.params.property)
    res.send(sausagesData[sausagesData.findIndex(x=>x[`${req.params.property}`]===max)])
    
})

router.get('/least:property',(req, res)=> {
    const sausagesData = Sausage.all;
    let min = helpers.findMinPropertyValue(sausagesData, req.params.property)
    res.send(sausagesData[sausagesData.findIndex(x=>x[`${req.params.property}`]===min)])
})

// router.get('/mostdelicious',(req, res)=> {
//     const sausagesData = Sausage.all
//     res.send(sausagesData[sausagesData.findIndex(x=>x.deliciousness === 5)]);
// })

// router.get('/mostcurvy',(req, res)=> {
//     const sausagesData = Sausage.all
//     res.send(sausagesData[sausagesData.findIndex(x=>x.curvature === 5)]);
// })
// const sausagesData = Sausage.all;
    // let max = 0;
    // for (let i = 0; i < sausagesData.length; i++) {
    //     let someProperty = sausagesData[i][`${req.params.property}`]
    //     if( someProperty > max) {
    //         max = someProperty;
    //     } 
    // }

router.get('/:name',(req, res)=> {
    const sausagesData = Sausage.all
    
    res.send(sausagesData[sausagesData.findIndex(x=>x.name === req.params['name'])]);
    console.log(sausagesData)
    console.log(req.params)
})



// router.get('/mostdelicious',(req, res)=> {
//     const sausagesData = Sausage.all
//     res.send(sausagesData[req.params.id -1]);
//     console.log('hello world')
//     // const sausagesData = Sausage.all
//     // res.send(sausagesData[2].deliciousness);
//     // console.log('hello world')
//     // const sausagesData = Sausage.all;
//     // const localArray = []
//     // for (let sausage of sausagesData) {
//     //     localArray.push(sausage.deliciousness);
//     //     console.log(localArray);
//     // }
//     // let i = localArray.indexOf(Math.max(...localArray));
//     // res.send(localArray[i]);
// })



router.post('/', (req,res) => {
    const data = req.body;
    const newSausageSomething = Sausage.create(data);
    res.send({
        message: `${newSausageSomething}.name added to collection`
})})


module.exports = router;
