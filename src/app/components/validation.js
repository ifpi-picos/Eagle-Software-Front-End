import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('O email não é válido').required('O email é obrigatório'),
  password: Yup.string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('A senha é obrigatória'),
});
