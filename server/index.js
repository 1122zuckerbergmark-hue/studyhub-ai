const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ===== AI ROUTES (Mock for now) =====
const aiTutorRoutes = require('./routes/ai-tutor.js');
app.use('/api/ai-tutor', aiTutorRoutes);

// ============================================
// ===== ALL HTML PAGES =====
// ============================================

// Login Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/login.html'));
});

// Dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/dashboard.html'));
});

// AI Tutor
app.get('/ai-tutor', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/ai-tutor.html'));
});

// NOTES PAGE - ADDED THIS!
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/notes.html'));
});

// Planner
app.get('/planner', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/planner.html'));
});

// Assignments
app.get('/assignments', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/assignments.html'));
});

// ============================================
// ===== START SERVER =====
app.listen(PORT, () => {
    console.log(`🚀 StudyHub.AI running on http://localhost:${PORT}`);
});