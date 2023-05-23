const createError = (status, message) => {
  const error = new Error();
  error.status = 404;
  error.message = "Something went wrong";

  return error;
};

export default createError;
