import Link from "next/link";
import EmployeeForm from "@/app/components/EmployeeForm";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">HRnet</h1>
      </div>
      <div className="max-w-2xl mx-auto">
        <Link
          href="/employee-list"
          className="text-blue-600 hover:underline mb-4 block"
        >
          View Current Employees
        </Link>
        <h2 className="text-2xl font-semibold mb-4">Create Employee</h2>
        <EmployeeForm />
      </div>
    </main>
  );
}
