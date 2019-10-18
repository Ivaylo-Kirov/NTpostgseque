const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GIGS INDEX')
});

module.exports = router;