# Gatitobook
Neste curso, utilizaremos os poderosos recursos do Angular. Podemos deixar a nossa experiência de desenvolvimento ainda melhor com alguns recursos do VS Code.

Você pode instalar esse pacote de extensões específicas para o desenvolvimento de aplicações Angular.

Usaremos também o formatador de código Prettier. Para utilizá-lo com as regras do typescript de maneira harmoniosa, siga os seguintes passos:

1) Instale no nosso projeto utilizando o comando:
```
npm install --save-dev prettier
```
2) Instale os seguintes pacotes de desenvolvimento:
```
npm install --save-dev tslint-config-prettier
npm install --save-dev tslint-plugin-prettier
```
3) No arquivo tslint.json, coloque a seguinte configuração no atributo extends:

```
"extends": ["tslint:recommended", "tslint-plugin-prettier", "tslint-config-prettier"]
```
4) No Vs Code, utilize o comando Ctrl+Shift+P (ou Cmd+Shift+P caso esteja usando Mac OS), selecione a opção “Format Document” e, em seguida, selecione Prettier como formarter.

A partir de agora o VS Code formatará seu código sempre que você salvar um arquivo.
