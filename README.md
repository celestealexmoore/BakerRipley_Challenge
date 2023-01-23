# Welcome to your Candidate Code Challenge

A user should be able to click "Show People" and see a list of people along with a "Show Dog Info" button for each person.
Clicking on "Show Dog Info" should render that person's dog's name, breed, and age below the list of people.

## About the project structure:

- db.json - simulates an external server (the backend) that is returning data to the client (index.js). You will not need to make any changes to this file.

- api.js - exports a single class called Api that is imported in index.js. This class simulates an api that is fetching data from an external server (db.json). You will not need to make any changes to this file.

- helpers.js - exports a single class called HTML that is also imported in index.js. This class simply encapsulates most of the DOM manipulation logic needed to implement the functionality of the app.

## Getting Started

First run "npm i" to install all dependencies.

Run "npm run start" to start the web server and open the browser. Hot reload is enabled, so your changes will cause a browser refresh and be available without restarting the server.

These problems must be solved in order.

### Problems:

1. Upon clicking the "Show People" button, you'll notice nothing happens. Determine why and implement a solution.

2. When showing a person's dog's info, a "1" keeps rendering next to each attribute. Find and fix the bug.

3. Now that you have the "Show People" button working and rendering content, click it multiple times. Notice the list gets rendered with every button click. Add functionality to only allow the list to render once.
# BakerRipley_Challenge
