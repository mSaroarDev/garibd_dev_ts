import { Request, Response, NextFunction } from 'express';
import type { VerifyErrors } from 'jsonwebtoken';

const jwt = require('jsonwebtoken');

interface JWTPayload {
  user: {
    id: string;
    // Add other user properties that are included in your JWT
  };
}

declare module 'express' {
  interface Request {
    user?: JWTPayload['user'];
  }
}

const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    console.log("token", token);

    if (!token) {
      res.status(401).json({
        message: 'Authorization token is missing',
      });
      return;
    }

    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      (err: VerifyErrors | null, decoded: JWTPayload | undefined) => {
        if (err) {
          res.status(401).json({
            message: 'Invalid or expired token',
          });
          return;
        }

        if (!decoded) {
          res.status(401).json({
            message: 'Token verification failed',
          });
          return;
        }

        req.user = decoded.user;
        next();
      }
    );
  } catch (error) {
    res.status(500).json({
      message: 'Authentication error',
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
};

export = isAuthenticated;