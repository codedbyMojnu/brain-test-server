const express = require('express');
const router = express.Router();
const { register, login, forgotPassword, resetPassword, getAdminStatus, checkAdminExists } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/admin-status', getAdminStatus);
router.post('/check-admin', checkAdminExists);

module.exports = router;