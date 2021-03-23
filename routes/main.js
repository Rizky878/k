__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/rizky', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/apis.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'Rizky',
            namaowner: 'Rizky',
            instagram: 'ks',
            youtube : 'Gada'
        }
    }
    res.json(config)
})

module.exports = router
