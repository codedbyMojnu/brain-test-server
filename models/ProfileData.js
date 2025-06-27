const mongoose = require('mongoose');

const ProfileDataSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    hintPoints: { type: Number, default: 30 },
    maxLevel: { type: Number, default: 0 },
    takenHintLevels: { type: [Number], default: [] }
});

module.exports = mongoose.model('ProfileData', ProfileDataSchema); 