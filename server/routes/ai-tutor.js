const express = require('express');
const router = express.Router();

// ===== GROQ DISABLED FOR NOW =====
// We'll re-enable this when you get your API key
// const Groq = require('groq-sdk');
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

router.post('/ask', async (req, res) => {
    try {
        const { question } = req.body;
        
        if (!question) {
            return res.status(400).json({ message: 'Please ask a question' });
        }

        // ===== MOCK RESPONSE FOR NOW =====
        const mockResponse = {
            answer: `🤖 I'm your AI tutor! You asked: "${question}".\n\nI'm currently in setup mode. Once you get your API key, I'll give real AI responses!\n\n📝 Tip: Go to https://console.groq.com to get your free API key.`
        };

        res.json(mockResponse);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;