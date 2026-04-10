## PORTFOLIO WEBSITE
### Hello, I am Shivam and this is my Port Folio Website.
- This website in itself is a complete MERN stack based authentication project.
- I will be adding pages and links to my other projects here.

<br>

## Authentication can be by-passed:
### Click on Login button and you will find option to bypass the authentication at the bottom of the window.

<br>

# MERN Authentication Project

A full-stack authentication system built with the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates core authentication concepts including user registration, login, email verification, and password reset functionality.

## 🎯 Overview

This is a comprehensive MERN authentication project designed to solidify full-stack development concepts. It provides a secure authentication system with email verification, password reset functionality, and JWT-based session management. The frontend is built with React and Vite for optimal performance, while the backend uses Express.js with MongoDB for data persistence.

## 🛠️ Tech Stack

### Frontend
- **React** (v19.1.0) - UI library
- **Vite** (v7.0.4) - Modern build tool and development server
- **React Router DOM** (v7.7.0) - Client-side routing
- **Axios** (v1.10.0) - HTTP client for API calls
- **Tailwind CSS** (v4.1.11) - Utility-first CSS framework
- **React Toastify** (v11.0.5) - Notification system
- **ESLint** - Code linting

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** (v5.1.0) - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** (v8.16.4) - MongoDB object modeling
- **JWT** (JsonWebToken v9.0.2) - Token-based authentication
- **Bcryptjs** (v3.0.2) - Password hashing
- **Nodemailer** (v7.0.5) - Email sending
- **Cookie Parser** (v1.4.7) - Cookie middleware
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing
- **Dotenv** (v17.2.0) - Environment variable management
- **Nodemon** (v3.1.10) - Development server auto-reload

## ✨ Features

### Authentication & Security
- **User Registration** - Create new accounts with email and password
- **User Login** - Secure login with JWT token generation
- **Password Hashing** - Passwords are hashed using bcryptjs (10 salt rounds)
- **JWT Authentication** - Token-based authentication with 7-day expiration
- **HTTP-Only Cookies** - Secure cookie storage for tokens
- **CORS Protection** - Configured CORS with credential support

### Email Verification
- **OTP-Based Verification** - One-time passwords for account verification
- **Email Templates** - Customized email templates for verification
- **Time-Expiring OTPs** - OTPs expire after a set duration
- **Verification Status Tracking** - Account verification status in user profile

### Password Management
- **Password Reset Flow** - Secure password reset with OTP verification
- **Reset OTP** - Time-limited OTP for password reset
- **Email Notifications** - Users receive reset emails with OTP

### User Management
- **User Profile Data** - Retrieve authenticated user information
- **Account Status** - Track verification status and authentication state
- **Session Persistence** - Check authentication status on app load

## 📡 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Authentication Routes (`/auth`)

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/auth/register` | Register a new user | ❌ |
| POST | `/auth/login` | Login user | ❌ |
| POST | `/auth/bypass` | Bypass authentication (dev mode) | ❌ |
| POST | `/auth/logout` | Logout user | ❌ |
| GET | `/auth/is-auth` | Check authentication status | ✅ |
| POST | `/auth/send-verify-otp` | Send email verification OTP | ✅ |
| POST | `/auth/verify-account` | Verify account email | ✅ |
| POST | `/auth/send-reset-otp` | Send password reset OTP | ❌ |
| POST | `/auth/reset-password` | Reset password | ❌ |

### User Routes (`/user`)

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| GET | `/user/data` | Get authenticated user data | ✅ |

## 🏗️ Project Architecture

### Frontend Architecture

The frontend follows a component-based architecture with:

- **App Context** (`AppContext.jsx`) - Global state management for authentication status and user data
- **Pages** - Route-specific components (Home, Login, Email Verification, Password Reset)
- **Components** - Reusable UI components (Header, Navbar)
- **Axios Instance** - Pre-configured with backend URL and credentials

### Backend Architecture

The backend follows an MVC (Model-View-Controller) pattern:

- **Models** - MongoDB schema definitions (User model)
- **Controllers** - Business logic (Auth and User controllers)
- **Routes** - API endpoint definitions
- **Middlewares** - Authentication middleware for protected routes
- **Config** - Configuration files for email and database

### Data Flow

1. **User Registration/Login** → Backend validates and creates JWT token → Token stored in HTTP-only cookie
2. **Protected Routes** → Frontend sends request with token → Middleware validates token
3. **Email Verification** → Backend generates OTP → Sends via email → User verifies via frontend
4. **Password Reset** → User requests reset → OTP sent via email → User resets password with OTP

## 📝 Development Notes

- **Security**: Passwords are hashed with bcryptjs using 10 salt rounds
- **CORS**: Configured to work with credentials for secure cookie transmission
- **JWT Expiration**: Tokens expire in 7 days
- **Email Service**: Uses Brevo SMTP for reliable email delivery
- **Vite**: Fast refresh and bundling for frontend development
- **Database**: Mongoose auto-creates model if it doesn't exist, preventing duplicate model errors
