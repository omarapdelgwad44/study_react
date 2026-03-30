import { FaExclamationTriangle } from "react-icons/fa";

const Error = ({ error }) => {
  return (
    <>
    <div className="flex flex-col items-center justify-center text-center py-10">
      <FaExclamationTriangle className="text-red-500 text-5xl mb-4" />
      <h2 className="text-xl font-semibold text-red-600">
        Something went wrong
      </h2>
      <p className="text-gray-600 mt-2">
        {error?.message || "An unexpected error occurred"}
      </p>
    </div>
    </>
  );
};

export default Error;