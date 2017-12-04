---
title: Categories
link: categories
position: 7
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
  ~~~ obj
    [0] => Array
    (
    [slug] => [SLUG]
    [id] => [ID]
    [parent_id] => [PARENT_ID]
    [name] => [NAME]
    [description] => [DESCRIPTION]
    [title] => [TITLE]
    [small_description] =>  [SMALL_DESCRIPTION]
    [link] => [URL_CATEGORY]
    [has_product] => 1
    [images] => Array
        (
            [0] => [URL_IMAGE]
        )

    [children] => Array
    (
        [0] => Array
        (
            [slug] => [CHILDREN_SLUG]]
            [id] => [CHILDREN_ID]
            [parent_id] =>  [PARENT_ID]
            [name] =>[CHILDREN_NAME]
            [description] =>[CHILDREN_DESC]
            [title] => 
            [small_description] => 
            [link] => [CHILDREN_LINK]
            [has_product] => 1
            [images] => 
            [children] => 
        )
        )
    )
  ~~~
  {: title="Exemplo de retorno do Objeto Categories" }

  ~~~ html
    <ul>
     {% for category in categories %}
      <li>
       <a href="{{ category.link }}">
         {{ category.name }}
        </a>
        {% if category.children %}
         <ul class="menu-children">
          {% if category.images %}
            <img src="{{ category.images[0] }}" 
            alt="{{ category.name }}">
         {% endif %}
        {% for child in category.children %}
         <li>
          <a href="{{ child.link }}">{{ child.name }}</a>
         </li>
         {% endfor %}
        </ul>
        {% endif %}
        </li>
        {% endfor %}
    </ul>
  ~~~
  {: title="Exemplo" }
---

O Objeto `categories` é responsável por retornar um array as categorias cadastradas no painel.

**Disponível nas páginas**: Todas.
 {: .attention }

**Para saber mais sobre como gerenciar categorias acesse**: [Wiki - Gerenciar categorias](http://atendimento.tray.com.br/hc/pt-br/articles/211842497-Gerenciar-Categorias)
{: .attention }



Atributos | Descrição
------------------- | ------
**categories[0].slug** | Endpoint onde é acessado a categoria
**categories[0].id** |	Identificador único da categoria
**categories[0].parent_id** |	Identificador único da categoria mãe
**categories[0].name** |	Nome da categoria
**categories[0].description** |	Descrição da categoria
**categories[0].title** |	Titulo da Categoria (SEO)
**categories[0].small_description** |	Descrição detalhada da categoria
**categories[0].link** |	URL da categoria
**categories[0].has_product** |	Retorna 1 caso tenha produtos
**categories[0].images** |	Imagem por categoria
**categories[0].children** |	Subcategorias

