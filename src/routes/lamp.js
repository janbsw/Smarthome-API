const { Router } = require('express')

const router = Router();

router.get('/id/:lampId', (req, res) =>{
   var lampId = req.params.lampId
   res.send(lampId)
})


router.get('/', (req, res) =>{
    res.send('Working')
 })

module.exports = router;