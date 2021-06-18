"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.scss");
var index_1 = require("./spinners/index");
function App() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "main-container" },
            react_1.default.createElement("div", { className: "title-holder" },
                react_1.default.createElement("h1", { className: "header" }, "React Epic Spinners"),
                react_1.default.createElement("h5", { className: "sub-header" },
                    "React Implementation of",
                    react_1.default.createElement("a", { className: "link", href: "http://epic-react-spinners.es/", target: "_blank", rel: "noreferrer" }, " Epic Spinners")),
                react_1.default.createElement("div", { className: "get-started" },
                    react_1.default.createElement("div", { className: "get-started__docs" },
                        react_1.default.createElement("h4", null, "Get started"),
                        react_1.default.createElement("a", { href: "https://github.com/p4pupro/epic-react-spinners", className: "docs" }, "Docs")),
                    react_1.default.createElement("div", { className: "get-started-code" },
                        react_1.default.createElement("p", null, "npm install epic-react-spinners"),
                        react_1.default.createElement("p", null, "yarn add epic-react-spinners")))),
            react_1.default.createElement("div", { className: "spinner-holder" },
                react_1.default.createElement("div", { className: "spinner-element" },
                    react_1.default.createElement(index_1.Atom, { color: "#61dafb", size: "70", animationDuration: "2" })),
                react_1.default.createElement("div", { className: "name" }, "Atom Spinner")),
            react_1.default.createElement("div", { className: "spinner-holder" },
                react_1.default.createElement("div", { className: "spinner-element" },
                    react_1.default.createElement(index_1.Orbit, { color: "#61dafb", size: "70", animationDuration: "2" })),
                react_1.default.createElement("div", { className: "name" }, "Orbit Spinner")),
            react_1.default.createElement("div", { className: "spinner-holder" },
                react_1.default.createElement("div", { className: "spinner-element" },
                    react_1.default.createElement(index_1.Trinity, { color: "#61dafb", size: "70", animationDuration: "2" })),
                react_1.default.createElement("div", { className: "name" }, "Trinity Spinner")),
            react_1.default.createElement("div", { className: "spinner-holder" },
                react_1.default.createElement("div", { className: "spinner-element" },
                    react_1.default.createElement(index_1.Electron, { color: "#61dafb", size: "70", animationDuration: "2" })),
                react_1.default.createElement("div", { className: "name" }, "Electron Spinner")),
            react_1.default.createElement("div", { className: "spinner-holder" },
                react_1.default.createElement("div", { className: "spinner-element" },
                    react_1.default.createElement(index_1.Square, { color: "#61dafb", size: "70", animationDuration: "2" })),
                react_1.default.createElement("div", { className: "name" }, "Squares Spinner"))),
        react_1.default.createElement("footer", null,
            react_1.default.createElement("h4", null,
                "By",
                react_1.default.createElement("a", { href: "https://github.com/p4pupro", className: "link" }, " @p4pupro")),
            react_1.default.createElement("p", null,
                "This project is an implementation of the",
                react_1.default.createElement("a", { href: "https://github.com/p4pupro/epic-spinners", target: "_blank", rel: "noreferrer", className: "link" }, " Epic Spinners"),
                " project created by",
                react_1.default.createElement("a", { href: "https://github.com/p4pupro", target: "_blank", rel: "noreferrer", className: "link" }, " p4pupro")))));
}
exports.default = App;
