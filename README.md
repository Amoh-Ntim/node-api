
---

# LUCY AI Gemini Healthcare Chatbot

This project is a **healthcare chatbot** developed using **Node.js** and the **Gemini API**. The chatbot is designed to interact with users, gather health-related information, and suggest potential symptoms or conditions based on user inputs.

## Features

- **Symptom Identification**: The chatbot helps users identify symptoms by asking health-related questions.
- **Health Guidance**: Based on user responses, the chatbot provides potential diagnoses or suggestions to seek medical attention.
- **Gemini API Integration**: Utilizes the Gemini API to process and respond to user inputs in a conversational manner.

## Technologies Used

- **Node.js**: Backend development framework for chatbot logic.
- **Gemini API**: For natural language processing and responding to health-related queries.
- **Express.js**: Web framework used for routing and API interactions.
- **Firebase**: (Optional) For user authentication or storing conversation data.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/gemini-healthcare-chatbot.git
   ```

2. Navigate to the project folder:

   ```bash
   cd gemini-healthcare-chatbot
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory to store your environment variables (such as your Gemini API keys):

   ```env
   GEMINI_API_KEY=your_gemini_api_key
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The chatbot will be available at `http://localhost:5000`.

## Usage

- After running the server, the chatbot can be accessed through a chat interface (you can build a front end or integrate it with existing apps).
- Users can type their health-related queries, and the chatbot will respond by asking relevant questions and providing guidance based on the information gathered.

## Example Interaction

1. **User Input**: "I feel tired and have a headache."
2. **Chatbot Response**: "How long have you been feeling tired? Do you have any other symptoms?"

The chatbot continues the conversation to provide more detailed health guidance.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
