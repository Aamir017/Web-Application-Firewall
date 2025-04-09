module.exports = {
  port: process.env.PORT || 3001, // Changed from 3000 to 3001
  targetApp: process.env.TARGET_APP || 'https://google.com',
  logLevel: process.env.LOG_LEVEL || 'info',
  showDetailedErrors: process.env.NODE_ENV !== 'production',
  alertThreshold: 5,
  alertChannels: {
    email: {
      enabled: true,
      recipients: ['admin@example.com']
    },
    slack: {
      enabled: false,
      webhook: process.env.SLACK_WEBHOOK
    }
  },
  rules: {
    sqlInjection: {
      enabled: true,
      sensitivity: 'high' // high, medium, low
    },
    xss: {
      enabled: true,
      sensitivity: 'high'
    },
    csrf: {
      enabled: true,
      exemptRoutes: ['/api/public']
    },
    authentication: {
      enabled: true,
      protectedRoutes: ['/api/admin', '/api/user']
    },
    accessControl: {
      enabled: true,
      rbacRules: {
        admin: ['*'],
        user: ['/api/user/*'],
        guest: ['/api/public/*']
      }
    },
    rateLimit: {
      enabled: true,
      requestsPerMinute: 60
    }
  }
};