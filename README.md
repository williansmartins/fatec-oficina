# Repositorio: fatec-oficina

TAGS:
-1. v1.0 (criando o repositorio e add o readme)
-2. v1.1 (adicionando estrutura inicial)
-3. v1.2 (adicionando gulp, bootstrap e less)

Etapas de desenvolvimento:
1. Baixar as dependencias
```
npm install
```

2. Compilar os JS's e LESS's
```
gulp build-js
gulp build-js-vendor
gulp build-css
gulp build-css-vendor
```

3. Iniciar o servidor embutido
```
gulp server
```

3.1 (ou tudo de uma vez)
```
gulp
```

Problemas:
1. Gulp não sendo reconhecido
```
npm install --global gulp-cli

```
