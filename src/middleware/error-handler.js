export const errorHandler = (error, request, response, next) => {

  const statusCode = response.statusCode !== 200 ? response.statusCode : 500;

  // Message configuration
  const message = () => {
    switch (statusCode) {
      // Not Found Errors
      case 404:
        return "Resource does not exist";
      // Other Errors
      default:
        return error.message || "Internal Server Error"
    }
  };

  // Parse response to the client
  response.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message(),
    stack: error.stack,
  });

};