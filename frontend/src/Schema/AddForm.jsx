import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string({message:"name is string"}).required(),
  description: yup.string("description is string").required().min(10,"should be min 10 words"),
  url: yup.string().url("url is not correct").required(),
  price: yup.number().required().positive().integer(),

});