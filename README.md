
# Web Application Firewall (WAF)

A custom Web Application Firewall implementation that protects against OWASP Top 10 vulnerabilities with real-time monitoring and alerting capabilities.




## Features

Protection against OWASP Top 10 vulnerabilities:
  - SQL Injection detection
  - Cross-Site Scripting (XSS) prevention
  - Cross-Site Request Forgery (CSRF) protection
  - Authentication and Access Control validation
  - Security Misconfiguration detection
- Real-time monitoring and logging
- Configurable security rules with different sensitivity levels
- Rate limiting to prevent brute force attacks
- Proxy capabilities to analyze external websites
- Email and Slack alerting integration


## Installation

1. Clone the repository
2. Install dependencies:

```
npm Install
```
3. Configure the WAF in `config/config.js`
4. Start the WAF:

```
npm Start
```

    
## Configuration

The WAF can be configured through the `config/config.js` file:

```javascript
module.exports = {
port: process.env.PORT || 3001,  // Port to run the WAF on
targetApp: process.env.TARGET_APP || 'https://example.com',  // Target application to protect
logLevel: process.env.LOG_LEVEL || 'info',  // Logging level
showDetailedErrors: process.env.NODE_ENV !== 'production',  // Show detailed errors in non-production
alertThreshold: 5,  // Number of violations before sending an alert
alertChannels: {
 // Alert configuration
},
rules: {
 // Security rules configuration
}
};
```
## Usage 

### Basic Usage
The WAF acts as a reverse proxy in front of your web application:

1. Start the WAF: npm start
2. Configure your web server or load balancer to route traffic through the WAF
3. Monitor the logs for security violations
### Checking External Websites
To use the WAF to check external websites:

1. Update the targetApp in the config to point to the external website
2. Start the WAF
3. Access the external website through the WAF (e.g., http://localhost:3001 )
4. Check the logs for security issues
## Monitoring
The WAF logs all requests and security violations to:

- Console output
- Log files in the logs directory:
  - access.log - All HTTP requests
  - error.log - Error messages
  - combined.log - All log messages
## Alerting
When security violations are detected, the WAF can send alerts via:

- Email (configure recipients in config.js )
- Slack (configure webhook in config.js )

## Troubleshooting

### Port Already in Use
If you see an error like "Error: listen EADDRINUSE: address already in use :::3000":

1. Change the port in config.js :

```
port: process.env.PORT || 3001,  // Use a different port
```

2. Or find and kill the process using the port:

```
netstat -ano | findstr :3000
taskkill /F /PID <PID>
```
## License



This README provides comprehensive documentation for your Web Application Firewall, including installation instructions, configuration options, usage examples, and troubleshooting tips. It's designed to help users understand how to use your WAF effectively.