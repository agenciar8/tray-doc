---
title: Breadcrumb
link: breadcrumb
position: 15
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
 ~~~Json
    Array
    (
    [0] => Array
        (
            [name] => Feminino
            [link] => http://loja.commercesuite.com.br/feminino
        )

    [1] => Array
        (
            [name] => Blusas
            [link] => http://loja.commercesuite.com.br/feminino/blusas
        )
    )
 ~~~
   {: title="Objeto Breadcrumb" }

 ~~~ twig
    {% element 'snippets/breadcrumb' %}
 ~~~
   {: title="Helper Breadcrumb" }

    ~~~ twig
       
    <div class="vspace-sm">
    <div class="breadcrumb">
    <span class="breadcrumb-text">
    Você está em:
    </span>
    <span class="breadcrumb-item">
        <a href="{{ links.home }}">
            Pagina Inicial
        </a>
    </span>
    <span class="icon-breadcrumb">&gt</span>
    {% if breadcrumb %}
    {% for item in breadcrumb %}
        <span class="breadcrumb-item">
            <a href="{{ item.link}}" title="{{ item.name }}">
                {{ item.name }}
            </a>
        </span>
        <span class="icon-breadcrumb">&gt</span>
    {% endfor %}
    {% endif %}
    {% if pages.current == 'product' %}
        <span class="breadcrumb-item">
            {{ product.name }}
        </span>
    {% else %}
        <span class="breadcrumb-item">
            {{ category.name }}
        </span>
    {% endif %}
    </div>
    </div>
 ~~~
   {: title="Exemplo de criação Breadcrumb" }
---

O `breadcrumb` é responsável por retornar um array com as informações de localização das categorias relacionadas.

**Disponível nas páginas**: catalog e product
{: .info }
**Para saber mais sobre como gerenciar categorias acesse**: [Wiki - Gerenciar categorias]()
{: .info}

Nesse Objeto são retornados os atributos abaixo:


Atributos | Descrição
------------------- | ------
**breadcrumb.name** | Retorna o nome da categoria
**breadcrumb.link** | Retorna o link para a categoria

Para exibir um `breadcrumb`, você poderá utilizar o helper de breadcrumb, onde exibem o breadcrumb em um bloco pre-moldado. Ao lado a chamada:

É possivel também montar seu proprio breadcrumb, ao lado exemplo: