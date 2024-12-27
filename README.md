# Tip Calculator

This is a simple Tip Calculator application built with React, Tailwind and TypeScript. The application allows users to calculate the tip amount and total amount per person based on the bill amount, number of people, and selected tip percentage.

## Screenshots

Here are some screenshots of the Tip Calculator application:

1. **Home Screen**:
   ![Home Screen](screenshots/image-3.jpg)

2. **Active States**:
   ![Active States](screenshots/image-1.jpg)

3. **Calculation Result**:
   ![Calculation Result](screenshots/image-2.jpg)

4. **Desktop Preview**:
   ![Destop Preview](screenshots/image-4.jpg)

5. **Mobile Design**:
   ![Mobile Design](screenshots/image-5.jpg)

## Features

- **Bill Amount Input**: Users can enter the total bill amount.
- **Tip Percentage Selection**: Users can select a predefined tip percentage or enter a custom tip percentage.
- **Number of People Input**: Users can enter the number of people to split the bill.
- **Error Handling**: The application provides error messages for invalid inputs, such as empty fields, zero values, and negative values.
- **Reset Functionality**: Users can reset all inputs and calculations with a single click.
- **Responsive Design**: The application is designed to work seamlessly on various devices, including desktops, tablets, and mobile phones.

## Components

- **CalculatorWrapper**: The main component that manages the state and logic for the application.
- **BillAmount**: A component for entering the bill amount.
- **PercentageList**: A component for selecting or entering the tip percentage.
- **PeopleAmount**: A component for entering the number of people.
- **DisplayResult**: A component for displaying the calculated tip amount and total amount per person.

## Usage

1. Enter the total bill amount in the "Bill" input field.
2. Select a tip percentage from the predefined options or enter a custom tip percentage in the "Custom" input field.
3. Enter the number of people in the "Number of people" input field.
4. Press "Enter" to perform the calculation
5. If any input is invalid, an error message will be displayed.
6. Click the "RESET" button to clear all inputs and calculations.
