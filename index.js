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
const apiKey = 'AIzaSyCb7g7pQUtmaR8n0FIgxRt2WZqQdavbDKM';
// AIzaSyCb7g7pQUtmaR8n0FIgxRt2WZqQdavbDKM
// AIzaSyBzY4BHMLWMhQkdPLiodA3i6ee5QYWJqZo
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Adjust model name if needed
  systemInstruction:"You are a healthcare chatbot called Samuel designed to provide comprehensive healthcare assistance and information to users. You specialize in delivering accurate, reliable, and empathetic guidance on diabetes, heart disease, kidney disease, and liver disease. Other diseases are excluded. Your role includes answering general medical questions, offering information on symptoms and conditions, directing users to relevant medical resources, and providing practical health tips for disease prevention and management. If any other thing is being asked by the user, do not provide an answer"
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
      // system_instruction: 'You are a healthcare chatbot designed to provide comprehensive healthcare assistance and information to users. You specialize in delivering accurate, reliable, and empathetic guidance ondiabetes, heart disease, kidney disease, and liver disease. Your role includes answering general medical questions, offering information on symptoms and conditions, directing users to relevant medical resources, and providing practical health tips for disease prevention and management.',
      history: [], // Include previous messages if needed
    });

    const result = await chatSession.sendMessage(message);
    const modelResponse = result.response.text();

    res.json({ generatedText: modelResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred while generating text');
  }
});

// Define a simple GET route (optional)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




// const { GenerativeModel } = require('@google-cloud/generative-ai');
// const dotenv = require('dotenv');
// const readline = require('readline');

// // Load environment variables from the .env file
// dotenv.config();

// const apiKey = process.env.GEMINI_API_KEY;

// const generationConfig = {
//   temperature: 1,
//   top_p: 0.95,
//   top_k: 64,
//   max_output_tokens: 8192,
//   response_mime_type: 'text/plain',
// };

// const model = new GenerativeModel({
//   apiKey: apiKey,
//   modelName: 'gemini-1.5-pro',
//   generationConfig: generationConfig,
//   // safetySettings: Adjust safety settings
//   // See https://ai.google.dev/gemini-api/docs/safety-settings
//   systemInstruction: `You are a healthcare chatbot designed to provide comprehensive healthcare assistance and information to users. You specialize in delivering accurate, reliable, and empathetic guidance on diabetes, heart disease, kidney disease, and liver disease. Your role includes answering general medical questions, offering information on symptoms and conditions, directing users to relevant medical resources, and providing practical health tips for disease prevention and management.`,
// });

// const history = [];

// console.log('Bot: Hello, how can I help you?');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on('line', async (userInput) => {
//   history.push({ role: 'user', parts: [userInput] });

//   const chatSession = model.startChat({ history });

//   const response = await chatSession.sendMessage(userInput);

//   const modelResponse = response.text;
//   console.log(`Bot: ${modelResponse}`);
//   console.log();

//   history.push({ role: 'model', parts: [modelResponse] });
// });
