class ValidationError extends Error {}

function handleError(err, req, res, next) {
  console.error(err);

  res.status(err instanceof ValidationError ? 400 : 500);

  res.render('error', {
    message:
      err instanceof ValidationError
        ? err.message
        : 'Service unavailable, please try again later',
  });
}

module.exports = {
  handleError,
  ValidationError,
};
