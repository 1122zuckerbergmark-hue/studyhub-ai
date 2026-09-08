const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const StudyData = require('../models/StudyData');

router.get('/', auth, async (req, res) => {
    try {
        const data = await StudyData.findOne({ userId: req.userId });
        res.json(data || { courses: [], assignments: [], studySessions: [] });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});

router.put('/', auth, async (req, res) => {
    try {
        const data = await StudyData.findOneAndUpdate(
            { userId: req.userId },
            { ...req.body, updatedAt: Date.now() },
            { new: true, upsert: true }
        );
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error updating data' });
    }
});

module.exports = router;