const express = require('express');
const router = express.Router();

const IP2Location = require('../models/IP2Location');

router.get('/', function(req, res, next) {
    const ip2Location = new IP2Location();
    const queriedData = ip2Location.query(req.query.ipaddress);

    let geoLocation;
    if (queriedData !== null) {
        geoLocation = {
            IPAddress: req.query.ipaddress,
            City: queriedData.city,
            Country: queriedData.country_long,
            Latitude: queriedData.latitude,
            Longitude: queriedData.longitude
        };
    }
    else {
        geoLocation = {
            ErrorMessage: 'Geo location not found'
        };
    }

    res.json(geoLocation);
});

module.exports = router;
