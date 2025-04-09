import express from 'express';
import bodyParser from 'body-parser';
import { Chatbot } from './chatbot/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const chatbot = new Chatbot();

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    try {
        const botResponse = await chatbot.handleUserMessage(userMessage);
        res.json({ response: botResponse });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});