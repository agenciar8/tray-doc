---
title: Criar Tema
link: new
position: 6
origem: /frontend/ 
session: /frontend/console-tool/
right_code: |
 ~~~ bash
  $ opencode new API_KEY PASSWORD THEME_NAME THEME_BASE
  ~~~
  {: title="Cria um novo tema" }
---

Cria um novo tema com o nome informado.

É possivel também informar um tema base para criação informando também o id do tema a ser utilizado.

##### Experimente já!

Ficou curioso para saber como funciona? Experimente criar agora uma tema na nossa loja de teste...

Para isso basta usar a `API_KEY` e o `PASSWORD` disponibilizados a baixo:

 ~~~ yml
API_KEY: 20a699301d454509691f3ea02c1cba4b
PASSWORD: ea0727075e1639a42fd966a2f6e67abc
~~~


o comando ficará da seguinte maneira:

 ~~~ bash
$ opencode new 20a699301d454509691f3ea02c1cba4b  ea0727075e1639a42fd966a2f6e67abc "primeiro-tema"
  ~~~
  {: title="Cria um novo tema" }

Após isso o seu tema já estará criado.

**ATENÇÃO**, não crie nenhum tema importante com as credenciais a cima. Por se tratar de uma loja de teste todos os temas criados são apagados periodicamente.
{: .error }