// Model.tsx
import React from "react";

interface modelinterface {
  isOpen: boolean; // Changed from children to isOpen
  onClose: () => void;
  children: React.ReactNode;
}

const Model = ({ isOpen, onClose, children }: modelinterface) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-gray-700 opacity-30 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        className="bg-white  max-w-[90%] p-10 rounded-lg shadow-xl"
      >
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2  bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Model;
