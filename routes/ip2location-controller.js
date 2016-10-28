const express = require('express');
const router = express.Router();

const ip2location = require('../models/ip2location');

router.get('/', function(req, res, next) {
    const queriedData = ip2location.query(req.query.ipaddress);

    let geoLocation;
    if (queriedData !== null) {
        geoLocation = {
            ipaddress: req.query.ipaddress,
            city: queriedData.city,
            country: queriedData.country_long,
            latitude: queriedData.latitude,
            longitude: queriedData.longitude
        };
    }
    else {
        geoLocation = {
            error_message: 'Geolocation not found'
        };
    }

    res.json(geoLocation);
});

module.exports = router;
