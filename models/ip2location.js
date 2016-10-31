'use strict';

const ip2locationIPv4 = require('ip2location-nodejs');
const ip2locationIPv6 = require('ip2location-nodejs');
const path = require('path');
const net = require('net');

const config = require('../config');
const logger = require('../utils/logger');

class IP2Location {
    constructor() {
        this.isIPv4DBInitialized = false;
        this.isIPv6DBInitialized = false;
    }

    query(ip) {
        let result = null;

        if (net.isIPv4(ip)) {
            if (!this.isIPv4DBInitialized) {
                const databasePath = path.join(__dirname, `../databases/ip2location/${config.ip2location_ipv4db}`);
                ip2locationIPv4.IP2Location_init(databasePath);

                logger.info('IP2Location IPv4 database initialized');
                this.isIPv4DBInitialized = true;
            }

            result = ip2locationIPv4.IP2Location_get_all(ip);
        }

        if (net.isIPv6(ip)) {
            if (!this.isIPv6DBInitialized) {
                const databasePath = path.join(__dirname, `../databases/ip2location/${config.ip2location_ipv6db}`);
                ip2locationIPv6.IP2Location_init(databasePath);

                logger.info('IP2Location IPv6 database initialized');
                this.isIPv6DBInitialized = true;
            }

            result = ip2locationIPv6.IP2Location_get_all(ip);
        }

        return result;
    }
}

const ip2location = new IP2Location();

module.exports = ip2location;