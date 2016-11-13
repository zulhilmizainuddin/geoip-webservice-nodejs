'use strict';

const validator = require('validator');

const express = require('express');
const router = express.Router();

router.get(/\/(?:ip2location)/i, function(req, res, next) {
    if (validator.isIP(req.query.ipaddress + '')) {
        next();
    }
    else {
        res.json({
            error_message: 'Invalid IP address provided'
        });
    }
});

module.exports = router;
