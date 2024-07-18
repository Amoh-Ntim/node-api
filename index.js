/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
// require('dotenv').config(); // Optional for API key in environment variable

const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

// Replace with your actual API key (consider environment variables)
const apiKey = 'AIzaSyBzY4BHMLWMhQkdPLiodA3i6ee5QYWJqZo';

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Adjust model name if needed
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};


app.post('/gemini', async (req, res) => {
  try {
    const  { message } = req.body;

    const chatSession = model.startChat({
      generationConfig,
      history: [], // Include previous messages if needed
    });

    const result = await chatSession.sendMessage(message);
    res.json({ generatedText: result.response.text() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while generating text');
  }
});

// Define a simple GET route (optional)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




