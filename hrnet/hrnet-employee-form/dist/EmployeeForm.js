"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// src/EmployeeForm.tsx
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
var lucide_react_1 = require("lucide-react");
var EmployeeForm = function (_a) {
    var onSubmit = _a.onSubmit, Modal = _a.Modal, states = _a.states, departments = _a.departments;
    var _b = (0, react_hook_form_1.useForm)(), register = _b.register, handleSubmit = _b.handleSubmit, reset = _b.reset, errors = _b.formState.errors;
    var _c = (0, react_1.useState)(false), showModal = _c[0], setShowModal = _c[1];
    var _d = (0, react_1.useState)(null), dateOfBirth = _d[0], setDateOfBirth = _d[1];
    var _e = (0, react_1.useState)(null), startDate = _e[0], setStartDate = _e[1];
    var handleFormSubmit = function (data) {
        var newEmployee = __assign(__assign({}, data), { id: Date.now().toString(), dateOfBirth: dateOfBirth, startDate: startDate });
        onSubmit(newEmployee);
        setShowModal(true);
        reset();
        setDateOfBirth(null);
        setStartDate(null);
    };
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(handleFormSubmit), className: "space-y-6", children: [(0, jsx_runtime_1.jsxs)("h2", { className: "text-2xl font-semibold mb-6 flex items-center", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.User, { className: "mr-2" }), "Create New Employee"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 mb-6", children: "Fill in the details to add a new team member" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("input", __assign({}, register("firstName", { required: "First name is required" }), { type: "text", placeholder: "First Name", className: "w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors" })), (0, jsx_runtime_1.jsx)(lucide_react_1.User, { className: "absolute left-0 top-2 text-gray-400", size: 20 }), errors.firstName && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.firstName.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("input", __assign({}, register("lastName", { required: "Last name is required" }), { type: "text", placeholder: "Last Name", className: "w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors" })), (0, jsx_runtime_1.jsx)(lucide_react_1.User, { className: "absolute left-0 top-2 text-gray-400", size: 20 }), errors.lastName && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.lastName.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "absolute left-0 top-2 text-gray-400", size: 20 }), (0, jsx_runtime_1.jsx)(react_datepicker_1.default, { selected: dateOfBirth, onChange: function (date) { return setDateOfBirth(date); }, dateFormat: "dd/MM/yyyy", placeholderText: "Date of Birth", className: "w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "absolute left-0 top-2 text-gray-400", size: 20 }), (0, jsx_runtime_1.jsx)(react_datepicker_1.default, { selected: startDate, onChange: function (date) { return setStartDate(date); }, dateFormat: "dd/MM/yyyy", placeholderText: "Start Date", className: "w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors" })] }), (0, jsx_runtime_1.jsxs)("fieldset", { className: "border p-4 rounded-md", children: [(0, jsx_runtime_1.jsxs)("legend", { className: "font-semibold px-2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MapPin, { className: "inline mr-2", size: 20 }), "Address"] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsx)("input", __assign({}, register("street", { required: "Street is required" }), { type: "text", placeholder: "Street", className: "w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors" })), errors.street && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.street.message })), (0, jsx_runtime_1.jsx)("input", __assign({}, register("city", { required: "City is required" }), { type: "text", placeholder: "City", className: "w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors" })), errors.city && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.city.message })), (0, jsx_runtime_1.jsxs)("select", __assign({}, register("state", { required: "State is required" }), { className: "w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "Select a state" }), states.map(function (state) { return ((0, jsx_runtime_1.jsx)("option", { value: state.abbreviation, children: state.name }, state.abbreviation)); })] })), errors.state && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.state.message })), (0, jsx_runtime_1.jsx)("input", __assign({}, register("zipCode", { required: "Zip code is required" }), { type: "text", placeholder: "Zip Code", className: "w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors" })), errors.zipCode && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.zipCode.message }))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Briefcase, { className: "absolute left-0 top-2 text-gray-400", size: 20 }), (0, jsx_runtime_1.jsxs)("select", __assign({}, register("department", { required: "Department is required" }), { className: "w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "Select a department" }), departments.map(function (dept) { return ((0, jsx_runtime_1.jsx)("option", { value: dept, children: dept }, dept)); })] })), errors.department && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-sm mt-1", children: errors.department.message }))] })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300", children: "Create Employee" }), (0, jsx_runtime_1.jsxs)(Modal, { isOpen: showModal, onClose: function () { return setShowModal(false); }, children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold mb-2", children: "Employee Created Successfully!" }), (0, jsx_runtime_1.jsx)("p", { children: "The new employee has been added to the system." })] })] }));
};
exports.EmployeeForm = EmployeeForm;
