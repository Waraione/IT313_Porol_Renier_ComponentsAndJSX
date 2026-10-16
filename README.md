IT313 Student Roster Card Renderer

Description

This Expo React Native application displays IT313 students using reusable student cards. It demonstrates functional components, props, destructuring, JSX expressions, conditional rendering, and list keys.

Components

StudentCard: Receives the student's name, course, units, and full-load status through props. It conditionally displays the Full Load label.
StudentRoster: Stores the student array, calculates the student count using students.length, and renders cards using .map() with each student's unique ID as the key.

Technologies

React Native
Expo
TypeScript
JSX



How to Run

Install dependencies with npm install.
Start the development server with npx expo start.
Open the application using Expo Go or a supported emulator.
Learning Objectives

Understand reusable components, props and destructuring, JSX expressions, conditional rendering, list rendering, and stable React keys.