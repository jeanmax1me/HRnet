import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FiCheckCircle } from "react-icons/fi";
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children;
    var modalRef = useRef(null);
    useEffect(function () {
        var handleOutsideClick = function (event) {
            if (modalRef.current &&
                !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        }
        return function () {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    return createPortal(React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm" },
        React.createElement("div", { ref: modalRef, className: "bg-white rounded-lg shadow-xl transform transition-all ease-in-out duration-300 scale-100 opacity-100 w-full max-w-md" },
            React.createElement("div", { className: "p-6" },
                React.createElement("div", { className: "flex items-center justify-center mb-4" },
                    React.createElement("div", { className: "text-green-500 animate-bounce" },
                        React.createElement(FiCheckCircle, { size: 48 }))),
                React.createElement("h3", { className: "text-2xl font-bold text-center text-gray-800 mb-2" }, "Success!"),
                React.createElement("div", { className: "text-center text-gray-600" }, children)),
            React.createElement("div", { className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-lg" },
                React.createElement("button", { type: "button", className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm transition duration-150 ease-in-out transform hover:scale-105", onClick: onClose }, "Close")))), document.body);
};
export default Modal;
