import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            {/* Overlay */}
            <div 
                className="fixed inset-0 bg-black opacity-50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>
            
            {/* Modal Content */}
            <div className="relative w-full max-w-md mx-auto my-6 z-50">
                <div className="border-0 rounded-2xl shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none transform transition-all scale-100">
                    
                    {/* Header */}
                    <div className="flex items-center justify-center p-6 border-b border-solid border-gray-100 rounded-t">
                        <div className="bg-red-100 p-3 rounded-full">
                            <FaExclamationTriangle className="text-red-600 text-2xl" />
                        </div>
                    </div>
                    
                    {/* Body */}
                    <div className="relative p-6 flex-auto text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {title || "Confirm Action"}
                        </h3>
                        <p className="text-gray-500 leading-relaxed">
                            {message || "Are you sure you want to proceed with this action?"}
                        </p>
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-center p-6 border-t border-solid border-gray-100 rounded-b gap-4">
                        <button
                            className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none transition-all duration-150 ease-linear hover:text-gray-700"
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none transition-al duration-150 ease-linear hover:bg-red-600"
                            type="button"
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                        >
                            Delete Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
