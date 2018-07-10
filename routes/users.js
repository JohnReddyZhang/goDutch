const express = require('express');
const router = express.Router();

// router.get('/:username', function (req, res) {
//     res.send('hello, ' + req.params.username);
// });

router.post('/signIn', [function (req, res, next) {
    console.log(req.body.username);
    next({username: req.body.username});
},
    function (req, res) {
        res.send('hello, ' + req.params);
    }]);

module.exports = router;
