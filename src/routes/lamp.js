const { Router } = require('express')

const { switchlamp, init } = require('../microcontroller/con_index')

const router = Router();

router.get('/id/:lampId', (req, res) =>{
   var lampId = req.params.lampId
   switchlamp(req.params.lampId)
   res.send(lampId)
})


router.get('/', (req, res) =>{
    res.send('Working')
 })

module.exports = router;