# Azumi's vault | Portafolio de Alejandro Suárez

[![Netlify Status](https://api.netlify.com/api/v1/badges/eaf1007b-cb2f-4151-9922-e1560ff75126/deploy-status)](https://app.netlify.com/sites/azumi-vault/deploys)
[![CodeFactor](https://www.codefactor.io/repository/github/alexazumi/azumi-vault/badge)](https://www.codefactor.io/repository/github/alexazumi/azumi-vault)
![GitHub package.json version](https://img.shields.io/github/package-json/v/alexazumi/azumi-vault.svg?style=popout)

<p align="center">
  <img src="/preview.jpg" alt="Captura del portafolio">
</p>

Portafolio de proyectos web de mis **proyectos personales** importantes.

## Correr de manera local

Para correr el proyecto de manera local necesitas seguir un par de pasos sencillos, pero para ello se necesita:

- git cli (o clonando el repositorio desde GitHub)
- yarn - Package manager

Primero se necesita clonar el repositorio con el siguiente comando:

```
git clone https://github.com/AlexAzumi/azumi-vault.git
```

Luego accede a la carpeta donde se clonó el repositorio

```
cd azumi-vault
```

Una vez en la carpeta raíz del repositorio, se necesitará descargar todas las dependenicas con `yarn` usando el siguiente comando:

```
yarn install
```

Después de compilar los estilos estará listo para ejecutarse de manera local:

```
yarn dev
```

> Una vez iniciado el servidor, entra en la dirección _http://localhost:3000/_ para ver la página en modo desarrollo

## Compilar versión de producción

Si quiere compilar la versión de producción use el siguiente comando:

```
yarn deploy
```

Al terminar podrás encontrar todos los archivos de la página en la carpeta `build`
