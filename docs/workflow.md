---
sidebar_position: 2
tags:
  - github
  - github-action
  - repositorio
  - workflow
---

# Workflow

Partiremos del punto en el que nuestro sitio ya está listo para ser desplegado, y ya forma parte de un repositorio **público** de una cuenta gratuita de GitHub.

:::info Plan de GitHub
Hoy en día, la única manera de desplegar respositorios privados a GitHub Pages es teniendo una cuenta de pago.
:::

## Creación del workflow en nuestro repositorio

Un **workflow** es un proceso automatizado configurable que ejecutará uno o más `jobs`, y se define mediante un archivo YAML que se verifica en nuestro repositorio y se ejecutará cuando lo active un evento dentro del mismo, o bien, puede activarse manualmente o en una programación definida.

Dentro de nuestro repositorio iremos a la pestaña *Actions*:

![Actions](/img/actions.png)

Daremos click en **set up a workflow yourself**.

A continuación se nos mostrará un editor para crear nuestro workflow. En este caso le pondremos por nombre `deploy-docusaurus.yml`.

![Create workflow](/img/create-workflow.png)

Y el contenido del mismo será el siguiente:

```yaml
name: deploy-docusaurus

on:
  push:
    branches: [main]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - name: Check out repo
        uses: actions/checkout@v2
      # Node is required for npm
      - name: Set up Node
        uses: actions/setup-node@v2
        with:
          node-version: "14.x"
      # Install and build Docusaurus website
      - name: Build Docusaurus website
        run: |
          yarn install 
          yarn clear
          yarn build
      - name: Deploy to GitHub Pages
        if: success()
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
        env:
          ACTIONS_ALLOW_UNSECURE_COMMANDS: 'true'
```

Una vez tengamos nuestro workflow listo, solamente realizaremos el commit de nuestro nuevo archivo en la rama `main` dando click en **Start commit**.

:::caution
El archivo `deploy-docusaurus.yml` ahora forma parte de nuestro repositorio, por lo que, en caso de querer modificarlo directamente en cualquier editor de texto de manera local, es necesario realizar un `pull` en nuestro repositorio.
:::