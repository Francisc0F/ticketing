import { ValidationError } from "express-validator";
import { CustomError } from "../errors/custom-error";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Error connecting to database';

    constructor(public errors?: ValidationError[]) {
        super('Invalid database connection');

        // extended from core lib
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [
            {
                message: this.reason
            }
        ];
    }
}