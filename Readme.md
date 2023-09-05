# E-commerce Platform Admin API

This Node.js and MongoDB-based API is designed for managing product inventory on an e-commerce platform. It provides essential endpoints for administrators to create, list, delete, and update product quantities. This API is built using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing Dependencies](#installing-dependencies)
  - [Database Configuration](#database-configuration)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
  - [Create a New Product](#create-a-new-product)
  - [List All Products](#list-all-products)
  - [Delete a Product](#delete-a-product)
  - [Update Product Quantity](#update-product-quantity)
- [Built With](#built-with)
- [License](#license)

## Getting Started

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

Before you begin, make sure you have the following software installed:

- [Node.js](https://nodejs.org/): Install Node.js, which includes npm, the package manager for Node.js.

Install project dependencies:

bash
Copy code
npm install
Database Configuration
Ensure that you have MongoDB installed and running locally or provide a valid MongoDB connection URI.

Set up a MongoDB database named ecommerce or configure the database URI in your project as needed.

Running the Server
Start the Node.js server:

bash
Copy code
npm start
The server will run on http://localhost:3000 by default.

You can now use the API endpoints to manage product inventory.

API Endpoints
Create a New Product
URL: POST /products/create
Description: Create a new product with a name and quantity.
Request Example:
json
Copy code
{
  "name": "Laptop",
  "quantity": 10
}
Response Example:
json
Copy code
{
  "product": {
    "name": "Laptop",
    "quantity": 10
  }
}
List All Products
URL: GET /products
Description: Retrieve a list of all products.
Response Example:
json
Copy code
{
  "products": [
    {
      "id": "64f6ae14f698a36c26bb8294",
      "name": "Laptop",
      "quantity": 10
    },
    {
      "id": "64f6ae14f698a36c26bb8295",
      "name": "Camera",
      "quantity": 5
    }
  ]
}
Delete a Product
URL: DELETE /products/:id
Description: Delete a product by its unique ID.
Response Example:
json
Copy code
{
  "message": "Product deleted"
}
Update Product Quantity
URL: POST /products/:id/update_quantity/?number=10
Description: Update the quantity of a product (increment or decrement).
Response Example:
json
Copy code
{
  "product": {
    "id": "64f6ae14f698a36c26bb8294",
    "name": "Laptop",
    "quantity": 20
  },
  "message": "Updated successfully"
}
Built With
Node.js - JavaScript runtime
Express.js - Web application framework
MongoDB - NoSQL database