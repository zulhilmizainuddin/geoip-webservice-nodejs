# geoip-webservice-nodejs
RESTful service for retrieving geolocations from IP addresses using Node.js and Express framework

Geolocation data provided by IP2Location LITE databases.

## Getting Started

Install Node.js. Follow the instruction at https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04.

Install PM2.
```bash
npm install -g pm2
```

Download IP2LOCATION-LITE-DB5.BIN and IP2LOCATION-LITE-DB5.IPV6.BIN from https://lite.ip2location.com/database-ip-country-region-city-latitude-longitude and place into the databases/ip2location directory.

Start the service using PM2.
```bash
pm2 start www --name="geoip-webservice"
```

## Endpoint
### IP2Location
```
http://localhost:4000/ip2location?ipaddress={ip-address}
```

Make a HTTP GET request to the endpoint to retrieve the IP address geolocation. Replace {ip-address} with the IP address to be searched.

## Usage Example
```bash
curl http://localhost:4000/ip2location?ipaddress=123.123.123.123
```

### Result Example
```javascript
{
    "ipaddress":"123.123.123.123",
    "city":"Beijing",
    "country":"China",
    "latitude":39.9289,
    "longitude":116.3883
}
```

### Error Example
```javascript
{
    "error_message":"Invalid IP address provided"
}
```
