# Aliexpress de Aliexpress

En esta práctica vamos a servirnos de todos los conceptos que hemos visto estas semanas. La práctica tiene como resultado visual el siguiente producto:

Vamos a servirnos de Figma para crear este [Aliexpress de Aliexpress](https://www.figma.com/file/ALb5IOOya4y3mXjnYLKcSu/Untitled?type=design&node-id=0%3A1&mode=design&t=ro78746AtzLRQbB0-1)

Como es apreciable en la página, nuestro producto consiste en un listado de productos en forma de cards. Vamos a analizar este producto parte por parte para que el ejercicio sea más sencillo de llevar a cabo.

![Untitled](https://res.cloudinary.com/dagndlfhj/image/upload/v1708703783/AliExpress_nyxopa.png)

## Instrucciones

### 1 - Listado de productos:

La primera parte de nuestro lab es un simple listado de productos. Partiendo de el archivo de `products.json` que se aporta en el proyecto, crea un listado de todos los productos con sus correspondientes datos: _título, descripción, precio, imagen_. Para llevar a cabo esta primera parte no se necesita añadir NINGÚN estilo.

### 2 - Eliminación de productos:

Cada producto tiene que tener asociado un botón de eliminación. Este botón nos tiene que permitir eliminar el producto en cuestión del listado filtrado de productos. Evidentemente, esta eliminación CARECE de permanencia. Si refrescamos la página, nuestro producto se verá de nuevo.

### 3 - Ver más:

Al final del listado de productos se encuentra un botón de “Ver más”. Inicialmente, queremos mostrar únicamente 6 productos en nuestra página. Al clickar este botón, deberían aparecer el resto de productos en la página.

### 4 - (BONUS) Maquetación:

Maqueta cada componente tal y como se muestra en el Figma adjunto.

### 5 - (BONUS) Filtrado de productos:

Al comienzo de nuestra página contamos con una barra de búsqueda. Esta barra de búsqueda actúa como una barra de filtrado por nombre. Cuando escribamos un texto, se deberían mostrar en pantalla aquellos productos cuyo título COMIENCE por las mismas letras que se están escribiendo. Ejemplo:

Títulos de productos: [”Pistola de agua”, “Ratón gamer”, “Pelota goma”].

Input: “P” , Output: [”Pistola de agua”, “Pelota goma”]

Input: “Pi”, Output: [”Pistola de agua”]
