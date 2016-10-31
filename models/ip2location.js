'use strict';

const path = require('path');
const net = require('net');
const ip2location = require('ip2location-nodejs');

const config = require('../config');
const logger = require('../utils/logger');

class IP2Location {
    constructor() {
        this.isDatabaseInitialized = false;
    }

    query(ip) {
        let result;
        if (net.isIP(ip)) {
            if (!this.isDatabaseInitialized) {
                const databasePath = path.join(__dirname, `../databases/ip2location/${config.ip2location_ipv6db}`);
                ip2location.IP2Location_init(databasePath);

                logger.info('IP2Location IPv6 database initialized');
                this.isDatabaseInitialized = true;
            }

            result = ip2location.IP2Location_get_all(ip);
        }

        return result;
    }
}

module.exports = new IP2Location();