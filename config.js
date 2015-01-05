'use strict';

exports.port = process.env.PORT || 3000;
exports.mongodb = {
  uri: 'mongodb://betaUser:fF5-gWB-S8N-uPz@ds029541.mongolab.com:29541/oxstututors' 
};
exports.companyName = 'A.A.';
exports.projectName = 'OxStuTutors';
exports.systemEmail = 'oxstututors@gmail.com';
exports.cryptoKey = 'k3yb0ardc4t';
exports.loginAttempts = {
  forIp: 50,
  forIpAndUser: 7,
  logExpiration: '20m'
};
exports.requireAccountVerification = false;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName,
    address: process.env.SMTP_FROM_ADDRESS || 'oxstututors@gmail.com'
  },
  credentials: {
    user: process.env.SMTP_USERNAME || 'oxstututors@gmail.com',
    password: 'b6u-yuE-JHJ-h69',
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    ssl: true
  }
};
exports.oauth = {
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || '',
    secret: process.env.TWITTER_OAUTH_SECRET || ''
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '',
    secret: process.env.FACEBOOK_OAUTH_SECRET || ''
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  },
  google: {
    key: process.env.GOOGLE_OAUTH_KEY || '',
    secret: process.env.GOOGLE_OAUTH_SECRET || ''
  }
};
