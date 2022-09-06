# angular_2_curso


## Instalação node_modules
```
$ npm i
```

## Iniciar a API
```
npm start
```

https://cursos.alura.com.br/forum/topico-erro-ao-instalar-o-sqlite3-112927 Esse aqui vc deleta o sqlite3 no packge.json deleta toda a pasta node_modules e depois executa o npm i e depois baixa ele denovo usando o npm i sqlite3.

E tem esse outro: https://cursos.alura.com.br/forum/topico-macos-chip-m1-problema-na-execucao-do-comando-npm-i-dentro-da-pasta-api-157646 Que a solução e atualizar a lib no package.json de ( "sqlite3": "^4.1.0" ) para uma mais recente exemplo: ("sqlite3": "^5.0.2"), deletar a pasta node_modules e executar o npm i novamente.
