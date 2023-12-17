export const validateSchema = (schema) => (req, res, next) => {
  console.log("validando esquema");
  try {
    schema.parse(req.body);
    console.log("schema validado");
    next();
  } catch (err) {
    return res.status(400).json(err.errors.map((err) => err.message));
  }
};
