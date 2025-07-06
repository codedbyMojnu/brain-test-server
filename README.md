# 🚀 Mojnu6 InterviewPrep Backend API

> **A robust Node.js backend server powering the Mojnu6 InterviewPrep platform with real-time features, gamification, and comprehensive user management**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18+-blue?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4+-green?style=for-the-badge&logo=mongodb)](https://mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.8+-orange?style=for-the-badge&logo=socket.io)](https://socket.io/)
[![License](https://img.shields.io/badge/License-ISC-yellow?style=for-the-badge)](LICENSE)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Real-time Features](#-real-time-features)
- [Authentication & Security](#-authentication--security)
- [Development](#-development)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

The Mojnu6 InterviewPrep Backend API is a comprehensive Node.js server that powers a gamified interview preparation platform. Built with Express.js, MongoDB, and Socket.io, it provides a robust foundation for real-time learning experiences, user management, and interactive gameplay.

### Key Capabilities

- **🔐 Secure Authentication**: JWT-based authentication with role-based access control
- **💬 Real-time Communication**: Socket.io-powered chat rooms and live updates
- **🎮 Gamification Engine**: Points, achievements, streaks, and leaderboards
- **📊 Analytics & Tracking**: Comprehensive user progress and performance metrics
- **🛡️ Security First**: Input validation, rate limiting, and secure data handling
- **📧 Email Integration**: SendGrid-powered notifications and alerts
- **🔧 Admin Dashboard**: Complete content and user management system

## ✨ Features

### 🔐 Authentication & Authorization
- **JWT Token Management**: Secure token-based authentication
- **Role-based Access Control**: User and admin role management
- **Single Admin Restriction**: Only one admin allowed in the system
- **Password Security**: bcrypt hashing with salt rounds
- **Session Management**: Secure session handling and token refresh
- **Password Reset**: Email-based password recovery system

### 🎮 Gamification System
- **Point System**: Earn points for correct answers and daily streaks
- **Achievement Engine**: Unlockable achievements based on milestones
- **Streak Tracking**: Daily login streaks with bonus rewards
- **Leaderboards**: Global, weekly, and monthly rankings
- **Level Progression**: Hierarchical level-based learning system

### 💬 Real-time Features
- **Live Chat Rooms**: Multi-user chat with typing indicators
- **Online Status**: Real-time user presence tracking
- **Instant Notifications**: Live updates for achievements and progress
- **WebSocket Management**: Efficient connection handling and room management

### 📊 User Management
- **Profile System**: Comprehensive user profiles with achievements
- **Progress Tracking**: Detailed learning progress and statistics
- **Wrong Answer Review**: Track and learn from mistakes
- **Transaction System**: Package purchases and approval workflow

### 🔧 Admin Features
- **Content Management**: Add, edit, and delete questions and levels
- **User Analytics**: Monitor user engagement and performance
- **Transaction Approval**: Manage hint point purchases
- **Survey Management**: Collect and analyze user feedback

### 📧 Communication
- **Email Notifications**: SendGrid integration for alerts
- **Welcome Emails**: Automated onboarding communication
- **Password Reset**: Secure email-based password recovery
- **Achievement Notifications**: Celebrate user milestones

## 🛠 Tech Stack

### Core Technologies
- **Node.js** (v18+) - JavaScript runtime environment
- **Express.js** (v4.18+) - Web application framework
- **MongoDB** (v4.4+) - NoSQL database
- **Mongoose** (v8.1+) - MongoDB object modeling

### Real-time & Communication
- **Socket.io** (v4.8+) - Real-time bidirectional communication
- **SendGrid** (v8.1+) - Email service integration

### Security & Validation
- **JWT** (v9.0+) - JSON Web Token authentication
- **bcrypt** (v6.0+) - Password hashing
- **express-validator** (v7.0+) - Input validation
- **CORS** (v2.8+) - Cross-origin resource sharing

### Development Tools
- **nodemon** - Development server with auto-restart
- **dotenv** (v16.4+) - Environment variable management
- **body-parser** (v1.20+) - Request body parsing

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone and navigate to server directory**
   ```bash
   git clone https://github.com/your-username/mojnu6-interviewprep.git
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Access the API**
   - **Base URL**: http://localhost:5000
   - **API Documentation**: http://localhost:5000/api/docs
   - **Health Check**: http://localhost:5000/api/health

### Environment Variables

Create a `.env` file with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/mojnu6-interviewprep

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# SendGrid Configuration
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM_EMAIL=noreply@mojnu6.com

# Frontend URLs (for CORS)
FRONTEND_URL=http://localhost:5173
ALLOWED_ORIGINS=http://localhost:5173,https://mojnu6.vercel.app

# Optional: Redis for session storage
REDIS_URL=redis://localhost:6379
```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/register` | Register new user | ❌ |
| `POST` | `/auth/login` | User login | ❌ |
| `POST` | `/auth/forgot-password` | Request password reset | ❌ |
| `POST` | `/auth/reset-password` | Reset password with token | ❌ |
| `GET` | `/auth/admin-status` | Check if admin exists | ❌ |
| `POST` | `/auth/check-admin` | Check admin existence | ❌ |

### Profile Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/profile/:username` | Get user profile | ❌ |
| `POST` | `/profile` | Create user profile | ✅ |
| `PUT` | `/profile/:username` | Replace profile data | ✅ |
| `PATCH` | `/profile/:username` | Update profile data | ✅ |
| `DELETE` | `/profile/:username` | Delete profile | 🔒 Admin |
| `POST` | `/profile/:username/daily-streak` | Update daily streak | ✅ |
| `PATCH` | `/profile/:username/wrong-answer` | Add wrong answer | ✅ |

### Level & Question Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/levels` | Get all levels | ❌ |
| `POST` | `/levels` | Create new level | 🔒 Admin |
| `PUT` | `/levels/:id` | Update level | 🔒 Admin |
| `DELETE` | `/levels/:id` | Delete level | 🔒 Admin |

### Leaderboard System

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/leaderboard` | Get global leaderboard | ❌ |
| `GET` | `/leaderboard/weekly` | Get weekly rankings | ❌ |
| `GET` | `/leaderboard/monthly` | Get monthly rankings | ❌ |

### Real-time Chat

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/chat/messages/:roomId` | Get chat messages | ✅ |
| `POST` | `/chat/messages` | Send message | ✅ |

### Transaction System

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/transactions` | Create transaction | ✅ |
| `GET` | `/transactions` | Get all transactions | 🔒 Admin |
| `PUT` | `/transactions/:username` | Update transaction | 🔒 Admin |
| `PATCH` | `/transactions/:username` | Update transaction status | 🔒 Admin |

### Survey & Feedback

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/survey` | Submit survey | ❌ |
| `GET` | `/survey` | Get all surveys | 🔒 Admin |

### Puzzle Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/puzzles` | Get all puzzles | ❌ |
| `POST` | `/puzzles` | Create puzzle | ✅ |
| `GET` | `/puzzles/:id` | Get puzzle by ID | ❌ |
| `PUT` | `/puzzles/:id` | Update puzzle | 🔒 Admin |
| `DELETE` | `/puzzles/:id` | Delete puzzle | 🔒 Admin |

### Request/Response Examples

#### User Registration
```bash
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securePassword123",
  "email": "john@example.com"
}
```

#### Admin Registration (First Admin Only)
```bash
POST /api/auth/register
Content-Type: application/json

{
  "username": "admin_user",
  "password": "adminPassword123",
  "email": "admin@example.com",
  "role": "admin"
}
```

#### Check Admin Status
```bash
GET /api/auth/admin-status

Response:
{
  "adminExists": true,
  "message": "Admin exists in the system"
}
```

#### User Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securePassword123"
}
```

#### Update Profile
```bash
PATCH /api/profile/john_doe
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "totalPoints": 150,
  "maxLevel": 5,
  "achievements": ["FIRST_WIN", "STREAK_10"]
}
```

## 🗄 Database Schema

### User Model
```javascript
{
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now }
}
```

### ProfileData Model
```javascript
{
  username: { type: String, required: true, unique: true },
  totalPoints: { type: Number, default: 0 },
  maxLevel: { type: Number, default: 0 },
  hintPoints: { type: Number, default: 15 },
  currentStreak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  achievements: [{ type: String }],
  rewards: [{ type: String }],
  takenHintLevels: [{ type: Number }],
  wrongAnswers: [{
    question: String,
    options: [String],
    answer: String,
    explanation: String,
    levelNumber: Number
  }],
  lastPlayedDate: { type: Date },
  bio: { type: String, default: '' }
}
```

### Level Model
```javascript
{
  question: { type: String, required: true },
  options: [{ type: String }],
  answer: { type: String, required: true },
  explanation: { type: String },
  hint: { type: String },
  category: { type: String },
  difficulty: { type: Number, default: 1 },
  points: { type: Number, default: 1 }
}
```

### ChatMessage Model
```javascript
{
  roomId: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  username: { type: String, required: true },
  message: { type: String, required: true },
  messageType: { type: String, default: 'text' },
  createdAt: { type: Date, default: Date.now }
}
```

### Transaction Model
```javascript
{
  username: { type: String, required: true },
  transactionId: { type: String, required: true },
  selectedPackage: { type: String, required: true },
  approveStatus: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}
```

## 🔄 Real-time Features

### WebSocket Events

#### Client to Server Events
- `join-user-room`: Join personal room for profile updates
- `join-chat-room`: Join chat room with room data
- `leave-chat-room`: Leave chat room
- `send-message`: Send chat message
- `typing`: Typing indicator

#### Server to Client Events
- `user-joined`: User joined chat room
- `user-left`: User left chat room
- `new-message`: New message received
- `online-users`: Current online users in room
- `online-users-updated`: Updated online users list
- `typing`: User typing indicator
- `profile-updated`: Profile data updated

### Connection Management
```javascript
// Join personal room for profile updates
socket.emit('join-user-room', username);

// Join chat room
socket.emit('join-chat-room', {
  roomId: 'general',
  username: 'john_doe',
  userId: 'user_id_here'
});

// Send message
socket.emit('send-message', {
  roomId: 'general',
  userId: 'user_id_here',
  username: 'john_doe',
  message: 'Hello everyone!'
});
```

## 🔐 Authentication & Security

### JWT Token Structure
```json
{
  "userId": "507f1f77bcf86cd799439011",
  "username": "john_doe",
  "role": "user",
  "iat": 1640995200,
  "exp": 1641600000
}
```

### Middleware Functions
- `authenticate`: Verifies JWT token and adds user to request
- `authorize`: Checks user role for admin-only routes
- `validateInput`: Validates request body using express-validator
- `rateLimit`: Prevents API abuse with rate limiting

### Protected Routes
- **Public Routes**: Registration, login, basic GET operations
- **Authenticated Routes**: Profile updates, chat, transactions
- **Admin Routes**: Content management, user analytics

### Security Features
- **Password Hashing**: bcrypt with salt rounds
- **Input Validation**: Comprehensive request validation
- **CORS Protection**: Configured for specific origins
- **Rate Limiting**: API abuse prevention
- **Error Handling**: Secure error responses
- **Admin Restriction**: Only one admin allowed per system

## 💻 Development

### Available Scripts

```bash
# Start development server with nodemon
npm run dev

# Start production server
npm start

# Run tests (if configured)
npm test

# Lint code
npm run lint
```

### Project Structure

```
server/
├── controllers/          # Request handlers and business logic
│   ├── authController.js
│   ├── profileController.js
│   ├── levelController.js
│   ├── chatController.js
│   ├── leaderboardController.js
│   ├── puzzleController.js
│   ├── transactionController.js
│   └── surveyController.js
├── middleware/          # Custom middleware functions
│   ├── authMiddleware.js
│   └── validationMiddleware.js
├── models/             # MongoDB schemas and models
│   ├── User.js
│   ├── ProfileData.js
│   ├── Level.js
│   ├── ChatMessage.js
│   ├── Leaderboard.js
│   ├── Transaction.js
│   ├── Puzzle.js
│   └── Survey.js
├── routes/             # API route definitions
│   ├── authRoutes.js
│   ├── profileRoutes.js
│   ├── levelRoutes.js
│   ├── chatRoutes.js
│   ├── leaderboardRoutes.js
│   ├── puzzleRoutes.js
│   ├── transactionRoutes.js
│   └── surveyRoutes.js
├── config/             # Configuration files
│   ├── achievements.js
│   ├── rewards.js
│   └── sendEmail.js
├── server.js           # Main server file
├── package.json        # Dependencies and scripts
├── postman_collection.json  # API testing collection
└── README.md          # This file
```

### Code Style Guidelines

- **ES6+ Features**: Use modern JavaScript features
- **Async/Await**: Prefer async/await over callbacks
- **Error Handling**: Comprehensive try-catch blocks
- **Input Validation**: Validate all user inputs
- **Documentation**: Comment complex logic
- **Consistent Naming**: Use descriptive variable names

### API Testing

Import the provided Postman collection for comprehensive API testing:

```bash
# Import postman_collection.json into Postman
# All endpoints are pre-configured with examples
```

## 🚀 Deployment

### Production Environment Setup

1. **Environment Variables**
   ```bash
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=your-production-mongodb-uri
   JWT_SECRET=your-production-jwt-secret
   SENDGRID_API_KEY=your-production-sendgrid-key
   ```

2. **Install Dependencies**
   ```bash
   npm install --production
   ```

3. **Start Server**
   ```bash
   npm start
   ```

### Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

### Platform Deployment

#### Render
```bash
# Connect your GitHub repository
# Set environment variables in Render dashboard
# Deploy automatically on push
```

#### Railway
```bash
# Connect your GitHub repository
# Set environment variables in Railway dashboard
# Deploy automatically on push
```

#### Heroku
```bash
# Install Heroku CLI
heroku create your-app-name
heroku config:set NODE_ENV=production
git push heroku main
```

## 🧪 Testing

### Manual Testing
- Use the provided Postman collection
- Test all endpoints with various scenarios
- Verify real-time features with multiple clients

### Automated Testing (Planned)
```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# API tests
npm run test:api
```

### Performance Testing
- Load testing with multiple concurrent users
- Database query optimization
- Memory usage monitoring

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests** (if applicable)
5. **Commit your changes**
   ```bash
   git commit -m "Add: amazing feature description"
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Create a Pull Request**

### Development Guidelines

- **Follow existing code style**
- **Add tests for new features**
- **Update documentation for API changes**
- **Ensure all tests pass before submitting**
- **Use meaningful commit messages**

### Code Review Process

1. **Automated checks** (CI/CD)
2. **Code review** by maintainers
3. **Testing** in staging environment
4. **Merge** after approval

## 📊 Monitoring & Analytics

### Health Checks
- **API Health**: `/api/health`
- **Database Connection**: MongoDB connection status
- **Memory Usage**: Node.js process monitoring

### Logging
- **Request Logging**: All API requests
- **Error Logging**: Comprehensive error tracking
- **Performance Logging**: Response time monitoring

### Metrics
- **User Activity**: Daily active users
- **API Usage**: Endpoint hit counts
- **Performance**: Response times and throughput

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

### Getting Help
- **Documentation**: Check this README and API docs
- **Issues**: Create an issue in the repository
- **Email**: thisismojnu@gmail.com

### Common Issues
- **Connection Errors**: Check MongoDB connection string
- **Authentication Issues**: Verify JWT secret configuration
- **CORS Errors**: Ensure frontend URL is in allowed origins

---

<div align="center">
  <p>Built with ❤️ using Node.js, Express, MongoDB, and Socket.io</p>
  <p>Part of the Mojnu6 InterviewPrep Platform</p>
</div>
