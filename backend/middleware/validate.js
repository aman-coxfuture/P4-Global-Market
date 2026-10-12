const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (err) {
    const error = err.errors ? err.errors[0].message : 'Validation Error';
    res.status(400).json({ success: false, error });
  }
};

module.exports = validate;
