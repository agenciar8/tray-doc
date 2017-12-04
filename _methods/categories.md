---
title: Categories
link: categories
position: 5
origem: /frontend/ 
session: /frontend/methods/
right_code: |
 ~~~ twig
 {# todas as categorias #}
 <ul>
  {% set categories = Categories() %}
  {% for categorie in categories %}
   <li>{{ categorie.name }}</li>
  {% endfor %}
 </ul>
 ~~~
  {: title="Todas as Categorias" }

   ~~~ twig
 {# busca o id 2 #}
 {% set categoryTray = Categories( { "id": 2 } ) %}
 <span>{{ categoryTray.name }}</span>
 ~~~
  {: title="Categoria especifica" }

 ~~~ twig
 {# todas as categorias ordenadas por nome ascendente #}
 {% set myCategories = Categories({ 
     "order": { "name": "asc" }}) %}
 <ul>
  {% for category in myCategories %}
   <li>{{ category.name }}</li>
  {% endfor %}
 </ul>      
 ~~~
  {: title="Resultados Ordenados" }

---
O método `Categories()` retorna as categorias cadastradas no Painel Administrativo da loja.


**Disponível nas páginas**: todas
{: .info }
**Para saber mais sobre como gerenciar categorias acesse**: [Wiki - Gerenciar Categorias](http://atendimento.tray.com.br/hc/pt-br/articles/211842497-Gerenciar-Categorias)
{: .info}

As requisições de categorias sempre retornarão um array de dados, veja o padrão de retorno em: [Categories](/frontend/objetos/#categories)

Veja alguns exemplos de uso ao lado:
