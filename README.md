<p align="center">
  <img src="/overView.png" width="1440" height="750" />
</p>

# 🪷 EcoTrack — Sustainable Living Community

**EcoTrack** is a community-driven platform where users can join sustainability challenges, track environmental impact, share eco-tips, and explore local green events. The platform focuses on measurable, real-world environmental contribution.

## 🌿 About the Project

EcoTrack helps individuals take actionable steps towards sustainable living by combining community engagement, challenge tracking, and knowledge sharing. Users can:

- Participate in environmental challenges.
- Track their personal and community impact.
- Share eco-tips and upvote helpful ideas.
- Browse local green events.
- Maintain a profile with activity history.

## 🎯 Project Goals

- Build a single-page application (SPA) with both public and protected routes.
- Implement secure Firebase authentication (Email/Password + Google).
- Enable users to join, track, and complete eco-challenges.
- Display dynamic community statistics like total CO₂ saved and plastic reduced.
- Showcase tips and local sustainability events.
- Ensure responsive, clean, and modern UI design.

## Key Features

- Dynamic eco-challenge listing and joining

- Real-time impact tracking (participants, CO₂ saved)

- User dashboard to manage joined challenges

- Firebase authentication system

- Share and upvote eco-tips

- Local green events listing

- Protected dashboard and private routes

## Tech Stack

**Frontend:** React.js, Tailwind CSS, Firebase Authentication
**Backend:** Node.js, Express.js, MongoDB
**Tools:** JWT, Git, Vite, Axios, Context API

## Dependencies

{
"react": "^18.x",
"react-router-dom": "^6.x",
"firebase": "^12.x",
"axios": "^1.x",
"tailwindcss": "^3.x",
"express": "^4.x",
"mongodb": "^6.x"
}

## Installation and Setup

1. Clone the repository

git clone https://github.com/sohelrana07/eco-track-client-10.git
cd eco-track
npm install

## Install dependencies

npm install

## Create .env file

VITE_apiKey=your_firebase_key
VITE_authDomain=your_domain
VITE_projectId=project_id
VITE_serverUrl=http://localhost:5000

## Run the project

npm run dev

## 🗂️ Layout Structure

### Header / Navbar

- Logo + EcoTrack text (left)
- Links: Home | Challenges | My Activities
- Authentication Buttons:
  - Logged out → Login | Register
  - Logged in → User avatar dropdown: Profile, My Activities, Logout
- Mobile: Hamburger menu for navigation and auth actions

### Footer

- © 2025 EcoTrack
- Quick links: About, Contact
- Optional social media icons
- Accessibility and privacy note

### Layouts

- Public layout: Home, Challenges listing
- Dashboard layout (protected): My Activities, Profile

## 🏠 Home Page Features

### Dynamic Sections (from database)

- Hero Banner: Featured challenge carousel with CTA
- Active Challenges: Grid of 4–6 ongoing challenges
- Recent Tips: Latest 5 community tips
- Upcoming Events: 4 upcoming events

### Static Sections

- Why Go Green? — Benefits of sustainable living
- How It Works — 3 steps: Join a challenge → Track progress → Share tips

## 🔒 Authentication

### Login Page

- Email / Password + Google login
- Redirect to intended route on success
- Inline toast notifications for errors
- Loading state on submit

### Register Page

- Name, Email, Photo URL, Password
- Password validation:
  - 1 uppercase, 1 lowercase, 1 special character, min 6 chars
- Inline error messages
- Redirect to intended route on success
- Loading state on submit

### Routes & Access Control

- / — Home (public)
- /challenges — Browse challenges (public)
- /challenges/:id — Challenge details (public)
- /challenges/add — Add new challenge (protected)
- /challenges/join/:id — Join challenge (protected)
- /my-activities — User dashboard (protected)
- /my-activities/:id — User dashboard (protected)
- /login, /register, /forgot-password — Public
- /\* — 404 page

## 🛠️ Backend & CRUD Operations

### MongoDB Collections

**Challenges**
jsonData

{
"\_id": "ObjectId",
"title": "Plastic-Free July",
"category": "Waste Reduction",
"description": "Avoid single-use plastic for one month",
"duration": 30,
"target": "Reduce plastic waste",
"participants": 0,
"impactMetric": "kg plastic saved",
"createdBy": "admin@ecotrack.com",
"startDate": "2024-07-01",
"endDate": "2024-07-31",
"imageUrl": "https://example.com/image.jpg"
}

**UserChallenges**
{
"\_id": "ObjectId",
"userId": "userId",
"challengeId": "ObjectId",
"status": "Not Started",
"progress": 0,
"joinDate": "ISODate"
}

**Tips**
{
"title": "How to compost at home",
"content": "Simple steps for home composting...",
"category": "Waste Management",
"author": "user@example.com",
"authorName": "Green User",
"upvotes": 25,
"createdAt": "2024-01-20T10:30:00Z"
}

```

**Events**
{
"title": "Community Clean-up Day",
"description": "Join neighborhood clean-up event",
"date": "2024-02-15T09:00:00Z",
"location": "Central Park",
"organizer": "user@example.com",
"maxParticipants": 50,
"currentParticipants": 35
}

## Contact

**Live URL:** https://eco-track-assignment-10.web.app/
**Email:** mdsohelrana20047@gmail.com

```
