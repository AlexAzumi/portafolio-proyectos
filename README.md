# Azumi's vault
Portafolio de proyectos web de mis **proyectos personales** importantes.

## Correr de manera local
Para correr el proyecto de manera local necesitas seguir un par de pasos sencillos, pero para ello se necesita:
- git
- npm 6.4.1 o más nuevo
- Angular CLI 7.1.4 o más nuevo
- SASS command line (Opcional. Sólo si quiere compilar el archivo `styles/custom.scss` a `styles.css`)

Primero se necesita clonar el repositorio con el siguiente comando:
```
git clone https://github.com/AlexAzumi/azumi-vault.git
```
> Nota: Los siguientes comandos se tienen que realizar en la carpeta raíz del proyecto

Una vez clonado el repositorio, se necesita descargar todas las dependenicas con **npm** usando el siguiente comando:
```
npm install
```
Después de haber descargado todas las dependencias, puede ejecutar el proyecto en modo local con:
```
ng serve --open
```
> El argumento *--open* es para que automáticamente se abra la página en el navegador, de igual manera puede acceder en la dirección *http://localhost:4200/*

Puede compilar los estilos personalizados de Bootstrap 4 con:
```
npm run sass
```
## Compilar versión de producción
Si quiere compilar la versión de producción use el siguiente comando:
```
ng build --prod
```
