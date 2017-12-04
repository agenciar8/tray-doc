---
title: Seals
link: seals
position: 14
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
 ~~~twig
    {{ seals.ebit }}	
 ~~~
   {: title="Selo E-bit" }

 ~~~ twig
    {{ seals.hackersafe }}	 
 ~~~
   {: title="Selo Loja Protegida" }
---

A Tray possui integração com 2 selos: [Loja Protegida](http://atendimento.tray.com.br/hc/pt-br/articles/211809727-Loja-protegida) e [Ebit](http://atendimento.tray.com.br/hc/pt-br/articles/211174798-E-bit).

Esses selos só são retornados caso estejam  configurados na loja.

**Disponível nas páginas**: todas
{: .info }

Atributos | Descrição
------------------- | ------
**seals.ebit** |	Retorna o HTML do selo do Ebit
**seals.hackersafe** | Retorna o HTML do selo Loja Protegida
