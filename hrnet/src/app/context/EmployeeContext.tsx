// context/EmployeeContext.tsx
"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  startDate: Date | null;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
};

type EmployeeContextType = {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
  // Add other methods as needed, e.g., updateEmployee, deleteEmployee
};

const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined
);

export const EmployeeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [employees, setEmployees] = useState<Employee[]>(() => {
    if (typeof window !== "undefined") {
      const savedEmployees = localStorage.getItem("employees");
      if (savedEmployees) {
        return JSON.parse(savedEmployees, (key, value) => {
          if (key === "dateOfBirth" || key === "startDate") {
            return value ? new Date(value) : null;
          }
          return value;
        });
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee: Employee) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { ...employee, id: Date.now().toString() },
    ]);
  };

  // Add other methods here as needed

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (context === undefined) {
    throw new Error(
      "useEmployeeContext must be used within an EmployeeProvider"
    );
  }
  return context;
};
