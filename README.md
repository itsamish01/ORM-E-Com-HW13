## ORM E-Commerce Backend
This project is an e-commerce backend application built using Node.js, Express, and Sequelize ORM. It allows you to manage your e-commerce platform by providing RESTful API endpoints for managing products, categories, and tags.

## Table of Contents

* Installation
* Usage
* API Endpoints
* Testing
* Contributing
* License

## Installation

1. Clone the Repo to you local machine

* git clone: https://github.com/itsamish01/ORM-E-Com-HW13

2. Change Directory to project folder

* cd ORM-E-Com-HW13

3. Install Dependecies

* npm install

4. Setup your enviorment variables and create a .env file with this information:

* DB_USER=your_mysql_username
* DB_PASSWORD=your_mysql_password
* DB_NAME=ecommerce_db

5. Create necessary database and tables by running the following command:

* npm run seed

* Use a REST client like Insomnia or Postman to interact with the API endpoints.


## API Endpoints

# Products
* GET /api/products: Get all products.
* GET /api/products/:id: Get a specific product by its ID.
* POST /api/products: Create a new product.
* PUT /api/products/:id: Update a product by its ID.
* DELETE /api/products/:id: Delete a product by its ID.

## Categories
* GET /api/categories: Get all categories.
* GET /api/categories/:id: Get a specific category by its ID.
* POST /api/categories: Create a new category.
* PUT /api/categories/:id: Update a category by its ID.
* DELETE /api/categories/:id: Delete a category by its ID.

## Tags
* GET /api/tags: Get all tags.
* GET /api/tags/:id: Get a specific tag by its ID.
* POST /api/tags: Create a new tag.
* PUT /api/tags/:id: Update a tag by its ID.
* DELETE /api/tags/:id: Delete a tag by its ID.

## Testing
* To test the API endpoints, use a REST client like Insomnia or Postman and follow the steps in the Usage section.

## Contributing
If you'd like to contribute to this project, please follow the standard fork and pull request workflow.

* Fork the repository.
* Clone your forked repository to your local machine.
* Create a new branch for your changes.
* Commit and push your changes to your forked repository.
* Open a pull request.

## License
This project is open source and available under the ISC License.