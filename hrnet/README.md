# HRNet

## Description

HRNet is a modern, React-based Human Resources management application designed to streamline employee data management. This project is a conversion of a legacy jQuery application to a more maintainable and performant React version.

## Features

- Create new employee records
- View current employee list
- Responsive design for various screen sizes
- Improved performance and user experience compared to the legacy version
- Usage of created npm package : https://www.npmjs.com/package/hrnet-employee-form

## Installation

To get started with HRNet, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/jeanmax1me/HRnet.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hrnet
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

## Usage

HRNet consists of two main pages:

1. Home page (`/`): Contains the form to create a new employee
2. Employee List page (`/employee-list`): Displays a table of all current employees

### Creating a New Employee

1. On the home page, fill out the form with the employee's details
2. Click the "Create Employee" button
3. A success message will appear if the employee was created successfully

### Viewing Current Employees

1. Click on the "View Current Employees" link on the home page
2. You will be redirected to the Employee List page
3. Use the search, sort, and pagination features to navigate the employee data

## Component Documentation

### EmployeeForm

The `EmployeeForm` component is responsible for rendering and handling the form to create a new employee.

#### Usage Employee Form

```jsx
import EmployeeForm from '@/app/components/EmployeeForm';

function CreateEmployeePage() {
  return (
    <div>
      <h1>Create New Employee</h1>
      <EmployeeForm />
    </div>
  );
}
```

#### State and Props

The `EmployeeForm` component doesn't accept any props as it uses React Context for state management. It manages the following state internally:

- `firstName`: String - The employee's first name
- `lastName`: String - The employee's last name
- `dateOfBirth`: Date - The employee's date of birth
- `startDate`: Date - The employee's start date
- `street`: String - The street address of the employee
- `city`: String - The city of the employee
- `state`: String - The state of the employee
- `zipCode`: String - The zip code of the employee
- `department`: String - The department of the employee

#### Key Functions

- `onSubmit(data)`: Handles form submission. It creates a new employee object and adds it to the global state using the `useEmployeeContext` hook.

### EmployeeList

The `EmployeeList` component displays a table of all current employees with sorting, searching, and pagination features.

#### Usage Employee List

```jsx
import EmployeeList from '@/app/components/EmployeeList';

function EmployeeListPage() {
  return (
    <div>
      <h1>Current Employees</h1>
      <EmployeeList />
    </div>
  );
}
```

#### State&Props

The `EmployeeList` component doesn't accept any props as it uses React Context for state management. It manages the following state internally:

- `employees`: Array - List of all employees retrieved from the global state
- `searchTerm`: String - Current search term for filtering employees
- `sortColumn`: String - Current column used for sorting
- `sortDirection`: String - Current sort direction ('asc' or 'desc')
- `currentPage`: Number - Current page number for pagination

#### Functions

- `handleSearch(term)`: Updates the search term and filters the employee list
- `handleSort(column)`: Updates the sort column and direction
- `handlePageChange(pageNumber)`: Updates the current page for pagination

## Contributing

Contributions to HRNet are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
