const fs = require("fs");
const drive = require("./drive");
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

async function uploadFile(filePath, fileName) {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: fileName,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID]
      },
      media: {
        mimeType: "application/pdf",
        body: fs.createReadStream(filePath)
      }
    });

    return response.data.id;
  } catch (error) {
    console.error("Upload Error:", error);
    throw error;
  }
}

module.exports = uploadFile;
