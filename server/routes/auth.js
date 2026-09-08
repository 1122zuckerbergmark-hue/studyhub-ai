  const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// POST /api/ai-tutor/ask - NO AUTH REQUIRED
router.post('/ask', async (req, res) => {
    try {
        const { question } = req.body;
        
        if (!question) {
            return res.status(400).json({ message: 'Please ask a question' });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful study assistant for students. Give clear, concise answers." },
                { role: "user", content: question }
            ],
            max_tokens: 500,
        });

        res.json({ answer: completion.choices[0].message.content });
    } catch (error) {
        console.error('AI Error:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;