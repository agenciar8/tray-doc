---
title: Store
link: store
position: 4
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
  ~~~ obj
    Array
    (
    [id] => [STORE_ID]
    [name] => [STORE_NAME]
    [logo] => [STORE_IMAGE]
    [status] => ativa
    [url] => [STORE_URL]
    [secure_url] => [STORE_URL_SECURE]
    [chat] => [CHAT]
    [current_url] =>[CURRENT_URL]
    )
  ~~~
  {: title="Exemplo de retorno Objeto Store" }
---

Esse objeto retorna os dados da loja.

Atributos | Descrição
------------------- | ------
 **store.id**  | Identificador único da loja
 **store.name**     | Nome da loja
 **store.status** | Retorna o status da loja na plataforma
 **store.url** | URL da loja
 **store.secure_url**   | Retorna a url em ambiente seguro (https)
 **store.chat** | Retorna o conteúdo do campo "Atendimento Online" cadastrado no Painel Administrativo
 **store.current_url** | Retorna a url atual


