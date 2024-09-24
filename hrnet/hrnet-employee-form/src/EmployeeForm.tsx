// src/EmployeeForm.tsx

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { User, Calendar, MapPin, Briefcase } from "lucide-react";

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
  onSubmit: (
    employee: FormData & {
      id: string;
      dateOfBirth: Date | null;
      startDate: Date | null;
    }
  ) => void;
  Modal: React.ComponentType<{
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }>;
  states: State[];
  departments: Department[];
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({
  onSubmit,
  Modal,
  states,
  departments,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [showModal, setShowModal] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);

  const handleFormSubmit = (data: FormData) => {
    const newEmployee = {
      ...data,
      id: Date.now().toString(),
      dateOfBirth,
      startDate,
    };
    onSubmit(newEmployee);
    setShowModal(true);
    reset();
    setDateOfBirth(null);
    setStartDate(null);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <User className="mr-2" />
        Create New Employee
      </h2>
      <p className="text-gray-600 mb-6">
        Fill in the details to add a new team member
      </p>

      <div className="space-y-4">
        <div className="relative">
          <input
            {...register("firstName", { required: "First name is required" })}
            type="text"
            placeholder="First Name"
            className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
          />
          <User className="absolute left-0 top-2 text-gray-400" size={20} />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            {...register("lastName", { required: "Last name is required" })}
            type="text"
            placeholder="Last Name"
            className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
          />
          <User className="absolute left-0 top-2 text-gray-400" size={20} />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div className="relative">
          <Calendar className="absolute left-0 top-2 text-gray-400" size={20} />
          <DatePicker
            selected={dateOfBirth}
            onChange={(date: Date | null) => setDateOfBirth(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Date of Birth"
            className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-0 top-2 text-gray-400" size={20} />
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Start Date"
            className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>

        <fieldset className="border p-4 rounded-md">
          <legend className="font-semibold px-2">
            <MapPin className="inline mr-2" size={20} />
            Address
          </legend>
          <div className="space-y-4">
            <input
              {...register("street", { required: "Street is required" })}
              type="text"
              placeholder="Street"
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
            />
            {errors.street && (
              <p className="text-red-500 text-sm mt-1">
                {errors.street.message}
              </p>
            )}

            <input
              {...register("city", { required: "City is required" })}
              type="text"
              placeholder="City"
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}

            <select
              {...register("state", { required: "State is required" })}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">
                {errors.state.message}
              </p>
            )}

            <input
              {...register("zipCode", { required: "Zip code is required" })}
              type="text"
              placeholder="Zip Code"
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
            />
            {errors.zipCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.zipCode.message}
              </p>
            )}
          </div>
        </fieldset>

        <div className="relative">
          <Briefcase
            className="absolute left-0 top-2 text-gray-400"
            size={20}
          />
          <select
            {...register("department", { required: "Department is required" })}
            className="w-full pl-10 pr-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
          >
            <option value="">Select a department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errors.department && (
            <p className="text-red-500 text-sm mt-1">
              {errors.department.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
      >
        Create Employee
      </button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h3 className="text-lg font-semibold mb-2">
          Employee Created Successfully!
        </h3>
        <p>The new employee has been added to the system.</p>
      </Modal>
    </form>
  );
};
