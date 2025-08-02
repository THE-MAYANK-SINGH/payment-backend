🚀 Payment Dashboard App

💡 Overview
A full-stack payment dashboard built using:
    
    📱 React Native (Expo)
    
    ⚙️ NestJS (Backend)
    
    📊 ChartKit
    
    🔐 JWT Auth
    
    ☁️ Deployed via Railway

🌐 Live Demo
Component	URL
Backend API	https://payment-backend-production-22f3.up.railway.app
Frontend (Expo Go)	Scan QR from npx expo start --tunnel

🔐 Test Credentials

    {
      "username": "testuser",
      "password": "password123"
    }

📦 Features
Secure JWT login

View all payments (/payments)

View payment stats (/payments/stats)

Add a new payment

Revenue chart with ChartKit

Uses expo-secure-store for token storage

🧪 How to Run Locally

Backend

    cd payment-backend
    npm install
    npm run start:dev

Frontend

    cd payment-dashboard
    npm install
    npx expo start --tunnel

🛠 Tech Stack

React Native (Expo)

NestJS (TypeORM)

PostgreSQL (Railway)

JWT + PassportJS

ChartKit

👤 Author
Mayank Singh
GitHub: THE-MAYANK-SINGH
