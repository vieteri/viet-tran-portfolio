# AI Fitness Coach Application

**Live Demo:** [fit.viet.fi](https://fit.viet.fi)

## Overview

An AI-powered fitness coaching web application that provides personalized workout guidance through voice interaction capabilities. This project demonstrates the integration of modern AI technologies with web development to create an interactive fitness coaching experience.

## 🚀 Features

### AI-Powered Coaching
- **Gemini 2.0 Flash Integration**: Utilizes Google's latest Gemini model for generating intelligent fitness advice
- **RAG Capabilities**: Retrieval-Augmented Generation for contextual and personalized fitness recommendations
- **Fitness-Optimized Prompts**: Specialized system prompts designed for workout guidance and motivation

### Voice Interaction
- **Text-to-Speech (TTS)**: Browser-based TTS for audio playback of AI responses
- **Voice Selection**: Choose from available system voices for personalized experience
- **Auto-Play**: Automatic audio playback after generating responses
- **Web Speech API**: Modern browser speech synthesis capabilities

### Modern Web Architecture
- **Next.js 15**: Latest version with App Router for optimal performance
- **Supabase Integration**: User authentication and data persistence
- **Vercel Deployment**: Optimized hosting with edge functions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **AI/ML**: Google Gemini 2.0 Flash API
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **Speech**: Web Speech API (TTS)
- **Deployment**: Vercel
- **Version Control**: Git

## 🏗️ Architecture

### API Routes
- `/api/generate-tts` - Handles Gemini text generation and response processing
- Custom hooks for TTS functionality management
- Secure API key management through environment variables

### Components
- `SimpleTTSChat` - Main TTS chat interface component
- `AITTSChat` - Advanced version with enhanced speech recognition
- Custom TTS hook (`useTTS()`) for browser speech synthesis management

### Key Features Implementation
- **RAG System**: Contextual information retrieval for personalized responses
- **Voice Processing**: Real-time text-to-speech conversion
- **State Management**: Efficient React state handling for chat interactions
- **Error Handling**: Comprehensive error management for API calls and speech synthesis

## 🌐 Browser Support

- **Chrome/Chromium** (recommended)
- **Firefox**
- **Safari**
- **Microsoft Edge**

*Note: TTS functionality uses the Web Speech API, which is supported in all modern browsers*

## 🎯 Use Cases

- **Personal Fitness Coaching**: Get AI-powered workout recommendations
- **Voice-Enabled Training**: Hands-free interaction during workouts
- **Fitness Education**: Learn about proper form, nutrition, and training principles
- **Motivation & Support**: Receive encouraging guidance and motivation

## 🔧 Development Highlights

### AI Integration Challenges
- Implementing RAG for contextual fitness advice
- Optimizing prompt engineering for fitness-specific responses
- Managing API rate limits and response times

### Voice Technology Implementation
- Cross-browser compatibility for Web Speech API
- Voice selection and customization features
- Seamless integration of TTS with chat interface

### Performance Optimization
- Next.js 15 App Router for optimal loading times
- Edge function deployment on Vercel
- Efficient state management for real-time interactions

## 🚀 Deployment

The application is deployed on Vercel with the following configuration:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Environment Variables**: Secure API key management
- **Edge Functions**: Optimized for global performance

## 🔮 Future Enhancements

- [ ] Speech Recognition (STT) for voice input
- [ ] Workout tracking and progress analytics
- [ ] Custom workout plan generation
- [ ] Integration with fitness wearables
- [ ] Multi-language support
- [ ] Advanced voice customization options

## 📱 Mobile Experience

The application is fully responsive and optimized for mobile devices, providing a seamless experience across all screen sizes. The voice interaction features work particularly well on mobile devices for hands-free operation during workouts.

## 🎨 Design Philosophy

The application follows a clean, modern design approach with:
- Intuitive user interface for easy navigation
- Accessibility-first design principles
- Dark/light theme compatibility
- Smooth animations and transitions
- Focus on user experience during physical activity

This project showcases the integration of cutting-edge AI technology with practical fitness applications, demonstrating expertise in modern web development, AI API integration, and user experience design. 