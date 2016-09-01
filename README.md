# webpack-boilerplate
Boilerplate simples para iniciar um projeto usando ES6 + webpack

## Dependências do Grunt

Para compilar o CSS é necessário ter o **ruby** e o [bundler](http://www.bundler.io/) instalado:

```shell
gem install bundler
```

Instale o **Node** caso não tenha, recomendados utilizar o [NVM](https://github.com/creationix/nvm).

```
brew install node
```

Instale as dependências do **Node** para o projeto

```
cd webpack-boilerplate
npm install
```

Instale as dependências do Compass

**Opção 1**:

```
cd compass
bundle install --path .bundle
```

**Opção 2** (usando o atalho do Grunt):

```shell
grunt bundler
```

#### Compilando CSS

```shell
grunt css
```

#### Monitorando alterações no Compass e Javascript

```shell
grunt
```

#### Otimização de imagens

```shell
grunt imagemin
```

Otimiza as imagens JPG e PNG utilizando o plugin [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)

### Comandos Grunt

```
grunt                   # Monitora alterações no css e js
grunt js                # Compila o JS
grunt js --prod         # Compila o JS para produção
grunt css               # Compila o CSS
grunt build             # Compila o JS e CSS
grunt build --prod      # Compila o JS e CSS para produção
```

### Contribuindo 

Toda e qualquer pessoa é bem-vinda para contribuir.
