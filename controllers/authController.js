const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const ProfileData = require('../models/ProfileData');

exports.register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        // Auto-create profile data after user registration
        await ProfileData.create({ username: user.username });
        res.status(201).json({ message: 'User created' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
};