/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleApiError = (res: any, error: any) => {
  if (error instanceof Error) {
    console.error(error.message); // Log the error message for debugging

    // Return a structured error response
    return res.status(500).json({
      status: 'error',
      message: error.message || 'Something went wrong.',
    });
  }

  // Default response if it's not an instance of Error
  return res.status(500).json({
    status: 'error',
    message: 'Unknown error occurred.',
  });
};
