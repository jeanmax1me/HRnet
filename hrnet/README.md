

# HRnet Conversion Project

## Objective
Convert an existing jQuery-based HR management application (HRnet) to a modern React application.

## Main Tasks
1. Convert the entire HRnet project to React.
2. Convert one of the four existing jQuery plugins to a React component.
3. Replace the remaining three jQuery plugins with React components.
4. Perform Lighthouse performance tests comparing the old and new applications.

## Specific Requirements

### Application Conversion
- Create new React versions of the "Create Employee" and "Employee List" pages.
- Implement a state management system (replacing local storage).
- Ensure consistent styling throughout the application.
- Follow a functional programming paradigm in React (avoid classes).
- Write modular, maintainable code with small, self-contained functions.

### Plugin Conversion
- Convert only one jQuery plugin to a React component.
- Publish the converted component as a separate package on npm or GitHub.
- Focus on converting only the core UI functionality of the chosen plugin.
- Replace the other three jQuery plugins with React equivalents (custom or from libraries).

### Documentation
- Provide documentation for the converted React component, including:
  - A comprehensive README
  - Descriptions of props and their usage

### Performance Testing
- Conduct Lighthouse performance audits for both versions:
  - Original jQuery application
  - New React version
- Measure quantifiable data such as:
  - Page load times
  - Network calls
- Ensure to build the application before conducting the audit.

## Deliverables
- GitHub repository for the entire converted React project
- GitHub repository for the converted jQuery plugin (as a separate React component)
- Published npm package of the converted React component (or GitHub package alternative)
- Lighthouse performance reports for both the original and converted applications

## Additional Notes
- Modernizing the design is welcome but not mandatory.
- Unit testing for React code is optional if time constraints exist.
- Ensure 100% React and 0% jQuery in the final application.


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
