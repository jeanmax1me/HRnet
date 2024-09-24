// components/EmployeeList.tsx
import { useEmployeeContext } from "@/app/context/EmployeeContext";

export default function EmployeeList() {
  const { employees } = useEmployeeContext();

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.firstName} {employee.lastName} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}
