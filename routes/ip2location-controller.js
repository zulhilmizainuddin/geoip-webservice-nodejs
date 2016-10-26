const express = require('express');
const router = express.Router();

const ip2location = require('../models/ip2location');

router.get('/', function(req, res, next) {
    const queriedData = ip2location.query(req.query.ipaddress);

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
