# Carrito

- Redux del carrito
  - Acciones para ese carrito (Agregar producto, manejar qty, reset, ocultar carrito)
- Consumir las acciones / state en donde requiera
- Guardar en el LS el carrito (redux persist)
- Span del qty del carrito


# Login
- Guardar el user en algun lado (redux)
- hacer el slice, meterlo en la store

- La llamada a la api para login/register
  - fn para pegarle a la api

- Proteger rutas en base si el user esta logueado o no para entrar a X lugar.
  - necesito un componente para proteger rutas
- Validar formularios (login/register)
  - initial values y validation schema (formik / yup)
  - ir login aplicar formik / mismo register
- Detalles de UI
  - Navbar, redirecciones etc etc


# Ordenes

- Configurar redux para las ordenes
  - Crear ordenes / obtener ordenes
- Implementar la api con las ordenes tanto el get como el post
- Hacer funcional el form del checkout para mandar la datita
- Implementar pagina de mis ordenes, donde vamos a mostrar la lista de todas las ordenes/pedidos que hizo el user
- Pagina del resumen de la orden, donde vamos a mostrar unicamente ese pedidoo