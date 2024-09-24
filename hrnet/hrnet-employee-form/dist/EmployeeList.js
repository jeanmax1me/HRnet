"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// EmployeeList.tsx
var react_1 = require("react");
var EmployeeList = function (_a) {
    var employees = _a.employees, onSearch = _a.onSearch;
    var _b = (0, react_1.useState)(""), searchTerm = _b[0], setSearchTerm = _b[1];
    var handleSearchChange = function (e) {
        var newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        if (onSearch) {
            onSearch(newSearchTerm);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg-white shadow-md rounded-lg overflow-hidden", children: (0, jsx_runtime_1.jsxs)("div", { className: "p-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "mb-4", children: (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Search employees...", className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", value: searchTerm, onChange: handleSearchChange }) }), (0, jsx_runtime_1.jsx)("div", { className: "overflow-x-auto", children: (0, jsx_runtime_1.jsxs)("table", { className: "min-w-full bg-white", children: [(0, jsx_runtime_1.jsx)("thead", { className: "bg-gray-200", children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { className: "px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider", children: "Name" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider", children: "Start Date" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider", children: "Department" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider", children: "Date of Birth" }), (0, jsx_runtime_1.jsx)("th", { className: "px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider", children: "Address" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { className: "divide-y divide-gray-200", children: employees.map(function (employee) {
                                    var _a, _b;
                                    return ((0, jsx_runtime_1.jsxs)("tr", { className: "hover:bg-gray-50", children: [(0, jsx_runtime_1.jsx)("td", { className: "px-4 py-3", children: (0, jsx_runtime_1.jsx)("div", { className: "flex items-center", children: (0, jsx_runtime_1.jsx)("div", { className: "ml-3", children: (0, jsx_runtime_1.jsxs)("p", { className: "text-sm font-medium text-gray-900", children: [employee.firstName, " ", employee.lastName] }) }) }) }), (0, jsx_runtime_1.jsx)("td", { className: "px-4 py-3 text-sm text-gray-500", children: (_a = employee.startDate) === null || _a === void 0 ? void 0 : _a.toLocaleDateString() }), (0, jsx_runtime_1.jsx)("td", { className: "px-4 py-3 text-sm text-gray-500", children: employee.department }), (0, jsx_runtime_1.jsx)("td", { className: "px-4 py-3 text-sm text-gray-500", children: (_b = employee.dateOfBirth) === null || _b === void 0 ? void 0 : _b.toLocaleDateString() }), (0, jsx_runtime_1.jsx)("td", { className: "px-4 py-3 text-sm text-gray-500", children: "".concat(employee.street, ", ").concat(employee.city, ", ").concat(employee.state, " ").concat(employee.zipCode) })] }, employee.id));
                                }) })] }) }), employees.length === 0 && ((0, jsx_runtime_1.jsx)("p", { className: "text-center text-gray-500 mt-4", children: "No employees found." }))] }) }));
};
exports.EmployeeList = EmployeeList;
