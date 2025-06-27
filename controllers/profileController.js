const ProfileData = require('../models/ProfileData');

// POST /api/profile
exports.createProfile = async (req, res) => {
    try {
        const { username, hintPoints = 15, maxLevel = 0, takenHintLevels = [] } = req.body;
        const profile = new ProfileData({ username, hintPoints, maxLevel, takenHintLevels });
        await profile.save();

        // Emit WebSocket event for profile creation
        const io = req.app.get('io');
        if (io) {
            io.to(`user-${username}`).emit('profile-updated', profile);
        }

        res.status(201).json({ message: 'Profile created', profile });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET /api/profile/:username
exports.getProfile = async (req, res) => {
    try {
        const profile = await ProfileData.findOne({ username: req.params.username });
        if (!profile) return res.status(404).json({ error: 'Profile not found' });
        res.json(profile);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// PUT /api/profile/:username
exports.replaceProfile = async (req, res) => {
    try {
        const { hintPoints, maxLevel, takenHintLevels } = req.body;
        const profile = await ProfileData.findOneAndUpdate(
            { username: req.params.username },
            { hintPoints, maxLevel, takenHintLevels },
            { new: true, overwrite: true }
        );
        if (!profile) return res.status(404).json({ error: 'Profile not found' });

        // Emit WebSocket event for profile update
        const io = req.app.get('io');
        if (io) {
            io.to(`user-${req.params.username}`).emit('profile-updated', profile);
        }

        res.json({ message: 'Profile replaced', profile });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// PATCH /api/profile/:username
exports.updateProfile = async (req, res) => {
    try {
        const profile = await ProfileData.findOneAndUpdate(
            { username: req.params.username },
            req.body,
            { new: true }
        );
        if (!profile) return res.status(404).json({ error: 'Profile not found' });

        // Emit WebSocket event for profile update
        const io = req.app.get('io');
        if (io) {
            io.to(`user-${req.params.username}`).emit('profile-updated', profile);
        }

        res.json({ message: 'Profile updated', profile });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE /api/profile/:username
exports.deleteProfile = async (req, res) => {
    try {
        const profile = await ProfileData.findOneAndDelete({ username: req.params.username });
        if (!profile) return res.status(404).json({ error: 'Profile not found' });
        res.json({ message: 'Profile deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /api/profile
exports.getAllProfiles = async (req, res) => {
    try {
        const profiles = await ProfileData.find();
        res.json(profiles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 