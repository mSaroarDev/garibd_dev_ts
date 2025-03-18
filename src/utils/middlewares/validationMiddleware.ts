import { Request, Response, NextFunction } from 'express';
import { ObjectSchema, ValidationError } from 'joi';

type ValidationMiddleware = (schema: ObjectSchema) => (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

const validationMiddleware: ValidationMiddleware = (schema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const { error } = schema.validate(req.body, { abortEarly: false });

      if (error) {
        const firstError = error.details[0];

        res.status(400).json({
          message: 'Validation failed',
          error: firstError.message,
          timestamp: new Date().toISOString()
        });
        return;
      }

      next();
    } catch (err) {
      res.status(500).json({
        message: 'Validation error',
        error: process.env.NODE_ENV === 'development' ? err : undefined,
        timestamp: new Date().toISOString()
      });
    }
  };
};

export = validationMiddleware;