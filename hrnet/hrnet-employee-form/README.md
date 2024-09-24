# EmployeeForm Component

A flexible and reusable React component for creating new employee records in HR management applications.

## Features

- ✏️ Input fields for comprehensive employee details
- 📅 Date pickers for birth date and start date
- 🏙️ Customizable states and departments
- 🎉 Modal confirmation on successful submission

## Installation

```bash
npm install hrnet-employee-form
```

## Usage

```jsx
import React from 'react';
import { EmployeeForm } from 'hrnet-employee-form';

const states = [
  { name: "California", abbreviation: "CA" },
  { name: "New York", abbreviation: "NY" },
];

const departments = ["HR", "Engineering", "Sales", "Marketing"];

const App = () => {
  const handleEmployeeSubmit = (employee) => {
    console.log("New Employee:", employee);
  };

  return (
    <EmployeeForm 
      onSubmit={handleEmployeeSubmit}
      Modal={YourModalComponent}
      states={states}
      departments={departments}
    />
  );
};
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `onSubmit` | Function | Handles form submission |
| `Modal` | Component | React component for confirmation modal |
| `states` | Array | State objects `{ name: string, abbreviation: string }` |
| `departments` | Array | Department names (strings) |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

For support, please open an issue in the GitHub repository or contact [support@example.com](mailto:support@example.com).
