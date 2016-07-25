# wepack-boilerplate
Boilerplate simple to start a project using Webpack, Grunt and Compass

## Dependências do Grunt

Instale o **Node** caso não tenha, recomendados utilizar o [NVM](https://github.com/creationix/nvm).

```
brew install node
```

Instale as dependências do **Node** para o projeto

```
cd iclinic-app
npm install
```

### Comandos Grunt

```
grunt                   # Monitora alterações no css e js
grunt js                # Compila o JS
grunt js --prod         # Compila o JS para produção
grunt css               # Compila o CSS
grunt build             # Compila o JS e CSS
grunt build --prod      # Compila o JS e CSS para produção