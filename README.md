# Finance Data Processing & Access Control Backend

---

## Overview

This project is a backend system built to manage financial records with structured data handling, secure authentication, and role-based access control.

It simulates a real-world finance dashboard where multiple types of users interact with financial data based on defined permissions. The system is designed with a strong focus on clean architecture, maintainability, and scalability.

Beyond basic CRUD operations, this project demonstrates how backend systems handle business logic, enforce access control, and provide aggregated insights for dashboard-level analytics.

---

## Problem Statement

In real-world financial systems, different users interact with data in different ways. For example:

- Some users can only view data
- Some can analyze it
- Others can manage and modify it

This project addresses that by implementing:

- Structured data modeling
- Role-based access control (RBAC)
- Secure authentication
- Aggregated data processing for dashboards

---

## Key Features

### Authentication & User Management

- User registration and login system
- Secure password hashing using bcrypt
- Authentication using JSON Web Tokens (JWT)
- Role-based access control with middleware
- Protected routes for sensitive operations

---

### Financial Records Management

- Create financial records (income / expense)
- Retrieve all records with filtering support
- Update and delete records securely
- Structured schema with fields:
  - Amount
  - Type (income / expense)
  - Category
  - Date
  - Notes

---

### Advanced Filtering

Supports flexible query-based filtering:

- Filter by type:
  - `/api/records?type=income`

- Filter by category:
  - `/api/records?category=Food`

- Combined filtering:
  - `/api/records?type=income&category=Salary`

---

### Dashboard & Insights

Designed to simulate backend support for a frontend dashboard.

Includes:

- Total income calculation
- Total expense calculation
- Net balance computation
- Category-wise breakdown of transactions

This demonstrates backend aggregation logic and efficient data processing.

---

## Roles & Permissions

| Role        | Capabilities                                                             |
| ----------- | ------------------------------------------------------------------------ |
| **Admin**   | Full control over records (create, update, delete) and system operations |
| **Analyst** | Read-only access to records and full access to dashboard insights        |
| **Viewer**  | Limited access to dashboard summaries only                               |

Access control is enforced using middleware to ensure secure and consistent behavior across APIs.

---

## Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Web framework for API handling
- **Sequelize ORM** – Database abstraction layer
- **SQLite** – Used during development for simplicity
- **PostgreSQL** – Used in production for scalability and persistence
- **JWT (JSON Web Tokens)** – Authentication mechanism
- **bcryptjs** – Password hashing

---

## Database Strategy

This project demonstrates **practical backend adaptability**:

- Initially built using **SQLite** for fast local development
- Migrated to **PostgreSQL** for deployment

This was achieved using Sequelize ORM without changing business logic or API structure.

This shows:

- Understanding of database abstraction
- Ability to handle real-world deployment challenges
- Clean separation between logic and infrastructure

---

## Project Setup

### 1. Clone the repository

git clone https://github.com/Rithu-YJ/Finance-Backend.git

cd Finance-Backend

### 2. Install dependencies

npm install

### 3. Run the server

node app.js

### 4. Access the API

http://localhost:3000

---

## Authentication Guide

All protected routes require a JWT token.

### Steps:

1. Call **Login API**
2. Copy the token from response
3. Add it to headers:

```
Authorization: Bearer <your_token>
```

---

## API Endpoints

### User APIs

- `POST /api/users/register`
- `POST /api/users/login`

---

### Record APIs

- `POST /api/records` → Create record (**Admin only**)
- `GET /api/records` → Get records (**Admin / Analyst**)
- `PUT /api/records/:id` → Update record (**Admin only**)
- `DELETE /api/records/:id` → Delete record (**Admin only**)

---

### Dashboard API

- `GET /api/records/dashboard`

---

## API Testing

A complete Postman collection is included:

```
postman_collection.json
```

### Steps to use:

1. Import into Postman
2. Set `base_url` (already configured)
3. Call Login API
4. Replace `<your_token>`
5. Test all endpoints directly

---

## Deployment

- Backend is deployed and publicly accessible

### 🔗 Live API:

https://finance-backend-oliu.onrender.com

### 🔗 GitHub Repository:

https://github.com/Rithu-YJ/Finance-Backend.git

---

## Challenges Faced & Solutions

### 1. SQLite Deployment Issue

- SQLite caused compatibility issues in cloud environments
- Solution: Migrated to PostgreSQL

### 2. SSL Connection Errors

- Cloud DB required secure connections
- Solution: Configured Sequelize with SSL

### 3. Environment Variables

- Local vs production mismatch
- Solution: Used `.env` and dynamic configuration

---

## Highlights

- Clean and modular backend architecture
- Proper separation of concerns (routes, controllers, models, middleware)
- Strong role-based access control implementation
- Real-world API design and data handling
- Smooth migration between databases
- Fully testable via Postman

---

## Future Improvements

- Pagination for large datasets
- Advanced filtering & search
- Swagger/OpenAPI documentation
- Rate limiting and security enhancements
- Trend analysis (monthly / weekly insights)

---

## Final Thoughts

This project reflects a structured approach to backend engineering, focusing on real-world practices such as authentication, access control, data processing, and deployment challenges.

It demonstrates not only functionality but also the ability to adapt, debug, and improve systems — which are essential skills for backend development.

---
