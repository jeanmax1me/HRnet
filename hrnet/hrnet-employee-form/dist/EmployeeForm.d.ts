import React from "react";
import "react-datepicker/dist/react-datepicker.css";
export type State = {
    name: string;
    abbreviation: string;
};
export type Department = string;
type FormData = {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    department: string;
};
interface EmployeeFormProps {
    onSubmit: (employee: FormData & {
        id: string;
        dateOfBirth: Date | null;
        startDate: Date | null;
    }) => void;
    Modal: React.ComponentType<{
        isOpen: boolean;
        onClose: () => void;
        children: React.ReactNode;
    }>;
    states: State[];
    departments: Department[];
}
export declare const EmployeeForm: React.FC<EmployeeFormProps>;
export {};
