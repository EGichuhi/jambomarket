import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-secondary-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-secondary-900">Page Not Found</h2>
        <p className="mt-4 text-lg text-secondary-600 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn btn-primary px-6 py-3">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;