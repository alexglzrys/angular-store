# AngularStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Comandos

```
// Correr el servidor local y abrir el navegador
ng serve -o 
ng serve --port 9000 -o

// Empaquetar nuestra aplicación para producción
ng build --prod

// Ver la versión del CLI de Angular
ng --version
```

## Conceptos

String Interpolation: Permite renderizar las variables asociadas a nuestro componente en nuestro template

```
<h3>{{ title }}</h3>
```

Data Binding: Permite un enlace de datos bidireccional de nuestras variables (template / componente)


```
// Es necesario importar el modulo FormModule para que funcione la directiva ngModel
<input type="text [(ngModel)]="title>
```

*ngIf: Es una directiva estructural que nos permite condicionar los elementos que deben aparecer en nuestro template con base a una cierta condición

```
<div *ngIf="variable == 'hola'">
    Mostar el contenido de este elemento
</div> 
```

*ngFor: Es una directiva estructural que nos permite iterar un conjunto de elementos en nuestro template

```
<ul>
    <li *ngFor="let variable of conjuntoElementos; index as i">
        {{ variable }}
    </li> 
</ul>
```

Interface: Nos permiten definir tipos de datos personalizados en Angular, por lo general se usan para representar el tipo de dato de un objeto.

```
ng g i interfaces/nombre.model

alumnos: Alumno[]

export interface Alumno {
    nombre: string;
    apellidos: string;
    edad: number
}
```

## Linter en proyectos angular

Instalar algun plugin para linter TSLint (al momento este se encuentra sin soporte)
```
ng lint
```
Nos ayuda a inspeccionar en todo el proyecto en búsqueda de malas prácticas al momento de codificar nuestro código


Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
