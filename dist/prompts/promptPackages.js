"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const utils_1 = require("../utils");
const promptPackages = (language) => {
    if (language === 'JavaScript') {
        return jsPackages();
    }
    return tsPackages();
};
const jsPackages = () => {
    return inquirer_1.default.prompt([
        {
            type: "checkbox",
            name: "val",
            message: "What JavaScript packages would you like to use with this project?",
            choices: [
                new inquirer_1.default.Separator(utils_1.SectionLine),
                {
                    name: "ESLint"
                },
                {
                    name: "Prettier"
                },
                {
                    name: "OtherPackage3"
                },
                {
                    name: "OtherPackage4"
                },
                {
                    name: "OtherPackage5"
                },
                new inquirer_1.default.Separator(utils_1.SectionLine)
            ]
        }
    ]);
};
// If the language is ts, th
const tsPackages = () => {
    return inquirer_1.default.prompt([
        {
            type: "checkbox",
            name: "val",
            message: "What TypeScript packages would you like to use with this project?",
            choices: [
                new inquirer_1.default.Separator(utils_1.SectionLine),
                {
                    name: "TypeORM"
                },
                {
                    name: "fivem-js"
                },
                {
                    name: "mysql2"
                },
                {
                    name: 'esx.js'
                },
                new inquirer_1.default.Separator(utils_1.SectionLine)
            ]
        }
    ]);
};
exports.default = promptPackages;
//# sourceMappingURL=promptPackages.js.map