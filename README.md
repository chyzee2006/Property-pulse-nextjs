# 🏡 Property Pulse

A modern real estate and property management platform built with Next.js.  
Property Pulse allows users to create, manage, and explore property listings with secure authentication and cloud-based image storage.

---

## 🚀 Overview

Property Pulse is a full-stack real estate platform designed to simplify property listing and management.  
Users can securely sign in, create property listings, upload images, and manage their posts in a structured and scalable system.

This project demonstrates authentication, protected routes, database integration, cloud media storage, and full CRUD functionality.

---

## ✨ Features

- 🔐 Secure Authentication (Google OAuth)
- 🛡 Protected Routes & Middleware
- 🏘 Create, Edit & Delete Property Listings
- 📸 Image Upload with Cloud Storage
- 🗂 MongoDB Database Integration
- ⚡ Server-side Rendering & API Routes (Next.js)
- 📱 Responsive UI

---

## 🛠 Tech Stack

### Frontend
- **Next.js**
- **React**
- **CSS / Tailwind CSS**

### Authentication
- **NextAuth.js**
- **Google OAuth Provider**

### Backend / Database
- **MongoDB**
- **Mongoose (ODM for MongoDB)**

### Media Storage
- **Cloudinary** (for property image uploads and hosting)

---

## 🔐 Authentication Flow

Authentication is handled using **NextAuth.js** with Google OAuth.

- Users sign in with Google
- Session management handled by NextAuth
- Middleware protects restricted routes
- Authenticated users can create and manage listings

---

## 🗄 Database Structure

MongoDB is used to store:

- User accounts
- Property listings
- Listing metadata (price, location, description, images, etc.)

Mongoose is used for:
- Schema definition
- Data validation
- Database queries

---

## ☁️ Image Handling

Property images are uploaded and stored using **Cloudinary**.  
This ensures:

- Fast global delivery
- Optimized image performance
- Secure cloud storage

---

## 📂 Project Structure

```
/app or /pages
/components
/models
/utils
/lib
/public
```

- **Models** – Mongoose schemas
- **API Routes** – Server-side logic
- **Components** – Reusable UI elements
- **Middleware** – Route protection

---

## 🌍 Live Deployment

The application is deployed on **Vercel**.

🔗 **Live Demo:** 


Environment variables required:

```
MONGODB_URI=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

---

## 📌 What This Project Demonstrates

- Full-stack development with Next.js
- Secure authentication with OAuth
- RESTful API implementation
- Database modeling with Mongoose
- Cloud-based media management
- Protected route handling with middleware

---

## 👨‍💻 Author

Built by Chigbata-Fidelis Chizoba 
Full-stack Developer | React & Next.js Enthusiast