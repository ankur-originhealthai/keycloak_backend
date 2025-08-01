import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
export function jwtAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ message: 'Unauthorized: Missing Bearer token' });
  }
  const token = authHeader.split(' ')[1];
  const publicKey = process.env.PUBLIC_KEY;

  try {
    const decoded = jwt.verify(token, publicKey!, { algorithms: ['RS256'] });
    const roles = decoded.realm_access.roles;
    req['user'] = {
        email: decoded.email,
        username: decoded.preferred_username,
        roles
    }
    next();
  } catch (err) {
    console.error('JWT Verify Error:', err);
    return res.status(403).json({ message: 'Forbidden: Invalid token' });
  }
}
