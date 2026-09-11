<div align="center">

# 🧠 AI Resume Analyzer & Job Matcher

### *Your Personal AI Recruiter — Land Your Dream Job Faster*

<br/>

### 🚀 **[▶ View Live Demo](https://ai-resume-analyzer-mh5n-five.vercel.app/)**

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://prisma.io)
[![Gemini](https://img.shields.io/badge/Gemini_AI-2.5-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://ai-resume-analyzer-mh5n-five.vercel.app/)

<br/>

![AI Resume Analyzer](./assets/landing-page.jpg)

<br/>

[Live Demo](https://ai-resume-analyzer-mh5n-five.vercel.app/) · [Get Started](#-getting-started) · [Features](#-core-features) · [Architecture](#-system-architecture)

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
-


---

## 🚀 Live Demo

<div align="center">

**🚀 [View Live Demo Here](https://ai-resume-analyzer-mh5n-five.vercel.app/)**

Try the full app — upload a resume, get an AI-powered ATS score, generate cover letters, and explore career growth insights. No installation required.

| | URL |
| :--- | :--- |
| 🌐 **Frontend** | (https://ai-resume-analyzer-mh5n-five.vercel.app/) |
| ⚙️ **Backend API** | (https://ai-resume-analyzer-woad-eight-46.vercel.app/) |

</div>

---

## 💡 The Problem & Solution

> **78% of resumes are rejected by ATS systems before a human ever reads them.**

Job seekers spend hours crafting resumes — only to be silently filtered out. They never know *why* they're rejected, which keywords are missing, or how to tailor their resume for each role. The feedback loop is completely broken.

**AI Resume Analyzer** fixes this. It's a full-stack SaaS platform that acts as your **personal AI recruiter**. Upload your resume once and instantly get a multi-dimensional ATS score, the exact keywords you're missing, AI-generated cover letters,  and a complete career growth roadmap. All powered by Google Gemini AI. No guesswork. No more rejections.

---

## 🖼 App Showcase

### 🏠 1. Landing Page & Value Proposition
<img src="./assets/landing-page.jpg" width="100%" />

### 🔐 2. Frictionless Authentication (Sign In & Register)
<p align="center">
  <img src="./assets/auth1.jpg" width="49%" alt="Sign In Page" />
  <img src="./assets/auth2.jpg" width="49%" alt="Create Account Page" />
</p>

### 📊 3. User Dashboard & History
<img src="./assets/dashboard.jpg" width="100%" />

### 🧠 4. Multi-Dimensional ATS Scoring
<img src="./assets/analysis.jpg" width="100%" />

### 🎯 5. Job Match & Skill Gap Analysis
<img src="./assets/job-match.jpg" width="100%" />

### ✍️ 6. AI Content Generator (Cover Letters & Bios)
<img src="./assets/content-generator.jpg" width="100%" />

### 🚀 7. Career Growth Hub & Projects
<img src="./assets/career-hub.jpg" width="100%" />

### 👤 8. User Profile & Preferences
<img src="./assets/profile.jpg" width="100%" />

---

## 🚀 Core Features

| Feature | Description |
| :------ | :---------- |
| **📊 Multi-Dimensional ATS Scoring** | Scored across Grammar, Impact & Action Verbs, Formatting, and Keyword Density — each with animated progress cards |
| **🧠 Dynamic Domain Classification** | Auto-detects Corporate vs. Academic CVs — academic CVs aren't penalized for length or publications |
| **🎯 Semantic Job Matching** | Paste a JD or URL — semantic matching catches synonyms (Azure = Microsoft Azure, Collaborated = Collaboration) |
| **✍️ AI Content Generation** | Cover letters, LinkedIn summaries, professional bios — with proper sign-off, no markdown artifacts, clean PDF export |

| **🚀 Career Growth Hub** | AI career roadmaps (Current → Next Role) + complexity-aware project suggestions |
| **🔍 Resume Visualizations** | Skills word cloud, top technologies chart, highlighted resume preview with toggleable categories |
| **📄 PDF Reports** | Branded A4 exports with sanitized text, smart page breaks, and multi-page support |
| **🛡️ Google OAuth + JWT** | Frictionless sign-in with Google or email/password with stateless JWT architecture |
| **🔄 PLG Onboarding** | Interactive landing page dropzone → fake scan → blurred teaser → signup conversion funnel |
| **⭐ In-App Feedback** | Floating 5-star feedback widget on every dashboard page |

---

## 🛠 Tech Stack

### Frontend

| Technology | Version | Purpose |
| :--------- | :------ | :------ |
| React | 19 | UI framework |
| TypeScript | 5.9 | Type safety |
| Vite | 8 | Build tool & dev server |
| TailwindCSS | 4 | Utility-first styling |
| Framer Motion | 12 | Animations & transitions |
| Recharts | 3 | Data visualization (charts) |
| Zustand | 5 | Lightweight state management |
| React Router | 7 | Client-side routing |
| @react-oauth/google | Latest | Google sign-in button |

### Backend & AI

| Technology | Version | Purpose |
| :--------- | :------ | :------ |
| Node.js | 22 | JavaScript runtime |
| Express | 4 | HTTP server framework |
| Prisma | 6 | ORM for MongoDB |
| MongoDB Atlas | — | Cloud database |
| Gemini 2.5 Flash | Latest | AI analysis & generation |
| Natural.js | 8 | NLP: TF-IDF, Porter Stemmer |
| google-auth-library | Latest | OAuth token verification |
| Cheerio | Latest | Web scraping (job URLs) |
| jsPDF + autoTable | Latest | Server-quality PDF generation |



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
        MW["Middlewares"]
        Ctrl["Controllers"]
        Svc["Service Layer"]
    end

    subgraph AI["AI Layer"]
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
    Ctrl --> Svc
    Svc --> Gemini
    Svc --> NLP
    Svc --> OCR
    Svc --> Prisma
    Prisma --> Mongodb
    Store -.-> GoogleAPI
```

### Request Lifecycle

```
User clicks "Analyze Resume"
  → React component → Axios (JWT header attached)
  → Express Route → authenticate() middleware
  → Controller → Service → Gemini AI + NLP Engine
  → Response built → deductCredit() called
  → X-AI-Credits-Remaining header set
  → Frontend receives data + updates UI + shows toast


## 🗃 Database Schema

```mermaid
erDiagram
    USER ||--o{ RESUME : uploads
    RESUME ||--o| ANALYSIS : has

    USER {
        string id PK
        string name
        string email UK
        string password
        string role
        boolean isPro
        datetime createdAt
    }

    RESUME {
        string id PK
        string userId FK
        string fileUrl
        string fileName
        int atsScore
        datetime createdAt
    }

    ANALYSIS {
        string id PK
        string resumeId FK
        int skillsScore
        int experienceScore
        int educationScore
        int projectsScore
        int jobMatchScore
        string_array keywords
        string_array missingKeywords
        string_array suggestions
    }

    FEEDBACK {
        string id PK
        string userId FK
        int rating
        string comment
        datetime createdAt


## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- [MongoDB Atlas](https://mongodb.com/atlas) account (free tier works)
- [Gemini API Key](https://ai.google.dev) from Google AI Studio

🎉 Open **http://localhost:3000** and start analyzing resumes!

---

## 🔐 Environment Variables

### Backend — `backend/.env`

```bash
# Server
NODE_ENV=development
PORT=5000

# Database
DATABASE_URL=mongodb+srv://your-user:your-pass@cluster.mongodb.net/ai_resume_analyzer

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRES_IN=7d
GOOGLE_CLIENT_ID=your-google-oauth-client-id.apps.googleusercontent.com

# File Uploads
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880

# CORS
CORS_ORIGIN=http://localhost:3000

# AI
GEMINI_API_KEY=your-gemini-api-key

FRONTEND_URL=http://localhost:3000



### Frontend — `frontend/.env`

```bash
VITE_APP_NAME=AI Resume Analyzer
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id.apps.googleusercontent.com
```

---

## 🗂 Folder Structure

```
ai-resume-analyzer/
├── frontend/                 # React 19 + TypeScript + Vite + TailwindCSS
│   ├── src/
│   │   ├── api/              # Axios client & API wrappers
│   │   ├── components/       # Reusable UI (charts, layout, gates)
│   │   ├── pages/            # 15+ pages (dashboard, auth, landing)
│   │   ├── hooks/            # Zustand auth store, theme
│   │   ├── utils/            # PDF generation, sanitization
│   │   └── routes/           # Protected routes & router config
│   └── index.html
│
├── backend/                  # Node.js + Express + Prisma + Gemini AI
│   ├── prisma/               # MongoDB schema (User, Resume, Analysis)
│   ├── src/
│   │   ├── controllers/      # Auth & Analysis endpoints
│   │   ├── services/         # AI engine (2500+ LOC), LLM prompts, NLP
│   │   ├── middlewares/      # JWT auth,  error handler
│   │   ├── routes/           # 20+ REST API routes
│   │   ├── validators/       # Zod request schemas
│   │   └── server.ts         # Express entry point
│   └── uploads/              # Resume file storage
│
├── assets/                   # README screenshots
└── README.md
```

---

## 📁 Project Structure

<details>
<summary><strong>Click to expand full tree</strong></summary>

```
ai-resume-analyzer/
│
├── backend/
│   ├── prisma/
│   │   └── schema.prisma              # User, Resume, Analysis, Feedback
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.ts            # Prisma client singleton
│   │   │   ├── env.ts                 # Environment variables
│   │   │   └── multer.ts              # File upload config
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts     # Login, Register, Google OAuth
│   │   │   └── analysis.controller.ts # 30+ AI analysis endpoints
│   │   ├── helpers/
│   │   │   ├── jwt.ts                 # Token generation & verification
│   │   │   ├── password.ts            # Bcrypt hashing
│   │   │   └── response.ts            # Standardized API responses
│   │   ├── middlewares/
│   │   │   ├── auth.ts                # JWT authentication guard
│   │   │   ├──           
│   │   │   └── errorHandler.ts        # Global error + 429 handling
│   │   ├── routes/
│   │   │   ├── auth.routes.ts         # /api/auth/*
│   │   │   ├── analysis.routes.ts     # /api/analysis/* (20+ routes)
│   │   │   ├──       
│   │   │   └── feedback.routes.ts     # /api/feedback
│   │   ├── services/
│   │   │   ├── analysis.service.ts    # Core engine (2500+ lines)
│   │   │   ├── auth.service.ts        # User authentication logic
│   │   │   ├── llm.service.ts         # Gemini AI prompts (750+ lines)
│   │   │   └── nlp.engine.ts          # TF-IDF, stemming, classification
│   │   ├── validators/                # Zod request schemas
│   │   └── server.ts                  # Express app entry point
│   └── uploads/                       # Resume file storage
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── client.ts              # Axios + interceptors (401/403/429)
│   │   │   ├── auth.ts                # Auth API calls
│   │   │   └── resume.ts              # 25+ analysis API methods
│   │   ├── components/
│   │   │   ├── layout/                # Sidebar, Navbar, DashboardLayout
│   │   │   ├── charts/                # AtsScore, SkillsRadar, JobMatchBar
│   │   │   ├── ui/                    # Button, Card, Badge, Skeleton
│   │   │   ├── ProGate.tsx            # Credit-based feature gating
│   │   │   ├── FeedbackModal.tsx      # Floating feedback widget
│   │   │   └── SocialAuthButtons.tsx  # Google OAuth button
│   │   ├── pages/
│   │   │   ├── Home.tsx               # Landing page (PLG dropzone)
│   │   │   
│   │   │   
│   │   │   ├── NotFound.tsx           # Custom 404
│   │   │   ├── auth/                  # Login, Register
│   │   │   └── dashboard/             # 15+ dashboard pages
│   │   ├── hooks/                     # useAuth (Zustand), useTheme
│   │   ├── data/                      # Sample resume mock data
│   │   ├── utils/                     # PDF gen, sanitization, constants
│   │   └── routes/                    # Router config + ProtectedRoute
│   └── index.html
│
├── assets/                            # README screenshots
│   ├── landing-page.jpg
│   ├──
│   ├── auth.jpg
│   ├── dashboard.jpg
│   ├── analysis.jpg
│   ├── job-match.jpg
│   ├── career-hub.jpg
│   └──
│
└── README.md
```
