
# Polymer Project


## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (Download from [here](https://nodejs.org/))
- **npm** (Comes bundled with Node.js)

## Installation
1. **Install Bower globally**:
   ```bash
   npm install -g bower
   ```
2. **Install Node.js dependencies**:
   This will install all necessary packages listed in `package.json`.
   ```bash
   npm install
   ```

3. **Install Bower dependencies**:
   This will install all front-end dependencies as defined in `bower.json`.
   ```bash
   bower install
   ```
3. **Install Polymer CLI (Optional)**:
   This will install all front-end dependencies as defined in `bower.json`.
   ```bash
   npm install -g polymer-cli
   ```
## Running the Project

Once the dependencies are installed, you can run the project using one of the following methods:

### Using Polymer CLI

If you're using the Polymer CLI, you can run the following command to serve the project locally:
```bash
polymer serve
```

This will start a local server, and you can view the project by navigating to `http://localhost:8080` (or the port shown in your terminal).
