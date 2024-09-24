// components/EmployeeForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { states } from "@/app/utils/states";
import { departments } from "@/app/utils/departments";
import Modal from "@/app/components/Modal";
import { useEmployeeContext } from "@/app/context/EmployeeContext";
import { User, Calendar, MapPin, Briefcase } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
};

export default function EmployeeForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [showModal, setShowModal] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const { addEmployee } = useEmployeeContext();

  const onSubmit = (data: FormData) => {
    const newEmployee = {
      ...data,
      id: Date.now().toString(),
      dateOfBirth,
      startDate,
    };
    addEmployee(newEmployee);
    setShowModal(true);
    reset();
    setDateOfBirth(null);
    setStartDate(null);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <h2 className="text-3xl font-bold mb-2">Create New Employee</h2>
        <p className="text-blue-100">
          Fill in the details to add a new team member
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative">
              <User className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                id="firstName"
                type="text"
                placeholder="First Name"
                className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="relative">
              <User className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                {...register("lastName", { required: "Last name is required" })}
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div className="relative">
              <Calendar
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <DatePicker
                selected={dateOfBirth}
                onChange={(date: Date | null) => setDateOfBirth(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Date of Birth"
                className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
            <div className="relative">
              <Calendar
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Start Date"
                className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div className="space-y-6">
            <fieldset className="border-2 border-gray-200 rounded-lg p-4">
              <legend className="text-sm font-medium text-gray-700 px-2">
                Address
              </legend>
              <div className="space-y-4">
                <div className="relative">
                  <MapPin
                    className="absolute top-3 left-3 text-gray-400"
                    size={20}
                  />
                  <input
                    {...register("street", { required: "Street is required" })}
                    id="street"
                    type="text"
                    placeholder="Street"
                    className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  {errors.street && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.street.message}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <MapPin
                    className="absolute top-3 left-3 text-gray-400"
                    size={20}
                  />
                  <input
                    {...register("city", { required: "City is required" })}
                    id="city"
                    type="text"
                    placeholder="City"
                    className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.city.message}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <MapPin
                    className="absolute top-3 left-3 text-gray-400"
                    size={20}
                  />
                  <select
                    {...register("state", { required: "State is required" })}
                    id="state"
                    className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select a state</option>
                    {states.map((state) => (
                      <option
                        key={state.abbreviation}
                        value={state.abbreviation}
                      >
                        {state.name}
                      </option>
                    ))}
                  </select>
                  {errors.state && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.state.message}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <MapPin
                    className="absolute top-3 left-3 text-gray-400"
                    size={20}
                  />
                  <input
                    {...register("zipCode", {
                      required: "Zip code is required",
                    })}
                    id="zipCode"
                    type="text"
                    placeholder="Zip Code"
                    className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  {errors.zipCode && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.zipCode.message}
                    </p>
                  )}
                </div>
              </div>
            </fieldset>
            <div className="relative">
              <Briefcase
                className="absolute top-3 left-3 text-gray-400"
                size={20}
              />
              <select
                {...register("department", {
                  required: "Department is required",
                })}
                id="department"
                className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors appearance-none"
              >
                <option value="">Select a department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              {errors.department && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.department.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
        >
          Create Employee
        </button>
      </form>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="bg-white p-6 rounded-lg text-center">
          <svg
            className="mx-auto h-12 w-12 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            Employee Created Successfully!
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            The new employee has been added to the system.
          </p>
        </div>
      </Modal>
    </div>
  );
}
