# Getting Started with your Flask / React project

This project uses Create-React-App, Flask and SQLite.

## Python environment

This repo uses a project-local virtual environment at `.venv` in the project root.

Create it once from the project root:

`python3 -m venv .venv`

Activate it:

`source .venv/bin/activate`

Install backend dependencies into the project environment:

`python -m pip install -r api/requirements.txt`

In VS Code, select `.venv/bin/python` as the interpreter for this workspace. If imports still show as unresolved after installing dependencies, run `Python: Restart Language Server` or `Developer: Reload Window` from the Command Palette.

## Available Scripts

You will need to run two scripts in two separate terminal tabs / windows.

One is for the Flask server, and the other is for the React server.

---

## Install dependencies

### For Flask

From the project root, activate the local environment:

`source .venv/bin/activate`

Then install all dependencies:

`python -m pip install -r api/requirements.txt`

### For React

In your other Terminal window, in the root of the project directory, run `npm install` (only the first time)

---

## Run the servers

### For Flask

From the root of the project, run:

`npm run start-api`

This script runs Flask from the repo-level `.venv` and points Flask at `api/api.py`.

This will run the Flask server on port 5000

### For the React server

From the root of the project, run `npm run start`

This will start your React dev server on port 3000.

You should now be able to see the app in the browser.

---

## To stop the app:

### For Flask

Use `ctrl + C` to stop the server.
Run `deactivate` to stop the virtual environment.

### For React

Use `ctrl + C` to stop the server.

---

Have fun.
