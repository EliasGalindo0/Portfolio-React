export default class ValidateError extends Error {
    private _status;
    constructor(status: number, message: string);
    get status(): number;
}
