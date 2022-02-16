---
sidebar_position: 3
tags:
  - despliegue
  - github-pages
---

# Despliegue

## Resultados del workflow

Con el commit anterior, nuestro workflow ya fue ejecutado por primera vez debido al `push` interno que llevó a cabo GitHub. La información acerca de la ejecución del workflow podemos verla dentro de la pestaña *Actions*:

![Workflow results](./../static/img/action-result.png)

El resultado nos ha creado una nueva rama llamada `gh-pages`:
![Branch](./../static/img/branches.png)

La cual tiene por contenido el build generado por nuestro workflow:

![Content](./../static/img/gh-pages-content.png)

## Limitación del workflow

Al usar `GITHUB_TOKEN` como método de autenticación necesitamos seleccionar la rama `gh-pages` **únicamente para el primer despliegue** en la sección de *Settings/Pages* de nuestro repositorio.

En el apartado de *Source* seleccionamos la rama `gh-pages`, la carpeta que contiene nuestros archivos (en este caso la carpeta `root`) y presionamos **Save**:

![Settings](./../static/img/source.png)

Al recargar esta misma sección después de algunos segundos, veremos lo siguiente:

![Deployed](./../static/img/deployed.png)

El link nos llevará a nuestro sitio de Docusaurus:

![Site](./../static/img/site.png)

:::note
Ahora ya tenemos todo listo para que, cada que se realice un `push` a nuestro repositorio, de manera automática se ejecute el despliegue gracias a nuestro workflow.
:::