---
title: Tray
link: tray
position: 3
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
  ~~~ obj
    Array
    (
    [analytics] =>[SCRIPTS]
    [credits] => Array
        (
            [message] => Tecnologia TrayCommerce
            [status] => ATIVA
            [url] => [URL_REDIRECT]
        )
    [meta] => [META-TAGS]
    [scripts] =>[SCRIPTS]
    [styles] =>[STYLES]
    [paths] => Array
        (
            [js] => [PATH_URL]
            [css] => [PATH_URL]
            [shop_image] =>[PATH_URL]
            [system_image] =>[PATH_URL]
            [theme] =>[PATH_URL]
        )
    )
  ~~~
  {: title="Exemplo de retorno Objeto Tray" }
---

Esse objeto retorna algumas configurações e integrações relacionadas a loja.

Atributos | Descrição
------------------- | ------
 **tray.analytics**  | Script de estatísticas de visitas do Google Analytics
 **tray.credits**     | Retorna informações de creditos da Tray **message**, **status**, **url**
 **tray.meta** | Retorna informações de meta dados configuradas na plataforma 
 **tray.scripts**   | Retorna os scripts internos da plataforma.
 **tray.styles** | Retornas as folhas de estilos internas da plataforma.
 **tray.paths** | Retorna caminho dos cdns utilizados no tema **js**, **css**, **shop_image**, **system_image**, **theme** 


