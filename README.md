# Mental Health Chatbot

This project is an open-source mental health chatbot designed to deliver Cognitive Behavioral Therapy (CBT) using large language models (LLMs). The chatbot aims to provide support for individuals dealing with anxiety, depression, and stress, while also incorporating engagement strategies such as commitment devices and micro-rewards to enhance user interaction.

## Features

- **Cognitive Behavioral Therapy (CBT)**: The chatbot utilizes evidence-based CBT techniques to help users manage their mental health.
- **Large Language Model Integration**: The chatbot integrates with LLMs to provide personalized responses and support.
- **Engagement Strategies**: Commitment devices and micro-rewards are implemented to encourage consistent user interaction and progress tracking.
- **User-Friendly Interface**: A simple and intuitive front-end interface for easy user interaction.

## Project Structure

```
mental-health-chatbot
├── src
│   ├── app.ts
│   ├── chatbot
│   │   ├── index.ts
│   │   ├── llm-integration.ts
│   │   └── cbt-modules
│   │       ├── anxiety.ts
│   │       ├── depression.ts
│   │       └── stress.ts
│   ├── engagement
│   │   ├── commitment-devices.ts
│   │   └── micro-rewards.ts
│   ├── utils
│   │   └── helpers.ts
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── config
│   ├── llm-config.ts
│   └── app-config.ts
├── tests
│   ├── chatbot.test.ts
│   ├── engagement.test.ts
│   └── utils.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mental-health-chatbot.git
   ```
2. Navigate to the project directory:
   ```
   cd mental-health-chatbot
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the chatbot server, run:
```
npm start
```
Then, open your browser and navigate to `http://localhost:3000` to interact with the chatbot.

## Contribution

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.