---
title: Objetos do Opencode
link: objetos
position: 1
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
  ~~~ twig
   <h1>{{ categories[0].name }}</h1>
  ~~~
  {: title="Acessando dado em um Objeto" }
    ~~~ html
  <h1>Minha Categoria</h1>
  ~~~
  {: title="Retorno do Objeto" }
right_code2: |
  ~~~ twig
    {% for product in products %}
       {% if product.id == '2' %}
          {{ product.id }}
       {% endif %}
    {% endfor %}
  ~~~
  {: title="Validando item usando "if"" }
    ~~~ twig
   {% for product in products %}
      {% if category.images %}     
        <img src="{{ category.images[0] }}" 
            alt="{{ category.name }}">
      {% endif %}
   {% endfor %}
  ~~~
  {: title="Validando Objeto" }
right_code3: |
  ~~~ twig
   <ul>
    {% for category in categories %}
      <li>{{ category.name }}</li>
    {% endfor %}
    </ul>
  ~~~
  {: title="Listando itens de um objeto com o "for"" }
    ~~~ twig
   <ul>
        <li>Categoria 1</li>
        <li>Categoria 2</li>
        <li>Categoria 3</li>
        <li>Categoria 4</li>
        <li>Categoria 5</li>
    </ul>
  ~~~
  {: title="Retorno na pagina" }
---


Objetos são estruturas de dados utilizadas para facilitar a manipulação de determinadas informações.

Podemos citar por exemplo o objeto `product` que contem todos os atributos de um produto, e também o objeto `categories` que tem como retorno todas as categorias da loja.

As  informações podem ser trazidas em um vetor `(array)`. Por isso, para utilizar por exemplo uma categoria, é necessário passar seu índice na listagem de categorias, ou seja a posição que a categoria se encontra dentro desse vetor de categorias.

#### If

Podemos exibir na tela somente os itens que tiverem o atributo igual ao que foi passado, para isso podemos fazer uma comparação na exibição de produto utilizando o `if`:

Com o `if` também podemos verificar se o objeto em questão, no caso o objeto `categories`, contém determinado atributo cadastrado. Como exemplo ao lado, é verificado se as categorias contém uma imagem, caso tenha ela é exibida na tela:

Para saber mais sobre as opções da tag **if**, clique [aqui](https://twig.symfony.com/doc/2.x/tags/if.html) para ir até a documentação do [Twig](https://twig.symfony.com/doc/2.x/)

#### For

Podemos também exibir elementos de um objeto utilizando um laço for, exemplo ao lado:

Para saber mais sobre as opções da tag **for**, clique [aqui](https://twig.symfony.com/doc/2.x/tags/for.html) para ir até a documentação do [Twig](https://twig.symfony.com/doc/2.x/)
