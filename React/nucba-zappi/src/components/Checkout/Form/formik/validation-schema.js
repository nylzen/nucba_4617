import * as Yup from 'yup'

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('El nombre es requerido'),
  cellphone: Yup.string().required('El teléfono es requerido'),
  location: Yup.string().required('La localidad es requerida'),
  address: Yup.string().required('La dirección es requerida'),
})