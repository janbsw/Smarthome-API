const { Router } = require('express')

const { switchblind, init } = require('../microcontroller/con_index')

const router = Router();

router.get('/id/:blindid', (req, res) =>{
   var lampId = req.params.lampId
   switchlamp(req.params.lampId)
   res.send(lampId)
})


router.get('/', (req, res) =>{
    res.send('Working')
 })

module.exports = router;