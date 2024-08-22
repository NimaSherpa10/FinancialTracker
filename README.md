# Income and Expense Tracker

## Overview

The Income and Expense Tracker is a React-based web application designed to help users manage their financial data. It includes features for tracking income and expenses, setting savings goals, and visualizing financial data through charts and tables. The application utilizes React Context for state management and includes functionalities for adding and displaying financial records.

## Features

- **Income Management:** Add, view, and manage different sources of income.
- **Expense Management:** Track and categorize expenses with detailed information.
- **Savings Goals:** Set financial goals, monitor progress, and visualize goal achievements.
- **Data Visualization:** View summarized data and graphical representations of financial information.

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **React Context:** For state management across components.
- **Tailwind CSS:** For styling and responsive design.
- **JSON:** For initial data storage and fetching.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/NimaSherpa10/FinancialTracker.git
   Navigate to the Project Directory:
   ```

```bash
Copy code
cd FinancialTracker
Install Dependencies:
```

```bash
Copy code
npm install
Start the Development Server:
```

```bash
Copy code
npm start
Your application will be available at http://localhost:3000.
```

Usage
Adding Income
Navigate to the Income page.
Fill in the form with the source, amount, category, and date.
Submit the form to add the income record.
Adding Expense
Navigate to the Expense page.
Fill in the form with the source, amount, category, and date.
Submit the form to add the expense record.
Setting Goals
Navigate to the Goals page.
Enter the title, target amount, and current progress.
Submit the form to set a new savings goal.
Viewing Data
View detailed tables of income, expenses, and goals.
Check the dashboard for a summary of account balance and total expenses.
Components
Income: Manages income records and displays them in a table.
Expense: Manages expense records and displays them in a table.
Goals: Manages savings goals and displays them in a table.
MainStatCard: Displays financial summaries such as account balance and total expenses.
ActivityTable: A reusable table component for displaying financial data.
Context Providers
DataContext: Provides state management for income and expense data.
GoalsContext: Provides state management for savings goals.
Hooks
useIncome: Custom hook for fetching income data.
useExpense: Custom hook for fetching expense data.
Contributing
Fork the Repository:
Click the "Fork" button at the top-right of this repository page.

Create a Branch:

```bash
Copy code
git checkout -b feature/your-feature-name
Make Changes and Commit:
```

```bash
Copy code
git add .
git commit -m "Add your commit message"
```

Push Changes:

```bash
Copy code
git push origin feature/your-feature-name
```

Create a Pull Request:
Go to the repository on GitHub and create a pull request from your branch.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any questions or feedback, please contact nimanurusherpa2022@gmail.com.
