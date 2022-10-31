# Proyecto Final-REACT JS / DelfinBlakleyMujica / CoderHouse

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Intrducción

El proyecto esta basado en la creación de un E-Commerce para la marca de ropa Activá. Dicho E-commerce permite navegar por 5 secciones diferentes, en las cuales se puede ver el catalogo completo de ropa, o los catalogos dividos po temporada. Una vez vez que se seleccionan los productos y se ingresan en el carrito se puede navegar a una sección final a través del CartWidget donde se va a poder visualizar la un Brief de los productos que estan en el carrito. Una vez completados los datos del usuario o "comprador" se va a poder finalizar con la compra obteniendo el número de orden para poder identificar los productos seleccionados con el usuario. Si dicho usuario no complet sus datos o no hay productos en el carrito no se va a poder finalizar la compra.

### Desarollo

La seccion principal del sitio esta identificada por la ruta "/". En esta sección se podran ver todos los productos que la empresa eligió subir a su colección en FireBase. Luego las otras 3 secciones donde los catalogos se muestan filtrados por temporada, podran encontrarse en la ruta "/categoria/{nombreDeLaCategoria}" esto se hace posible gracias a la forma en la que se arman los obejtos dentro del Firebase con una propiedad llamada categoria para poder diferenciar los productos de cada categoria para luego traerlos a la vista con el useParams() que identifica el nombre de ruta y trae a visualizacion los productos que tengan la propiedad categoria con el valor {nombre de categoria}.
Luego, una vez que el usuario se decide por un producto puede apretar el boton "buy" para acceder a los detalles del producto, donde se muestra una descripcion del producto, y las unidades que hay en stock. Dicha ruta esta identificada por el id del producto generado por FireBase y traido a vista utilizando la lógica que se usa con las categorías. Aqui el usuario no va a poder agregar al carrito más de las unidades que se encuentran en stock. 
Una vez que el usuario elije la cantidad y se decide agregar el producto al carrito, se podrá ver como se agregan las unidades en el CartWidget. Esto es posible gracias a la utilizacion de las funciones del CartContext que son exportadas al CartWidget, y que me permiten mostrar el subtotal y la cantidad de productos en el carrito alli. 
Por otro lado una vez que se ingresa al view cart, se accede a una nueva seccion donde se mostrara el detalle de compra. Aquí los productos se mostrarán con sus respectivas cantidades, ya que al momento de agregar el producto al carrito se crea un objeto con la propiedad "cantidad" más las propiedades ya existentes dentro de ese producto. Esto se logra con el spread operator. Una vez que el usuario verifique que todos los productos que estan en el carrito estan ok, debe proceder a llenar un formulario para tomarle los datos para asi poder hacerle llegar la compra. Dichos datos son guardados en una colecion de FireBase para poder tener acceso a la orden de compra y asi poder ejecutarla.




