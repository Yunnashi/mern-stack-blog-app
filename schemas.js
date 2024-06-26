const Joi = require("joi");

module.exports.todoSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.string().optional().allow(""),
  category: Joi.string().required(),
  memo: Joi.string().optional().allow(""),
});
