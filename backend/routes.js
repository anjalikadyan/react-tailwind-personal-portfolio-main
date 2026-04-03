/* eslint-disable no-undef */
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const drive = require("./drive");
// eslint-disable-next-line no-undef
const uploadFile = require("./upload");
const Certificate = require("./model");

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const upload = multer({ dest: uploadDir });

// Route to Upload Certificate (Frontend to Backend to Drive)
router.post("/upload", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const fileId = await uploadFile(req.file.path, req.file.originalname);

        // Direct view link format (supports both images and PDFs)
        const fileUrl = `https://lh3.googleusercontent.com/d/${fileId}=s1000`;

        const cert = await Certificate.findOneAndUpdate(
            { driveFileId: fileId },
            {
                name: req.file.originalname.split('.')[0].replace(/-/g, ' ').replace(/_/g, ' '),
                driveFileId: fileId,
                fileUrl: fileUrl,
                updatedAt: Date.now()
            },
            { upsert: true, new: true }
        );

        // Clean up local file after upload
        fs.unlinkSync(req.file.path);

        res.json({ message: "successfully send", fileUrl, cert });
    } catch (err) {
        console.error("Upload Route Error:", err);
        res.status(500).json({ error: err.message });
    }
});

// Sync Route (Fetch from Drive folder -> Update MongoDB)
router.get("/sync-certificates", async (req, res) => {
    try {
        const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
        if (!folderId) {
            return res.status(400).json({ error: "GOOGLE_DRIVE_FOLDER_ID is missing" });
        }

        const response = await drive.files.list({
            q: `'${folderId}' in parents and trashed = false`,
            fields: 'files(id, name, mimeType)',
        });

        const files = response.data.files;
        const syncedCerts = [];

        for (const file of files) {
            // Process images or PDFs
            if (file.mimeType.startsWith('image/') || file.mimeType === 'application/pdf') {
                const fileUrl = `https://lh3.googleusercontent.com/d/${file.id}=s1000`;
                const cert = await Certificate.findOneAndUpdate(
                    { driveFileId: file.id },
                    {
                        name: file.name.split('.')[0].replace(/-/g, ' ').replace(/_/g, ' '),
                        driveFileId: file.id,
                        fileUrl: fileUrl,
                        updatedAt: Date.now()
                    },
                    { upsert: true, new: true }
                );
                syncedCerts.push(cert);
            }
        }

        res.json({ message: "Sync complete", count: syncedCerts.length });
    } catch (err) {
        console.error("Sync Error:", err);
        // If Drive fails (e.g., refresh token expired), we don't crash, just report error
        res.status(500).json({
            error: "Google Drive sync failed. Showing existing data from database.",
            details: err.message
        });
    }
});

// Fetch Route (Frontend calls this)
router.get("/certificates", async (req, res) => {
    try {
        // Always return what's in MongoDB - this ensures the site works even if Drive is down
        const data = await Certificate.find().sort({ updatedAt: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
