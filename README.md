# Next.js + Expo + Firebase Cloud Messaging (FCM) Integration

![Project Architecture](https://i.imgur.com/JQ6GhvL.png)  
*A complete demo combining Next.js web app with Google Sign-In and Expo Android app with native FCM push notifications*

## Features
- **Next.js Web App**
  - Google Sign-In with Firebase Authentication
  - Material UI (MUI) components
- **Expo Android App**
  - Embedded Next.js app via WebView
  - Native Firebase Cloud Messaging (FCM)
  - M1/M2 Mac compatibility
- **Shared Infrastructure**
  - Single Firebase project for both platforms
  - Cross-platform user authentication

## Prerequisites
- Node.js v18+
- npm v9+
- Android Studio (for emulator)
- Firebase account
- Apple Silicon (M1/M2) specific tools:
  - JDK 11 (Zulu distribution recommended)
  - ARM64 Android system images

## Project Structure

├── nextjs-app/ # Next.js web application
├── expo-app/ # Expo Android application
├── .gitignore
└── README.md

## Setup Instructions

### 1. Firebase Configuration
1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com/)
2. Add both **Web** and **Android** apps to your project
3. Download `google-services.json` for Android

### 2. Next.js App Setup
```bash
cd nextjs-app
npm install
cp .env.local.example .env.local

