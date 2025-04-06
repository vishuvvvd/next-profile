/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

// Create a custom logger object with explicit methods
export const logger = {
  info: (message: string, data?: any) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, data || '');
  },
  warn: (message: string, data?: any) => {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, data || '');
  },
  error: (message: string, data?: any) => {
    console.error(
      `[ERROR] ${new Date().toISOString()} - ${message}`,
      data || ''
    );
  },
  debug: (message: string, data?: any) => {
    console.debug(
      `[DEBUG] ${new Date().toISOString()} - ${message}`,
      data || ''
    );
  },
};
