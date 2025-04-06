/* eslint-disable import/no-unused-modules */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest, NextApiResponse } from 'next';

export function authMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
): void {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  // Optionally, you could verify the token here, e.g., with JWT
  try {
    // Token verification logic (e.g., using JWT)
    // If valid, proceed with the request
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
}
