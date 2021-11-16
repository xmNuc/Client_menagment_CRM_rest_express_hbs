class ValidationError extends Error {}
class NotFoundError extends Error {}

function handleError(err, req, res, next) {
  if (err instanceof NotFoundError) {
    res.status(404);
    res.render('error', {
      message: 'ID not found. Cheack client ID and try again',
    });
    return;
  }

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
  NotFoundError,
};
