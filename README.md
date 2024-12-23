# 📦 Product Display Application

## 📖 Overview
This project is a Single Page Application (SPA) built with Vue 3 that interacts with an Express-based GraphQL gateway. It manages and displays a list of products and their associated categories, providing features for search and filtering based on user roles.

## 🛠️ Technologies Used

### Frontend
- **Vue 3**
- **Apollo Client**
- **Tailwind CSS**

### Backend
- **Node.js with Express**
- **GraphQL**
- **Apollo Server**

## 🌟 Features
- **Product Management**: View and manage a list of products.
- **Category Management**: Display associated product categories.
- **Search and Filtering**: Search products by name and filter by category and price range.
- **Role-Based Access**: Different functionalities for admin and regular users.

## 📡 API Endpoints

### Backend Services
- **Products Service**: 
  - **Endpoint**: `http://localhost:4001/graphql`
  - **Key Queries**: 
    - `products`: Returns a list of all products.
  - **Key Mutations**: 
    - `updateProductName`: Updates a product's name (admin only).

- **Categories Service**: 
  - **Endpoint**: `http://localhost:4002/graphql`
  - **Key Queries**: 
    - `categories`: Returns a list of all categories.

### GraphQL Gateway
- **Endpoint**: `http://localhost:4000/graphql`
- **Unified Query**: Search products with filtering capabilities.

## ⚙️ Setup Instructions

### Prerequisites
- Node.js
- npm
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   npm install
   ```
3. Start the backend services:
   ```bash
   # In the backend directory(in gateway service)
   node index.js,
   ```
4. Start the frontend app:
   ```bash
   # In the frontend directory
   npm run dev
   ```
## 🚀 Usage
- **Access the application at http://localhost:5173**
- **Use the search bar to find products and apply filters as needed.**

## 📄 License
This project is licensed under the MIT License.
