import { Request, Response, NextFunction } from 'express';
export function requireRole(role: string, p0?: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRoles = req.user?.roles || [];
    if (!userRoles.includes(role)) {
      return res.status(403).json({ message: `Forbidden: Requires ${role} role` });
    }
    next();
  };
}





