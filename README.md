# Backend Developer Assessment Task

## Overview
This project is a payment gateway library built with ExpressJs. It integrates with PayPal and Braintree to handle credit card payments. The library is designed to be easily extendable for additional payment gateways.

## Features
- Payment processing through PayPal and Braintree
- Validation for payment details
- Unit tests for code quality
- MongoDB integration for storing order data

## Prerequisites
- MongoDB (installed and running)
- Braintree credentials including merchant_id, public_key and private_key

### Notes:
- Ensure to fill in the Braintree credentials in the `.env` file.
- You can adjust the README further based on your application's specific details or features.

## Getting Started

### 1. Clone the Repository
git clone https://github.com/usman313/Assessment-Task.git
cd backend-develop-assessment

### 2. Install Node Dependencies
`npm i`

### 3. Create Braintree credentials
- Create a Braintree account and obtain the merchant_id, public_key, and private_key.
- Add these credentials to the `.env` file.
- Following are the variable for Braintree
  a. `BRAINTREE_MERCHANT_ID=braintree_merchant_id`
  b. `BRAINTREE_PUBLIC_KEY=braintree_public_key`
  c. `BRAINTREE_PRIVATE_KEY=braintree_private_key`

### 4. User must have mongodb installed in system
