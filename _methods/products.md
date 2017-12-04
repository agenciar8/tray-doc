---
title: Products
link: products
position: 7
origem: /frontend/ 
session: /frontend/methods/
right_code: |
 ~~~ twig
  {# Trás todos os produtos #}
  {% set products = Products() %}

 ~~~
  {: title="Todos os produtos" }

   ~~~ twig
  
  {#  Trás 8 produtos em destaque ordenados pelos mais vendidos que estejam cadastrados nas categorias 1 e 2 e tenham como marca "Tray" #}
   {% set products = Products({
       'filter': 'featured',
       'limit': 8,
       'order': {'quantity_sold': 'desc'},
        'categories': [2, 3],
       'brands': 'Tray'
   }) %}
 ~~~
  {: title="produtos especificos" }

   ~~~ twig
   
    {% set products = Products({
        'order': {
            'quantity_sold': 'desc',
            'name': 'asc',
            'id': 'desc'
        }
    }) %}
    
 ~~~
  {: title="Multipla Ordenação" }

---
O Método `Products()` retorna os produtos cadastrados na loja.


**Disponível nas páginas**: todas
{: .info }
**Para saber mais sobre como gerenciar produtos acesse Wiki** - [Produtos](http://dev.tray.com.br/hc/pt-br/articles/205391978-Products)
{: .info}

As requisições de produtos sempre retornarão um array de dados, veja o padrão de retorno em: [Products](http://localhost:4000/frontend/objetos/#products)

É possivel aplicar filtros a esse método para que ela retorne apenas os produtos desejados.
Segue a baixo a relação de filtros disponiveis:

Filtro | Parametro
------------------- | ------
**filter** |	O filtro filter pode receber os seguintes parametros: **featured**, **new**, **free_shipping**, **available**, **promotion**
**limit** |	Recebe um valor da qual será a quantidade maxima de produtos.
**order** |	O filtro order é usado para ordernar a lista de produtos, pode receber os seguintes parametros: **id**, **name**, **price**, **price_offer**, **stock**, **rand**
**categories**|	O filtro categories Recebe o id das categorias da qual deseja filtrar os produtos.
**brands** |	O filtro brands Recebe o nome da marca da qual deseja filtrar os produtos.

Veja alguns exemplos de uso ao lado:

