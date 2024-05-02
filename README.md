# API Test Automation using Cypress

Welcome to the API Test Automation repository by LVolcko. This repository contains automated test suites designed as solutions to interview task.

## Description

This project aims to demonstrate effective techniques for API testing, ensuring that APIs function correctly under various conditions and conform to their expected specifications.

## Getting Started

### Dependencies

- **Node.js**: A recent version, recommend at least Node.js 12.x.
- **Cypress**: This project uses Cypress for running automated API tests.
- Ensure your system is set up with the required versions of Node.js and Cypress.

### Installing

1. **Clone the repository**
   ```bash
   git clone https://github.com/LVSoftwareTesting/API_test_automation_LVolcko.git
   ```
2. **Navigate to the project directory**
   ```bash
   cd API_test_automation_LVolcko
   ```
3. **Install the necessary packages**
   ```bash
   npm install
   ```

### Executing the Tests

- **Run tests via the command line**
  ```bash
  npx cypress run
  ```
- **Run tests for Test Case 1**
  ```bash
  npm run api:get
  ```
- **Run tests for Test Case 2**
  ```bash
  npm run api:post
  ```
- **Run tests for both test cases**
  ```bash
  npm run api:all
  ```
  
- **Open Cypress Test Runner for interactive testing**
  ```bash
  npx cypress open
  ```

## Project Structure

- `/e2e/api` - Contains both test files.
- `cypress.config.js` - Configuration file for Cypress tests.
- `/fixtures` - Contains files that are used to feed data into tests.

## Authors

- **L. Volcko** - *Initial work* - [LVSoftwareTesting](https://github.com/LVSoftwareTesting)
