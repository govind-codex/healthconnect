# 🏥 Health Connect

### A Biometric, Analytic, Systemic & Emergency Diagnostic Health Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
</p>

<p align="center">
  <strong>Discover healthcare. Find health camps. Respond to emergencies.</strong>
</p>

<p align="center">
  A modern healthcare discovery platform designed to help people find nearby health camps, medical checkups, emergency services, and healthcare facilities in Indore.
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-technology">Technology</a> •
  <a href="#-routes">Routes</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-future-roadmap">Roadmap</a>
</p>

---

## 🌐 Live Project

<p align="center">

### 🚀 Health Connect

**A healthcare discovery platform focused on accessibility, awareness, and emergency assistance.**

</p>

> **Note:** The current version is a frontend/demo application. Camp modifications are persisted through browser `localStorage`, and administrator/organizer authentication is simulated through demo role selection.

---

## ✨ Why Health Connect?

Finding the right healthcare service at the right time can be difficult.

Health Connect aims to simplify this by bringing essential healthcare information into one responsive platform.

```text
                    🏥 HEALTH CONNECT
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
   🩺 Health Camps    🚨 Emergency       📍 Nearby
                       Services          Facilities
        │                  │                  │
        └──────────────────┼──────────────────┘
                           ▼
                  👤 Better Accessibility
```

The platform is designed around three core principles:

**Accessibility** → Make healthcare information easier to discover.

**Awareness** → Help users discover upcoming health camps and medical services.

**Emergency Readiness** → Provide quick access to emergency contacts and facilities.

---

# 🚀 Features

## 🩺 Health Camp Discovery

Discover approved and upcoming healthcare camps through a centralized interface.

* Browse health camps
* View upcoming events
* Explore available medical services
* Filter camps by area
* Filter by service
* Filter by camp status
* View detailed camp information

---

## 📍 Interactive Location Mapping

Health camps can be visualized geographically using an interactive map.

```text
        ┌─────────────────────────────────┐
        │          🗺️ CAMP MAP            │
        │                                 │
        │       📍 Camp A                 │
        │                  📍 Camp B       │
        │                                 │
        │             📍 Camp C            │
        │                                 │
        └─────────────────────────────────┘
```

Powered by **Pigeon Maps**, allowing users to understand where healthcare services are located.

---

## 🚨 Emergency Services

The emergency section provides quick access to:

* Emergency helplines
* Nearby hospitals
* Emergency facilities
* Important healthcare information

The goal is simple:

> **When time matters, essential information should be easy to find.**

---

## 👨‍💼 Administrator Dashboard

Administrators can manage health camp listings through the demo dashboard.

### Available Operations

* ➕ Add camp
* ✏️ Edit camp
* ✅ Approve camp
* ❌ Reject camp
* 🗑️ Delete camp
* 📊 Review camp listings

---

## 🏥 Organizer Dashboard

Camp organizers have a dedicated interface for managing their health camp listings.

The current demo architecture separates organizer and administrator workflows to provide a foundation for future role-based access control.

---

## 💾 Local Data Persistence

Camp modifications are stored using browser `localStorage`.

```text
User Action
     │
     ▼
Update Camp
     │
     ▼
React State
     │
     ▼
localStorage
     │
     ▼
Browser Persistence
```

This allows the demo application to retain changes even after refreshing the page.

> Production deployment should replace this mechanism with a secure backend database and authenticated API layer.

---

# 🎨 Responsive Design

Health Connect is designed for:

| Device            | Support |
| ----------------- | ------- |
| 📱 Mobile         | ✅       |
| 📱 Tablet         | ✅       |
| 💻 Desktop        | ✅       |
| 🖥️ Large Screens | ✅       |

The interface uses responsive layouts, modern cards, smooth transitions, and motion-based interactions to create a polished healthcare experience.

---

# 🧩 Platform Architecture

```text
┌───────────────────────────────────────────────┐
│                 HEALTH CONNECT                │
└───────────────────────┬───────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
   👤 Public         👨‍💼 Admin       🏥 Organizer
   Interface         Dashboard        Dashboard
        │               │               │
        └───────────────┼───────────────┘
                        ▼
               📦 Application State
                        │
                        ▼
                  💾 localStorage
```

---

# 🛠️ Technology

### Frontend

* ⚛️ **React 19**
* 🔷 **TypeScript**
* ⚡ **Vite 6**
* 🎨 **Tailwind CSS 4**
* 🎬 **Motion for React**

### UI & Interaction

* Lucide React
* Responsive layouts
* Animated transitions
* Interactive cards
* Role-based demo flows

### Maps

* 🗺️ Pigeon Maps

### Routing

* React Router

### Storage

* Browser `localStorage`

---

# 📂 Main Routes

| Route        | Purpose                       |
| ------------ | ----------------------------- |
| `/`          | 🏠 Landing Page               |
| `/camps`     | 🩺 Health Camp Discovery      |
| `/emergency` | 🚨 Emergency Services         |
| `/about`     | ℹ️ About Platform             |
| `/contact`   | 📞 Contact                    |
| `/login`     | 🔐 Demo Role Selection        |
| `/admin`     | 👨‍💼 Administrator Dashboard |
| `/organizer` | 🏥 Organizer Dashboard        |

---

# ⚡ Getting Started

## Prerequisites

Make sure you have:

* Node.js **18+**
* npm

## Installation

```bash
git clone <your-repository-url>

cd health-connect

npm install
```

## Start Development Server

```bash
npm run dev
```

The application runs on:

```text
http://localhost:3000
```

Open the address in your browser.

---

# 📜 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run TypeScript checking  |
| `npm run clean`   | Remove generated files   |

---

# 🏗️ Production Build

Create the production build:

```bash
npm run build
```

Preview it locally:

```bash
npm run preview
```

The generated production files will be available inside:

```text
dist/
```

---

# 🔐 Current Demo vs Production

Health Connect currently focuses on the frontend experience and healthcare discovery workflow.

### Current Demo

```text
React
  │
  ├── Mock Camp Data
  ├── Demo Authentication
  ├── localStorage
  └── Client-side Dashboards
```

### Future Production Architecture

```text
                    ┌──────────────┐
                    │   React UI   │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ REST / GraphQL│
                    │     API      │
                    └──────┬───────┘
                           │
             ┌─────────────┼─────────────┐
             │             │             │
             ▼             ▼             ▼
        🔐 Auth       🏥 Camp DB     🚨 Emergency
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                    🗄️ Database
```

A production version should introduce:

* Secure authentication
* Backend APIs
* Database persistence
* Role-based authorization
* Server-side validation
* Audit logs
* Real-time notifications
* Verified healthcare providers
* Secure user data handling

---

# 🔮 Future Roadmap

Health Connect can evolve from a camp-discovery application into a broader digital healthcare platform.

### 🧬 Healthcare & Cancer Awareness

* Latest cancer research updates
* Cancer prevention awareness
* Vaccine and immunization information
* Verified medical news
* Screening reminders
* Preventive healthcare reminders

### 🔔 Smart Notifications

* Upcoming health camp reminders
* Appointment reminders
* Health screening notifications
* Emergency alerts
* Location-based camp notifications

### 🤖 Intelligent Healthcare Discovery

Future versions could provide:

* Personalized camp recommendations
* Service-based healthcare search
* AI-assisted healthcare information discovery
* Smart reminder systems
* Healthcare accessibility analytics

> AI-generated medical information should be clearly labeled and should not replace professional medical advice.

---

# 📊 Potential Future Analytics

A production analytics dashboard could provide insights such as:

```text
┌─────────────────────────────────────────┐
│         HEALTHCARE ANALYTICS            │
├─────────────────────────────────────────┤
│                                         │
│  🩺 Total Camps          128             │
│  👥 People Reached      4,820           │
│  📍 Active Locations    24              │
│  🏥 Organizations       37              │
│                                         │
└─────────────────────────────────────────┘
```

Possible metrics:

* Camp attendance
* Most requested medical services
* Geographic healthcare demand
* Camp participation trends
* Emergency facility accessibility
* Preventive screening coverage

---

# 🛡️ Healthcare Data & Security

A real healthcare deployment would require significantly stronger security than the current demo.

Important production requirements include:

* HTTPS
* Authentication and authorization
* Secure session management
* Input validation
* API security
* Database access controls
* Encryption of sensitive information
* Audit logging
* Privacy-compliant data handling

**The current project should not be used to store real patient medical records.**

---

# 🎯 Project Vision

> **Make essential healthcare information easier to discover, understand, and access.**

Health Connect is designed as a foundation for a more connected healthcare ecosystem where users can discover health camps, locate medical facilities, access emergency information, and receive timely healthcare-related reminders.

---

# 👨‍💻 Author

## Govind Nagar

**Backend Developer | Full-Stack Developer | Computer Science Engineering**

### Connect

* 💻 GitHub: `github.com/govind-codex`
* 🔗 LinkedIn: `linkedin.com/in/govind-nagar-6b16771ab/`

---

# 📄 License

This project was created for **healthcare awareness and educational purposes**.

For licensing or project-related inquiries, please contact the author.

---

<p align="center">

### 🏥 Health Connect

**Connecting people with healthcare opportunities.**

<br/>

⭐ If you find this project useful, consider giving it a star.

</p>

<p align="center">
  Built with ❤️ using React, TypeScript & Tailwind CSS
</p>
