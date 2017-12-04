---
title: Filters
link: filters
position: 10
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
  ~~~ obj
    [categories] => Array
    (
    [title] => Categorias
    [applied] => 
    [items] => Array
    (
        [0] => Array
        (
        [title] => EPSON
        [count] => 2
        [url] => /mvc/store/catalog/?categoria=8
        [type] => link
        [applied] => 0
        )

        [1] => Array
        (
        [title] => HP
        [count] => 18
        [url] => /mvc/store/catalog/?categoria=10
        [type] => link
        [applied] => 0
        )

    )

    )

    [brands] => Array
    (
    [title] => Filtrar por Marca
    [applied] => 
    [items] => Array
    (
        [0] => Array
        (
            [title] => EPSON
            [count] => 2
            [url] => /mvc/store/catalog/?categoria=2&loja=332719&marca=marca_epson
            [type] => checkbox
            [applied] => 0
            [name] => marca
            [value] => marca_epson
        )

        [1] => Array
        (
            [title] => HP
            [count] => 18
            [url] => /mvc/store/catalog/?categoria=2&loja=332719&marca=marca_hp
            [type] => checkbox
            [applied] => 0
            [name] => marca
            [value] => marca_hp
        )

    )

    )

    [prices] => Array
    (
    [title] => Faixa de Preços
    [applied] => 
    [items] => Array
    (
    [0] => Array
        (
            [title] => De R$ 22,99 a R$ 156,81
            [count] => 13
            [url] => /mvc/store/catalog/?categoria=2&loja=332719&range=22.99-156.81
            [type] => checkbox
            [applied] => 0
            [name] => range
            [value] => 22.99-156.81
            [from] => 22.99
            [to] => 156.81
        )

    [1] => Array
        (
            [title] => De R$ 156,82 a R$ 291,63
            [count] => 4
            [url] => /mvc/store/catalog/?categoria=2&loja=332719&range=156.82-291.63
            [type] => checkbox
            [applied] => 0
            [name] => range
            [value] => 156.82-291.63
            [from] => 156.82
            [to] => 291.63
        )

    [2] => Array
        (
            [title] => De R$ 561,28 a R$ 696,09
            [count] => 2
            [url] => /mvc/store/catalog/?categoria=2&loja=332719&range=561.28-696.09
            [type] => checkbox
            [applied] => 0
            [name] => range
            [value] => 561.28-696.09
            [from] => 561.28
            [to] => 696.09
        )

        )

        )
  ~~~
  {: title="Exemplo de retorno Objeto Filters" }
---

O Objeto `filters` retorna um array com filtros que da a possibilidade de montar filtros com caracteristicas e variações de produtos.

**Disponível nas páginas**: catalog, search,  home
{: .info }
Para saber mais sobre como gerenciar os Filtros Inteligentes acesse:  [Wiki - Filtro Inteligente](http://atendimento.tray.com.br/hc/pt-br/articles/211843777-Menu-Esquerdo-Inteligente)
{: .info }


Chaves principais | Descrição
------------------- | ------
categories|	Lista de categorias
brands|	Lista de marcas
prices|	Lista de preços
variations|	Lista de variações
features|	Lista de características  

  
Nessas chaves são retornadas informações secundarias no filtro.
 

Chaves secundárias	| Descrição
------------------- | ------
title|	Título do filtro (ex: Categorias, Filtrar por marca, Faixa de preços)
items|	Lista de itens

