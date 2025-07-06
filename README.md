# Quiz Application Server

A comprehensive Node.js backend server for a quiz/gaming application with real-time features, user management, and interactive gameplay.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Database Models](#database-models)
- [Real-time Features](#real-time-features)
- [Authentication & Authorization](#authentication--authorization)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This server provides a complete backend solution for a quiz application with features including user authentication, profile management, real-time chat, leaderboards, puzzle management, and transaction processing. Built with Express.js, MongoDB, and Socket.io for real-time communication.

### 🔗 Related Projects

- **Frontend Repository**: [mojnu6-frontend](https://github.com/codedbyMojnu/mojnu6-frontend)
- **Frontend Live**: [mojnu6.vercel.app](https://mojnu6.vercel.app)
- **Server Live**: [brain-test-server.onrender.com](https://brain-test-server.onrender.com)

## 🏗 Project Structure

```
mojnu6-server/
├── controllers/          # Request handlers
│   ├── authController.js
│   ├── chatController.js
│   ├── leaderboardController.js
│   ├── levelController.js
│   ├── profileController.js
│   ├── puzzleController.js
│   ├── surveyController.js
│   └── transactionController.js
├── middleware/          # Custom middleware
│   └── authMiddleware.js
├── models/             # Database models
│   ├── ChatMessage.js
│   ├── Leaderboard.js
│   ├── Level.js
│   ├── ProfileData.js
│   ├── Puzzle.js
│   ├── Survey.js
│   ├── Transaction.js
│   └── User.js
├── routes/             # API route definitions
│   ├── authRoutes.js
│   ├── chatRoutes.js
│   ├── leaderboardRoutes.js
│   ├── levelRoutes.js
│   ├── profileRoutes.js
│   ├── puzzleRoutes.js
│   ├── surveyRoutes.js
│   └── transactionRoutes.js
├── config/             # Configuration files
├── server.js           # Main server file
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## ✨ Features

### Core Features
- **User Authentication**: JWT-based authentication with registration and login
- **Profile Management**: User profiles with achievements, points, and streaks
- **Level System**: Hierarchical level progression with puzzles and challenges
- **Real-time Chat**: Live messaging with typing indicators and online status
- **Leaderboards**: Global, weekly, and monthly rankings
- **Transaction System**: Package purchases and approval workflow
- **Survey System**: User feedback collection
- **Puzzle Management**: Create, solve, and share puzzles

### Advanced Features
- **Real-time Notifications**: Live updates for profile changes and achievements
- **Achievement System**: Unlockable achievements based on user actions
- **Streak Tracking**: Daily login streaks with bonus points
- **Admin Panel**: Comprehensive admin controls for content management
- **Email Notifications**: SendGrid integration for email alerts

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Real-time**: Socket.io
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: Bcrypt
- **Email Service**: SendGrid
- **Validation**: Express-validator
- **CORS**: Cross-origin resource sharing enabled

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codedbyMojnu/mojnu6-server.git
   cd mojnu6-server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/quiz-app

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key

# SendGrid Configuration
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM_EMAIL=noreply@yourapp.com

# Frontend URLs (for CORS)
FRONTEND_URL=http://localhost:5173
```

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login user | No |

### Profile Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/profile/` | Create user profile | Yes |
| GET | `/api/profile/` | Get all profiles | Yes |
| GET | `/api/profile/:username` | Get profile by username | Admin |
| PUT | `/api/profile/:username` | Replace profile | Admin |
| PATCH | `/api/profile/:username` | Update profile | Admin |
| DELETE | `/api/profile/:username` | Delete profile | Admin |

### Level Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/levels/` | Get all levels | No |
| POST | `/api/levels/` | Create new level | Admin |
| PUT | `/api/levels/:id` | Update level | Admin |
| DELETE | `/api/levels/:id` | Delete level | Admin |

### Transaction Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/transactions/` | Create transaction | No |
| GET | `/api/transactions/` | Get all transactions | Admin |
| PUT | `/api/transactions/:username` | Update transaction | Admin |
| PATCH | `/api/transactions/:username` | Update transaction | Admin |

### Puzzle Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/puzzles/` | Get all puzzles | No |
| POST | `/api/puzzles/` | Create puzzle | Yes |
| GET | `/api/puzzles/:id` | Get puzzle by ID | No |
| PUT | `/api/puzzles/:id` | Update puzzle | Admin |
| DELETE | `/api/puzzles/:id` | Delete puzzle | Admin |

### Leaderboard Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/leaderboard/` | Get global leaderboard | No |
| GET | `/api/leaderboard/weekly` | Get weekly leaderboard | No |
| GET | `/api/leaderboard/monthly` | Get monthly leaderboard | No |

### Chat Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/chat/messages/:roomId` | Get chat messages | Yes |
| POST | `/api/chat/messages` | Send message | Yes |

### Survey Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/survey/` | Submit survey | No |
| GET | `/api/survey/` | Get all surveys | Admin |

## 🗄 Database Models

### User Model
- `username`: String (unique)
- `password`: String (hashed)
- `role`: String (user/admin)

### Profile Model
- `username`: String
- `points`: Number
- `level`: Number
- `streak`: Number
- `achievements`: Array
- `bio`: String

### Transaction Model
- `username`: String
- `transactionId`: String
- `selectedPackage`: String
- `approveStatus`: Boolean (default: false)

### Level Model
- `name`: String
- `description`: String
- `difficulty`: Number
- `points`: Number

### Puzzle Model
- `title`: String
- `description`: String
- `solution`: String
- `difficulty`: Number
- `creator`: ObjectId (User reference)

### ChatMessage Model
- `roomId`: String
- `user`: ObjectId (User reference)
- `username`: String
- `message`: String
- `messageType`: String

### Leaderboard Model
- `username`: String
- `points`: Number
- `level`: Number
- `streak`: Number
- `period`: String (global/weekly/monthly)

## 🔄 Real-time Features

### WebSocket Events

#### Client to Server
- `join-user-room`: Join personal room for profile updates
- `join-chat-room`: Join chat room
- `leave-chat-room`: Leave chat room
- `send-message`: Send chat message
- `typing`: Typing indicator

#### Server to Client
- `user-joined`: User joined chat room
- `user-left`: User left chat room
- `new-message`: New message received
- `online-users`: Current online users
- `online-users-updated`: Updated online users list
- `typing`: User typing indicator

## 🔐 Authentication & Authorization

### JWT Token Structure
```json
{
  "userId": "user_id",
  "username": "username",
  "role": "user|admin",
  "iat": "issued_at",
  "exp": "expiration_time"
}
```

### Middleware
- `authenticate`: Verifies JWT token
- `authorize`: Checks user role (admin/user)

### Protected Routes
- Most POST/PUT/DELETE operations require authentication
- Admin-only routes require admin role
- Public routes: registration, login, basic GET operations

## 💻 Development

### Available Scripts

```bash
# Start development server with nodemon
npm run dev

# Start production server
npm start

# Run tests (if configured)
npm test
```

### Code Style

- Use ES6+ features
- Follow RESTful API conventions
- Implement proper error handling
- Use async/await for database operations
- Validate input data with express-validator

## 🚀 Deployment

### Production Setup

1. **Set environment variables**
   ```bash
   NODE_ENV=production
   PORT=5000
   MONGO_URI=your-production-mongodb-uri
   JWT_SECRET=your-production-jwt-secret
   ```

2. **Install dependencies**
   ```bash
   npm install --production
   ```

3. **Start the server**
   ```bash
   npm start
   ```

### Docker Deployment

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation for API changes
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Related Project Licenses

- **Frontend**: [MIT License](https://github.com/codedbyMojnu/mojnu6-frontend/blob/main/LICENSE)
- **Server**: [MIT License](LICENSE)

## 📞 Support

For support and questions:
- Create an issue in the [repository](https://github.com/codedbyMojnu/mojnu6-server)
- Contact the development team
- Check the documentation for common issues

## 🔗 Links

- **Frontend Repository**: [mojnu6-frontend](https://github.com/codedbyMojnu/mojnu6-frontend)
- **Frontend Live**: [mojnu6.vercel.app](https://mojnu6.vercel.app)
- **Server Live**: [brain-test-server.onrender.com](https://brain-test-server.onrender.com)
- **Postman Collection**: [Download Collection](postman_collection.json)

---

**Built with ❤️ using Node.js, Express, and MongoDB**

*Part of the [mojnu6](https://github.com/codedbyMojnu) project ecosystem*
