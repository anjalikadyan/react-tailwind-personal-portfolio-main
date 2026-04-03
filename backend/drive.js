const { google } = require("googleapis");
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_DRIVE_CLIENT_ID,
  process.env.GOOGLE_DRIVE_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_DRIVE_REFRESH_TOKEN
});

const drive = google.drive({
  version: "v3",
  auth: oauth2Client
});

module.exports = drive;
