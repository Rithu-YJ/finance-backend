## 💰 Finance Data Processing & Access Control Backend

---

## 📌 Overview

This project is a backend system designed to manage financial records with structured data handling and role-based access control.

It simulates a real-world finance dashboard where different users interact with financial data based on their permissions. The system focuses on clean API design, maintainable architecture, and secure authentication.

---

## 🚀 Key Features

### 🔐 Authentication & User Management

- User registration and login
- Secure authentication using JSON Web Tokens (JWT)
- Role-based access control (Admin, Analyst, Viewer)
- Protected routes using middleware

---

### 💰 Financial Records Management

- Create financial records (income / expense)
- Retrieve all records
- Update existing records
- Delete records
- Filter records by:
  - Type (income / expense)
  - Category
  - Combined filters (type + category)

---

### 📊 Dashboard & Insights

- Total income calculation
- Total expense calculation
- Net balance
- Category-wise breakdown of transactions

This demonstrates backend aggregation logic beyond basic CRUD operations.

---

## 👥 Roles & Permissions

| Role        | Permissions                                                |
| ----------- | ---------------------------------------------------------- |
| **Admin**   | Full access (create, update, delete records & manage data) |
| **Analyst** | Read-only access to records + dashboard insights           |
| **Viewer**  | Access to dashboard summary only                           |

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Sequelize ORM
- SQLite (used during development for simplicity)
- PostgreSQL (used in deployment for stability and persistence)
- JSON Web Tokens (JWT) for authentication

---

## ⚙️ Project Setup

1. Clone the repository

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node app.js
```

4. Server will run at:

```
http://localhost:3000
```

---

## 🔑 Authentication Guide

All protected routes require a JWT token.

### Steps to test APIs:

1. Call **Login API**
2. Copy the token from response
3. Add it in request headers:

```
Authorization: Bearer <your_token>
```

---

## 📡 API Endpoints

### 👤 User APIs

- `POST /api/users/register` → Register a new user
- `POST /api/users/login` → Login and receive token

---

### 💰 Record APIs

- `POST /api/records` → Create record (**Admin only**)
- `GET /api/records` → Get all records (**Admin / Analyst**)
- `PUT /api/records/:id` → Update record (**Admin only**)
- `DELETE /api/records/:id` → Delete record (**Admin only**)

---

### 🔍 Filtering Examples

- `/api/records?type=income`
- `/api/records?type=expense`
- `/api/records?category=Food`
- `/api/records?type=income&category=Salary`

---

### 📊 Dashboard API

- `GET /api/records/dashboard` → Financial summary

---

## 🧪 API Testing

A ready-to-use Postman collection is included:

```
postman_collection.json
```

### Steps:

1. Import the collection into Postman
2. Run the backend locally or use deployed API
3. Call Login API and copy token
4. Replace `<your_token>` in headers
5. Test all endpoints

---

## 📌 Design Decisions & Assumptions

- SQLite was used initially for simplicity and fast local development
- PostgreSQL was introduced for deployment to ensure data persistence and stability
- Sequelize ORM enables database flexibility and easy migration between databases
- JWT enables stateless authentication
- Role-based access is handled via middleware
- API-first approach (no frontend included)

---

## 🎯 Highlights

- Clean and modular architecture (routes, controllers, models, middleware)
- Proper implementation of role-based access control
- Structured and scalable API design
- Real-world financial data handling logic
- Smooth migration from SQLite to PostgreSQL using ORM
- Fully testable using Postman collection

---

## 📈 Possible Improvements

- Pagination for large datasets
- Advanced search functionality
- Swagger/OpenAPI documentation
- Rate limiting and security enhancements
- Enhanced analytics (monthly trends, recent activity)

---

## 🙌 Final Note

This project focuses on building a reliable and well-structured backend system with clear business logic and access control. It reflects practical backend development skills, adaptability in handling deployment challenges, and a structured engineering approach.

## Project Links

GitHub:- https://github.com/Rithu-YJ/Finance-Backend.git

Render:- https://finance-backend-oliu.onrender.com
