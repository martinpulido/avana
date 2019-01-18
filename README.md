# AVANA

AVANA es una plantilla de HTML y CSS realizada por [DesignStub](http://www.designstub.com) que voy a utilizar para implementar los conocimientos adquiridos en el curso de Angular 2.

Para ello he añadido dos enlaces a este README donde consultar la versión de la plantilla tal cual la provee DesignStub y la versión en la que he trabajado con Angular.

## Web Estática vs Single Page Application
* *Web*: http://www.designstub.com/projects/avana-minimal-portfolio-template-build-bootstrap/
* *Vue*: _El código se puede consultar en este mismo proyecto de GitHub. La versión build no está disponible todavía.

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
* La función que hace que aparezcan los proyectos en la Home al hacer scroll se ejecuta en la carga del documento, antes de que hayamos obtenido los datos del JSON (así estaba en la plantilla). Hay que lanzar esa función después de que los datos se hayan recuperado.