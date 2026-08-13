# Health Connect(A Biometric, Analytic, Systemic and Emergency Diagnostic Health Platform)

A modern, responsive web application for discovering free health camps, medical checkups, and emergency services in Indore. Designed and developed by **Govind Nagar**.

## 🚀 Features

- **Live Camp Discovery**: Real-time listing of active and upcoming health camps.
- **Smart Filtering**: Filter by area, test types (Blood Pressure, Suger, X-Ray, etc.), and emergency status.
- **Interactive Maps**: Locate medical camps easily with integrated pigeon-maps.
- **Emergency Directory**: Quick access to Indore's major helpline numbers and hospital facilities.
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing.
- **Developer Signature**: Premium personalized footer highlighting the creator.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion (via `motion/react`)
- **Icons**: Lucide React
- **Maps**: Pigeon Maps

---

## 💻 Local Setup Instructions

Follow these steps to run the project on your local machine:

### 1. Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
- [npm](https://www.npmjs.com/) (Comes with Node.js)

### 2. Clone or Download

If you have Git installed:
```bash
git clone <repository-url>
```
Alternatively, download the project as a ZIP file and extract it.

### 3. Install Dependencies

Navigate to the project root directory in your terminal and run:
```bash
npm install
```

### 4. Environment Variables

Create a `.env` file in the root directory and add the following (you can refer to `.env.example`):
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```
*Note: If the application uses server-side features, you might need to set `GEMINI_API_KEY` without the `VITE_` prefix as well.*

### 5. Run the Development Server

Start the app locally:
```bash
npm run dev
```
The app will be available at: **[http://localhost:3000](http://localhost:3000)**

### 6. Build for Production

To create a production-ready build:
```bash
npm run build
```
The build artifacts will be stored in the `/dist` folder.

---

## 👤 Author

**Govind Nagar**
- **GitHub**: [github.com/govind-codex](https://github.com/govind-codex)
- **LinkedIn**: [linkedin.com/in/govind-nagar-6b16771ab/](https://www.linkedin.com/in/govind-nagar-6b16771ab/)

## 📄 License

This project is created for healthcare awareness in Indore. Please contact the author for licensing details.
