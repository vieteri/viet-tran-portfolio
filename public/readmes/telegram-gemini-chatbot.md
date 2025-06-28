# 🤖 Telegram Gemini 2.5 Flash Chatbot with Internet Search

**GitHub Repository:** [vieteri/chatbot](https://github.com/vieteri/chatbot)

A powerful Telegram chatbot powered by Google's Gemini 2.5 Flash with real-time internet search capabilities.

## ✨ Features

- 🔍 **Built-in Google Search** - Native search grounding with automatic citations
- 🧠 **Gemini 2.5 Flash** - Google's latest thinking model with enhanced reasoning
- ⚡ **Automatic Search Detection** - Searches when current information is needed
- 🚫 **Unfiltered Responses** - No content policy restrictions
- 📱 **HTML Formatting** - Rich text with bold, italic, code, links
- 💬 **Conversation Memory** - Remembers 20 messages of context
- 📊 **Message Chunking** - Handles long responses automatically
- 🔧 **Serverless** - Webhook-based architecture

## 🚀 Technology Stack

- **Backend**: Node.js with serverless architecture
- **AI Model**: Google Gemini 2.5 Flash
- **Platform**: Telegram Bot API
- **Search**: Built-in Google Search (no additional API needed)
- **Deployment**: Vercel/Netlify compatible
- **Architecture**: Webhook-based for real-time responses

## 🎯 Key Capabilities

### Intelligent Search Integration
- **Smart Detection**: Automatically identifies when current information is needed
- **Function Calling**: Uses Google's function calling API to trigger web searches
- **Real-time Results**: Fetches up to 5 search results with titles, snippets, and links
- **Intelligent Synthesis**: Combines search results with AI reasoning for comprehensive answers

### Advanced Chat Features
- **Conversation Memory**: Maintains context across 20 messages per user
- **HTML Formatting Support**: Rich text formatting with Telegram HTML tags
- **Message Chunking**: Automatically handles long responses within Telegram's limits
- **Unfiltered Responses**: Provides unrestricted AI interactions

## 💡 Usage Examples

### Automatic Current Information
```
User: "What's the latest news about AI?"
Bot: 🔍 [Automatically searches Google and provides current AI news with citations]

User: "What's the Bitcoin price today?"
Bot: 🔍 [Searches for current Bitcoin price and provides up-to-date information]
```

### Conversational AI
```
User: "Explain quantum computing"
Bot: [Provides detailed explanation, may search for latest developments]
```

## 🔧 Technical Implementation

### API Architecture
- `POST /api/webhook` - Telegram webhook handler
- `POST /api/set-webhook` - Set Telegram webhook URL
- `GET /` - Bot status and setup page

### Environment Configuration
```env
# Telegram Bot Token (from @BotFather)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here

# Google AI API Key (from https://ai.google.dev/)
GEMINI_API_KEY=your_gemini_api_key_here
```

### Deployment Process
1. **Vercel Deployment** (Recommended):
   ```bash
   npm install
   vercel --prod
   ```

2. **Webhook Setup**:
   ```bash
   curl -X POST https://your-domain.com/api/set-webhook \
     -H "Content-Type: application/json" \
     -d '{"webhookUrl": "https://your-domain.com/api/webhook"}'
   ```

## 🎨 Bot Commands

| Command | Description |
|---------|-------------|
| `/start` | Welcome message and feature overview |
| `/clear` | Clear conversation history |

## 🔒 Security & Privacy

- **Serverless Architecture**: No persistent server storage
- **Memory Management**: Conversation history cleared on server restart
- **API Security**: Secure webhook validation
- **Environment Variables**: Secure credential management

## 🚀 Performance Features

### Message Handling
- **Chunking Algorithm**: Respects Telegram's 4096 character limit
- **Format Preservation**: Maintains HTML formatting across message splits
- **Response Optimization**: Efficient processing of long AI responses

### Search Optimization
- **Citation Integration**: Automatic source attribution
- **Result Filtering**: Intelligent selection of most relevant search results
- **Response Synthesis**: Combines multiple sources for comprehensive answers

## 📱 HTML Formatting Support

The bot supports rich Telegram HTML formatting:
- `<b>bold</b>` - Bold text
- `<i>italic</i>` - Italic text
- `<code>code</code>` - Inline code
- `<u>underline</u>` - Underlined text
- `<s>strikethrough</s>` - Strikethrough text
- `<a href="url">link</a>` - Clickable links
- `<pre>code block</pre>` - Code blocks

## 🔮 Advanced Features

### Function Calling Implementation
- **Google Search Integration**: Native search function calling
- **Context Awareness**: Understands when to search vs. use training data
- **Result Processing**: Intelligent parsing and synthesis of search results

### Conversation Management
- **Memory Persistence**: Maintains context throughout conversations
- **User Isolation**: Separate conversation threads per user
- **Context Optimization**: Efficient memory usage with 20-message limit

## 🌟 Development Highlights

### AI Integration Challenges
- Implementing Gemini 2.5 Flash function calling for search
- Balancing search frequency with response speed
- Managing conversation context and memory efficiently

### Telegram API Optimization
- Webhook-based architecture for real-time responses
- Message chunking algorithm for long responses
- HTML formatting preservation across message splits

### Serverless Architecture
- Stateless design for scalability
- Environment-based configuration management
- Efficient API endpoint organization

## 🎯 Use Cases

- **Research Assistant**: Get current information on any topic
- **News Updates**: Latest developments in specific fields
- **Technical Support**: Programming and technical questions with current solutions
- **General Knowledge**: Comprehensive answers combining AI knowledge and current data
- **Conversational AI**: Natural language interactions with memory

## 📊 Project Statistics

- **Languages**: JavaScript/Node.js
- **APIs**: Telegram Bot API, Google Gemini API
- **Architecture**: Serverless, Webhook-based
- **Features**: 8+ core features including search, memory, formatting
- **Deployment**: Production-ready on Vercel/Netlify

This project demonstrates advanced integration of modern AI APIs with messaging platforms, showcasing expertise in serverless architecture, real-time communication, and intelligent search integration. 