<div align="center">

# 🧠 AI Resume Analyzer & Job Matcher

### *Your Personal AI Recruiter — Land Your Dream Job Faster*

<br/>

### 🚀 **[▶ View Live Demo](https://ai-resume-analyzer-mh5n-five.vercel.app/)**

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io)
[![Gemini](https://img.shields.io/badge/Gemini_AI-2.5-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

<br/>

![AI Resume Analyzer](./assets/landing-page.jpg)

<br/>

[Live Demo](https://ai-resume-analyzer-mh5n-five.vercel.app/) ·
[Get Started](#-getting-started) ·
[Features](#-core-features) ·
[Architecture](#-system-architecture)

</div>

---

## 📑 Table of Contents

- [Live Demo](#-live-demo)
- [The Problem & Solution](#-the-problem--solution)
- [App Showcase](#-app-showcase)
- [Core Features](#-core-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Database Schema](#-database-schema)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Folder Structure](#-folder-structure)
- [Project Structure](#-project-structure)

---

## 🚀 Live Demo

<div align="center">

**🚀 [View Live Demo Here](https://ai-resume-analyzer-mh5n-five.vercel.app/)**

</div>

Try the full app — upload a resume, get an AI-powered ATS score, generate cover letters, and explore personalized career growth insights.

| Service | URL |
| :--- | :--- |
| 🌐 **Frontend** | [ai-resume-analyzer-mh5n-five.vercel.app](https://ai-resume-analyzer-mh5n-five.vercel.app/) |
| ⚙️ **Backend API** | [ai-resume-analyzer-woad-eight-46.vercel.app](https://ai-resume-analyzer-woad-eight-46.vercel.app/) |

---

## 💡 The Problem & Solution

> **78% of resumes are rejected by ATS systems before a human ever reads them.**

Job seekers spend hours crafting resumes — only to be silently filtered out. They often don't know why they're rejected, which keywords are missing, or how to tailor their resume for each role.

**AI Resume Analyzer** solves this problem by acting as a **personal AI recruiter**.

Upload a resume and get:

- Multi-dimensional ATS scoring
- Missing keyword identification
- Semantic job matching
- AI-generated cover letters and professional bios
- Resume visualizations
- Personalized career growth insights
- Downloadable PDF reports

Powered by **Google Gemini AI**, the platform provides actionable insights to help users improve their resumes and career prospects.

---

## 🖼 App Showcase

### 🏠 1. Landing Page & Value Proposition

<img src="./assets/landing-page.jpg" width="100%" alt="Landing Page" />

### 🔐 2. Frictionless Authentication (Sign In & Register)

<p align="center">
  <img src="./assets/auth1.jpg" width="49%" alt="Sign In Page" />
  <img src="./assets/auth2.jpg" width="49%" alt="Create Account Page" />
</p>

### 📊 3. User Dashboard & History

<img src="./assets/dashboard.jpg" width="100%" alt="User Dashboard" />

### 🧠 4. Multi-Dimensional ATS Scoring

<img src="./assets/analysis.jpg" width="100%" alt="ATS Analysis" />

### 🎯 5. Job Match & Skill Gap Analysis

<img src="./assets/job-match.jpg" width="100%" alt="Job Match and Skill Gap Analysis" />

### ✍️ 6. AI Content Generator

<img src="./assets/content-generator.jpg" width="100%" alt="AI Content Generator" />

### 🚀 7. Career Growth Hub & Projects

<img src="./assets/career-hub.jpg" width="100%" alt="Career Growth Hub and Projects" />

### 👤 8. User Profile & Preferences

<img src="./assets/profile.jpg" width="100%" alt="User Profile and Preferences" />

---

## 🚀 Core Features

| Feature | Description |
| :--- | :--- |
| **📊 Multi-Dimensional ATS Scoring** | Evaluates Grammar, Impact & Action Verbs, Formatting, and Keyword Density with detailed scoring and visual insights |
| **🧠 Dynamic Domain Classification** | Automatically identifies the resume's professional domain and adapts analysis accordingly |
| **🎯 Semantic Job Matching** | Compares resumes with job descriptions or job URLs using semantic matching and identifies relevant skills and gaps |
| **✍️ AI Content Generation** | Generates professional cover letters, LinkedIn summaries, and bios tailored to the user's resume |
| **🚀 Career Growth Hub** | Provides AI-powered career roadmaps and personalized project suggestions for skill development |
| **🔍 Resume Visualizations** | Displays skill clouds, technology charts, resume statistics, and an AI-highlighted resume preview |
| **📄 PDF Reports** | Generates clean, professional PDF reports with structured resume analysis and insights |
| **🛡️ Google OAuth + JWT** | Supports secure authentication using Google OAuth as well as email/password with JWT-based sessions |
| **🔄 PLG Onboarding** | Interactive landing-page onboarding experience with resume upload and guided analysis preview |
| **⭐ In-App Feedback** | Allows users to submit ratings and feedback directly from the application |

---

## 🛠 Tech Stack

### Frontend

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| React | 19 | UI framework |
| TypeScript | 5.9 | Type-safe development |
| Vite | 8 | Build tool and development server |
| TailwindCSS | 4 | Utility-first styling |
| Framer Motion | 12 | Animations and transitions |
| Recharts | 3 | Data visualization |
| Zustand | 5 | Lightweight state management |
| React Router | 7 | Client-side routing |
| @react-oauth/google | Latest | Google OAuth authentication |

### Backend & AI

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| Node.js | 22 | JavaScript runtime |
| Express | 4 | Backend API framework |
| Prisma | 6 | ORM for MongoDB |
| MongoDB Atlas | — | Cloud database |
| Gemini 2.5 Flash | Latest | AI-powered resume analysis and content generation |
| Natural.js | 8 | NLP processing, TF-IDF, and stemming |
| google-auth-library | Latest | Google OAuth token verification |
| Cheerio | Latest | Job URL parsing and web scraping |
| jsPDF + autoTable | Latest | PDF report generation |

---
## 🏗 System Architecture

```mermaid
flowchart TB

    subgraph Client["Frontend - React + Vite"]
        UI["Pages & Components"]
        Store["Zustand Auth Store"]
        Axios["Axios Client"]
    end

    subgraph Server["Backend - Express.js"]
        Routes["API Routes"]
        MW["Authentication & Error Handling"]
        Ctrl["Controllers"]
        Svc["Service Layer"]
    end

    subgraph AI["AI & NLP Layer"]
        Gemini["Gemini 2.5 Flash"]
        NLP["NLP Engine"]
        OCR["Gemini Vision OCR"]
    end

    subgraph DB["Data Layer"]
        Prisma["Prisma ORM"]
        Mongo[("MongoDB Atlas")]
    end

    subgraph Ext["External Services"]
        GoogleAPI["Google OAuth"]
    end

    UI --> Axios
    Axios -->|"REST + JWT"| Routes
    Routes --> MW
    Routes --> Ctrl
    Ctrl --> Svc

    Svc --> Gemini
    Svc --> NLP
    Svc --> OCR
```

### Request Lifecycle

```text
User
  ↓
React UI
  ↓
Axios Client
  ↓
Express API
  ↓
Authentication Middleware
  ↓
Controller
  ↓
Service Layer
  ↓
AI / Database / External Services
  ↓
Response
  ↓
React UI
```



🔐 Environment Variables
Backend — backend/.env
NODE_ENV=development
PORT=5000

DATABASE_URL=mongodb+srv://your-user:your-password@cluster.mongodb.net/ai_resume_analyzer

JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

GOOGLE_CLIENT_ID=your-google-oauth-client-id.apps.googleusercontent.com

UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880

CORS_ORIGIN=http://localhost:3000

GEMINI_API_KEY=your-gemini-api-key

FRONTEND_URL=http://localhost:3000

ADMIN_EMAIL=your-admin-email@gmail.com
    Svc --> Prisma
    Prisma --> Mongo

    Store -.-> GoogleAPI


Frontend — frontend/.env
VITE_APP_NAME=AI Resume Analyzer
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id.apps.googleusercontent.com

📁 Folder Structure
ai-resume-analyzer/
├── frontend/
│   ├── src/
│   │   ├── api/              # Axios client and API wrappers
│   │   ├── components/       # Reusable UI components and layouts
│   │   ├── pages/            # Landing, authentication and dashboard pages
│   │   ├── hooks/            # Authentication and theme hooks
│   │   ├── utils/            # PDF generation and utilities
│   │   └── routes/           # Protected routes and router configuration
│   └── index.html
│
├── backend/
│   ├── prisma/               # Prisma schema for MongoDB
│   ├── src/
│   │   ├── controllers/      # Authentication and analysis controllers
│   │   ├── services/         # AI, analysis and NLP services
│   │   ├── middlewares/      # Authentication and error handling
│   │   ├── routes/            # REST API routes
│   │   ├── validators/        # Zod request validation
│   │   └── server.ts          # Express server entry point
│   └── uploads/               # Uploaded resume files
│
├── assets/                    # README screenshots
├── .gitignore
└── README.md

🗂️ Project Structure
<details> <summary><strong>Click to expand full tree</strong></summary>
ai-resume-analyzer/
│
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   ├── env.ts
│   │   │   └── multer.ts
│   │   │
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   └── analysis.controller.ts
│   │   │
│   │   ├── helpers/
│   │   │   ├── jwt.ts
│   │   │   ├── password.ts
│   │   │   └── response.ts
│   │   │
│   │   ├── middlewares/
│   │   │   ├── auth.ts
│   │   │   └── errorHandler.ts
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── analysis.routes.ts
│   │   │   └── feedback.routes.ts
│   │   │
│   │   ├── services/
│   │   │   ├── analysis.service.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── llm.service.ts
│   │   │   └── nlp.engine.ts
│   │   │
│   │   ├── validators/
│   │   └── server.ts
│   │
│   └── uploads/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   ├── auth.ts
│   │   │   └── resume.ts
│   │   │
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── charts/
│   │   │   ├── ui/
│   │   │   ├── FeedbackModal.tsx
│   │   │   └── SocialAuthButtons.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── NotFound.tsx
│   │   │   ├── auth/
│   │   │   └── dashboard/
│   │   │
│   │   ├── hooks/
│   │   ├── data/
│   │   ├── utils/
│   │   └── routes/
│   │
│   └── index.html
│
├── assets/
├── .gitignore
└── README.md
</details>
"The best way to predict the future is to build it."
<div align="center">
Made with ❤️ and ☕ — If you found this useful, a ⭐ on the repo means the world!

</div> ```


