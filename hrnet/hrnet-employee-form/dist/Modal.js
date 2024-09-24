"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// Modal.tsx
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children, _b = _a.title, title = _b === void 0 ? "Success!" : _b, _c = _a.closeButtonText, closeButtonText = _c === void 0 ? "Close" : _c;
    var modalRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
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
    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm", children: (0, jsx_runtime_1.jsxs)("div", { ref: modalRef, className: "bg-white rounded-lg shadow-xl transform transition-all ease-in-out duration-300 scale-100 opacity-100 w-full max-w-md", children: [(0, jsx_runtime_1.jsxs)("div", { className: "p-6", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl font-bold text-center text-gray-800 mb-2", children: title }), (0, jsx_runtime_1.jsx)("div", { className: "text-center text-gray-600", children: children })] }), (0, jsx_runtime_1.jsx)("div", { className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-lg", children: (0, jsx_runtime_1.jsx)("button", { type: "button", className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm transition duration-150 ease-in-out transform hover:scale-105", onClick: onClose, children: closeButtonText }) })] }) }), document.body);
};
exports.Modal = Modal;
