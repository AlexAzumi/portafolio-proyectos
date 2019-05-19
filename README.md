[![Netlify Status](https://api.netlify.com/api/v1/badges/eaf1007b-cb2f-4151-9922-e1560ff75126/deploy-status)](https://app.netlify.com/sites/azumi-vault/deploys)
![GitHub package.json version](https://img.shields.io/github/package-json/v/alexazumi/azumi-vault.svg?style=popout)
# Azumi's vault (Portafolio de Alejandro Suárez)
Portafolio de proyectos web de mis **proyectos personales** importantes.

## Correr de manera local
Para correr el proyecto de manera local necesitas seguir un par de pasos sencillos, pero para ello se necesita:
- git
- npm 6.4.1 o más nuevo
- Angular CLI 7.1.4 o más nuevo

Primero se necesita clonar el repositorio con el siguiente comando:
```
git clone https://github.com/AlexAzumi/azumi-vault.git
```
> Nota: Los siguientes comandos se tienen que realizar en la carpeta raíz del proyecto

Una vez clonado el repositorio, se necesita descargar todas las dependenicas con **npm** usando el siguiente comando:
```
npm install
```
Ahora es necesario compilar la hoja de estilos:
```
npm run sass
```
Después de compilar los estilos estará listo para ejecutarse de manera local:
```
ng serve --open
```
> El argumento *--open* es para que automáticamente se abra la página en el navegador, de igual manera puede acceder en la dirección *http://localhost:4200/*

## Compilar versión de producción
Si quiere compilar la versión de producción use el siguiente comando:
```
npm run build
```
> Nota: Este comando compila y minifica automáticamente la hoja de estilos
