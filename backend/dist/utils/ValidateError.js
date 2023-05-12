"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidateError extends Error {
    constructor(status, message) {
        super(message);
        this._status = status;
        this.message = message;
    }
    get status() {
        return this._status;
    }
}
exports.default = ValidateError;
//# sourceMappingURL=ValidateError.js.map