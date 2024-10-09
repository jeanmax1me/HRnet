// app/employee-list/page.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { useEmployeeContext } from "@/app/context/EmployeeContext";
import Link from "next/link";

type Employee = {
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
  [key: string]: string | Date | null; // Updated index signature
};

type SortKey = keyof Employee;

type SortConfig = {
  key: SortKey;
  direction: "asc" | "desc";
};

export default function EmployeeList() {
  const { employees } = useEmployeeContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee: Employee) =>
      Object.values(employee).some(
        (value) =>
          (typeof value === "string" || value instanceof Date) &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [employees, searchTerm]);

  const sortedEmployees = useMemo(() => {
    const sortableEmployees = [...filteredEmployees];
    if (sortConfig !== null) {
      sortableEmployees.sort((a: Employee, b: Employee) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue === null && bValue === null) return 0;
        if (aValue === null) return sortConfig.direction === "asc" ? 1 : -1;
        if (bValue === null) return sortConfig.direction === "asc" ? -1 : 1;

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortableEmployees;
  }, [filteredEmployees, sortConfig]);

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = sortedEmployees.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const totalPages = Math.ceil(sortedEmployees.length / entriesPerPage);

  const requestSort = (key: SortKey) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4 rounded-lg mb-6">
        <h1 className="text-3xl font-bold text-center">Employee List</h1>
        <p className="text-center mt-2">
          Manage and view all current employees.
        </p>
      </header>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="mr-2">Show</span>
              <select
                className="border border-gray-300 rounded-md px-2 py-1"
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              >
                {[10, 25, 50, 100].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <span className="ml-2">entries</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search employees..."
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th
                    className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort("lastName")}
                  >
                    Name{" "}
                    {sortConfig?.key === "lastName" &&
                      (sortConfig.direction === "asc" ? "▲" : "▼")}
                  </th>
                  <th
                    className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort("startDate")}
                  >
                    Start Date{" "}
                    {sortConfig?.key === "startDate" &&
                      (sortConfig.direction === "asc" ? "▲" : "▼")}
                  </th>
                  <th
                    className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort("department")}
                  >
                    Department{" "}
                    {sortConfig?.key === "department" &&
                      (sortConfig.direction === "asc" ? "▲" : "▼")}
                  </th>
                  <th
                    className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort("dateOfBirth")}
                  >
                    Date of Birth{" "}
                    {sortConfig?.key === "dateOfBirth" &&
                      (sortConfig.direction === "asc" ? "▲" : "▼")}
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Address
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentEntries.map((employee) => (
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
                    <td className="px-4 py-3 text-sm text-gray-500">{`${employee.street}, ${employee.city}, ${employee.state} ${employee.zipCode}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {currentEntries.length === 0 && (
            <p className="text-center text-gray-500 mt-4">
              No employees found.
            </p>
          )}
          <div className="mt-4 flex justify-between items-center">
            <div>
              Showing {indexOfFirstEntry + 1} to{" "}
              {Math.min(indexOfLastEntry, sortedEmployees.length)} of{" "}
              {sortedEmployees.length} entries
            </div>
            <div>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md mr-2 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}
