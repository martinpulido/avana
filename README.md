# AVANA

AVANA es una plantilla de HTML y CSS realizada por [DesignStub](http://www.designstub.com) que voy a utilizar para implementar los conocimientos adquiridos en el curso de Angular 2.

Para ello he añadido dos enlaces a este README donde consultar la versión de la plantilla tal cual la provee DesignStub y la versión en la que he trabajado con Angular.

## Web Estática vs Single Page Application
* *Web*: http://www.designstub.com/projects/avana-minimal-portfolio-template-build-bootstrap/
* *Angular*: https://martinpulido.github.io/avana/works.

## Herramientas utilizadas

* [NodeJS/NPM](https://nodejs.org/es/) - NodeJS como entorno de ejecución de JavaScript y NPM como gestor de paquetes.
* [Angular CLI](https://github.com/angular/angular-cli) - Angular CLI versión 7.1.4 para generar el *scaffolding* del proyecto
* [Git](https://git-scm.com/) - Como control de versiones a través de GitHub.

## Autores

* **[DesignStub](http://www.designstub.com)** - De la plantilla HTML, CSS, JS
* **Santi Martin** - De la implementación de Angular 7 sobre la plantilla de DesignStub.

## Licencia
* De la plantilla de DesignStub: [ Creative Commons Attribution 3.0 License ](https://creativecommons.org/licenses/by/3.0/)

## Observaciones
* Para no montar una API REST propia con unos datos propios voy a crear solamente un JSON con los datos de cada uno de los proyectos en un directorio fuera de _src_ y será el que llame por AJAX con _HttpClient_.
* La función que hace que aparezcan los proyectos en la Home al hacer scroll se ejecuta en la carga del documento, antes de que hayamos obtenido los datos del JSON (así estaba en la plantilla). Hay que lanzar esa función después de que los datos se hayan recuperado. (En relación con el primer punto del [TODO](#todo)
* Esa misma función también se aplica en las imágenes de detalle de los trabajos.
* Las validaciones del formulario se van a realizar en front (en la plantilla estática se hacen en backend por cada _submit_ del formulario) respetando el orden de la plantilla estática:
  1. Valida que se haya rellenado el nombre.
  2. Valida que se haya rellenado el email.
  3. Valida que el formato de email sea correcto.
  4. Valida que se haya rellenado el mensaje.
  5. Si es correcto, entonces envía el formulario, éste desaparece y aparece un mensaje de enviado. (Con mensaje en capa superior). (Replicando el proceso y animación definido en el _jquery.contact.js_ de la plantilla.)
* En la plantilla original del Blog aunque aparecen todos los post con la misma fecha, se deduce por la animación y el orden en el que aparecen que la distribución es la siguiente:
  1. Los post se ordenan por fecha de forma descendente: el primer post en la lista -tanto en la página como en la respuesta _JSON_ del servicio- es el último post escrito.
  2. El post que aparece junto al título, _claim_ y descipción de la página Blog, será el primer post que viene en la lista.
  3. El HTML de la plantilla está dividido en dos columnas (izquierda y derecha) y dentro de cada columna se listan los post, primero se están escribiendo los elementos de la izquierda y posteriormente, los de la derecha. (Aunque la animación con el scroll luego los muestre pareados).
  4. Explicado esto, el orden en el que deberemos de pintar los post será el siguiente:
      1. El primer post (o post destacado, si quisiéramos que la respuesta del servicio fuera así), junto al título, _claim_ y descripción.
      2. Los post cuyo orden en el listado sea par y pintarlos en la columna de la izquierda.
      3. Los post cuyo orden en el listado sea impar, excepto el primero, y pintarlos en la columna de la derecha.
* En el formulario de envío de comentario (dentro del detalle de cada artículo del blog) de la plantilla original, no hay ni validación ni simulación de envío de datos. Para la integración de Angular, se replican las validaciones y respuesta de envío del formulario de contacto. Además, al hacer clic en cualquier enlace de _Reply_ la página hace scroll hacia el formulario de respuesta.

## TODO
- [ ] Ver cómo llamar una función de JavaScript externa a TypeScript cuando la carga de los datos del JSON haya finalizado.
- [X] Parsear las etiquetas HTML que vengan dentro de la respuesta JSON para que se pinten tal cual en el detalle del proyecto. _Solucionado usando '\[innerHTML\]'._:
~~~~
<div [innerHTML]="thisProject.description"></div>
~~~~
- [X] Los roles se pintan por defecto separados por comas sin espacio entre ellos (como vienen del JSON). ¿Recorrer el array para insertar un espacio antes de cada nombre excepto del primero?. _Solucionado usando '.join(\', \')'_:
~~~~
{{thisProject.roles.join(', ')}}
~~~~
- [X] Actualizar dinámicamente el `<title>` de la página al navegar por cada sección.
- [ ] Parece que hay algún problema al acceder directamente a las URLs de las páginas de la versión en producción que no resuelve bien el enrutamiento.