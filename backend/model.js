const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema({
  name: String,
  driveFileId: { type: String, unique: true },
  fileUrl: String,
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Certificate", CertificateSchema);
