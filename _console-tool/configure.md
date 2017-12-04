---
title: Configurar tema para edição
link: configure
position: 8
origem: /frontend/ 
session: /frontend/console-tool/
right_code: |
  ~~~ bash
  $ mkdir meuTema
  $ cd meuTema
  $ opencode configure API_KEY PASSWORD THEME_ID 
  ~~~
  {: title="Configurando tema para edição" }

    ~~~ yml
    ---
    :api_key: API_KEY
    :password: PASSWORD
    :theme_id: THEME_ID
    :preview_url: PREVIEW_URL
  ~~~
  {: title="config.yml" }
---

Esse comando é responsável por configurar o tema, é através dele que é gerado o arquivo `config.yml`, responsável pela sincronização do tema.


