# API Testing Project
This project is an automation testing suite for API endpoints using Cypress. It contains various test cases to validate the responses and status codes from the API.

## Project Structure

- `StatusCode200.cy.js`
- `StatusCode201.cy.js`
- `StatusCode204.cy.js`
- `StatusCode401.cy.js`
- `StatusCode403.cy.js`
- `StatusCode404.cy.js`
- `StatusCode422.cy.js`

## Setup Instructions

To set up the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd <repository_name>
2. **Install dependencies**
    ```bash
   npm install
   ```
## Running Tests
You can run the tests using Cypress in two different ways: through the Cypress Test Runner or via the terminal.
3. ### Using Cypress Test Runner
To open Cypress Test Runner and run tests in the browser, use the following command:
    ```bash
    npx cypress open
    ```
This will open the Cypress Test Runner, where you can select and run individual test files.    
4. ### Running Tests via Terminal    
To run tests directly in the terminal without opening the browser, use the following command:
    ```bash
    npx cypress run --spec 'cypress/e2e/API/{testFileName}'
    ```
Replace {testFileName} with the name of the test file you want to run. For example, to run the StatusCode200.cy.js test file, use:
    ```bash
    npx cypress run --spec 'cypress/e2e/API/StatusCode200.cy.js'    
    ```
## Test Descriptions
### StatusCode200.cy.js
This test file validates responses with a 200 OK status code.
### StatusCode201.cy.js
This test file checks responses with a 201 Created status code.
### StatusCode204.cy.js
This test file ensures responses with a 204 No Content status code.
### StatusCode401.cy.js
This test file verifies responses with a 401 Unauthorized status code.
### StatusCode403.cy.js
This test file tests responses with a 403 Forbidden status code.
### StatusCode404.cy.js
This test file confirms responses with a 404 Not Found status code.
### StatusCode422.cy.js
This test file validates responses with a 422 Unprocessable Entity status code.
## Contributing
If you want to contribute to this project, please fork the repository, create a new branch, make your changes, and submit a pull request.

# Additional Information
### For more information on Cypress and how to use it, refer to the official Cypress documentation. Happy testing! :)




