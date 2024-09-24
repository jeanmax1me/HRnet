import React from "react";
export type Employee = {
    id: string;
    firstName: string;
    lastName: string;
    startDate: Date | null;
    department: string;
    dateOfBirth: Date | null;
    street: string;
    city: string;
    state: string;
    zipCode: string;
};
interface EmployeeListProps {
    employees: Employee[];
    onSearch?: (searchTerm: string) => void;
}
export declare const EmployeeList: React.FC<EmployeeListProps>;
export {};
