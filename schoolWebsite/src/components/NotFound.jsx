import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50 text-center px-4">
      <div className="text-8xl mb-4">🏫</div>
      <h1 className="text-7xl font-extrabold text-emerald-600 mb-3">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-7 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors"
      >
        Back to Home <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default NotFound;
