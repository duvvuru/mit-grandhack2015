
nconf = require('nconf');

      //
  // Setup nconf to use (in-order):
  //   1. Command-line arguments
  //   2. Environment variables
  //   3. A file located at 'path/to/config.json'
  //
  nconf.argv()
       .env()
       .defaults({
    		'BASE_DOMAIN_URL': "http://localhost:8080"
  		});