import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] w-full text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 dark:text-white mb-6">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="inline-block w-fit px-6 py-2 mt-2 text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:bg-purple-800 hover:shadow-lg shadow-sm rounded-lg transition">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
