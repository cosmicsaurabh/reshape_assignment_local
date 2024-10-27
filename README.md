# Reshape Assignment

This repository contains the **backend** and **frontend** of the Reshape Assignment project.

## Project Structure

- **backend/** - Azure Functions app that handles API requests.
- **frontend/** - React app that interacts with the backend.

---
## Initial Setup

### Step 1: Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/cosmicsaurabh/reshape_assignment_local.git
cd reshape_assignment_local
```

## Backend Setup (Azure Functions)

The backend folder contains an Azure Functions project for handling the API requests. Follow the steps below to deploy it to Azure.

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed.
- [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local) installed.


1. **Navigate to the backend directory**:

    ```bash
    cd backend
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Configure Environment Variables**:

    Create a `.env` file in the **backend** directory and add your function name (the Azure Function app name):
  ```bash
    AZURE_FUNCTION_NAME=<yourfunction name> //for just local you can put anything (e.g; tempfuncname)
```

4. **Hit Live**
   ```bash
       func start
   ```

#Backend is up and running
now copy the url provided for backend
which is generally like this
```bash
    http://localhost:7071/api/tempfuncname
```

---


## Frontend Setup (React App)

The frontend folder contains a React application that interacts with the Azure Function API. Follow the steps below to run the React app locally.

### Prerequisites

- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/) installed.

### Steps to Run Locally

1. **Navigate to the frontend directory**:

    ```bash
    cd frontend
    ```

2. **Install dependencies**:

    Run the following command to install all necessary dependencies:

    ```bash
    npm install
    ```

3. **Configure Environment Variables**:

    Create a `.env` file in the **frontend** directory and add your backend URL (the Azure Function app URL):

    ```bash
    REACT_APP_BACKEND_BASE_URL=     //(e.g; http://localhost:7071)
    ```
    ```bash
    REACT_APP_GET_USERS_ENDPOINT = api //bydeafult it is api as of now
    ```
    ```bash
    REACT_APP_AZURE_FUNCTION_NAME  = <your specific function name> //which you have used in backend (e.g; tempfuncname)
    ```
    
    

4. **Run the React App**:

    Start the development server by running:

    ```bash
    npm start
    ```


---


---

## License

---
