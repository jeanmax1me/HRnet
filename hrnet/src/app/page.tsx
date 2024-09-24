import Link from "next/link";
import EmployeeForm from "@/app/components/EmployeeForm";
import { Users, UserPlus } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">HRnet</h1>
          <p className="mt-2 text-xl text-gray-600">
            Streamline Your HR Operations
          </p>
        </header>

        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-100 p-8 text-gray-800 border-r border-gray-200">
              <h2 className="text-3xl font-semibold mb-6 flex items-center text-blue-600">
                <Users className="mr-2" />
                Employee Management
              </h2>
              <p className="mb-8 text-gray-600">
                Effortlessly manage your workforce with our intuitive tools.
              </p>
              <Link
                href="/employee-list"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                <Users className="mr-2" size={20} />
                View Current Employees
              </Link>
            </div>

            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-semibold mb-6 flex items-center text-gray-800">
                <UserPlus className="mr-2" />
                Create New Employee
              </h2>
              <EmployeeForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
