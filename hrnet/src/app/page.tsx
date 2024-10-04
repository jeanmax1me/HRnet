import Link from "next/link";
import EmployeeForm from "@/app/components/EmployeeForm";
import { Users, UserPlus } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            HRnet
          </h1>
          <p className="mt-4 text-2xl text-gray-600 font-light">
            Streamline Your HR Operations with Ease
          </p>
        </header>

        <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 p-10 text-white">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Users className="mr-3" size={28} />
                Employee Management
              </h2>
              <p className="mb-10 text-blue-100 leading-relaxed">
                Effortlessly manage your workforce with our intuitive and
                powerful tools.
              </p>
              <Link
                href="/employee-list"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                <Users className="mr-2" size={20} />
                View Current Employees
              </Link>
            </div>

            <div className="md:w-2/3 p-10">
              <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-800">
                <UserPlus className="mr-3" size={28} />
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
