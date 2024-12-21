const AUTH_MIDDLEWARE = (req, res, next) => {
  const token = req.headers.authorization || '';
  if (token === 'Bearer admin' || token === 'Bearer user') {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
};

export default AUTH_MIDDLEWARE;
