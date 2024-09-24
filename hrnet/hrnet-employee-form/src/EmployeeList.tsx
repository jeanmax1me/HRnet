// EmployeeList.tsx

import React, { useState } from "react";

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

export const EmployeeList: React.FC<EmployeeListProps> = ({
  employees,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    if (onSearch) {
      onSearch(newSearchTerm);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date of Birth
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Address
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {employee.firstName} {employee.lastName}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {employee.startDate?.toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {employee.department}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {employee.dateOfBirth?.toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {`${employee.street}, ${employee.city}, ${employee.state} ${employee.zipCode}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {employees.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No employees found.</p>
        )}
      </div>
    </div>
  );
};
