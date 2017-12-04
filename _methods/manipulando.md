---
title: Manipulando métodos
link: methods2
position: 1
origem: /frontend/ 
session: /frontend/methods/
right_code: |
 ~~~ twig
 {% set products = Products() %}
 {{ products[0].id}}
 ~~~
  {: title="Retorno Array" }

 ~~~ twig
 {{ Image('additional_button') }}
 ~~~
 {: title="Retorno de Informações Pontuais" }

right_code2: |
 ~~~ twig
 {% set products = Products({
    'order': {
        'quantity_sold': 'desc',
        'name': 'asc',
        'id': 'desc'
    }
 }) %}
 {% for product in products %}
    {{ product.name }}
 {% endfor %}
 ~~~
  {: title="Laço For "Produtos"" }

   ~~~ twig
 {% set myCategories = Categories(
    { "order": { "name": "asc" }}) %}
 <ul>
    {% for category in myCategories %}
    <li>{{ category.name }}</li>
    {% endfor %}
 </ul>
 ~~~
  {: title="Laço For "Categorias"" }

right_code3: |


---

Podemos manipular os métodos de diversas maneiras, como exibir seus atributos na tela, utilizar laços de repetição e fazer validações, tudo isso de acordo com a necessidade.

Alguns métodos como por exemplo `Product()`, `Brands()` e `Categories()` sempre retornarão um array (vetor) de dados, por isso para exibir determinada informação você deve passar seu índice dentro desse vetor ou utilizar um laço de repetição para exibir as informações. Já os métodos como Assets(), Image() e a Translation(), retornam apenas informações pontuais.

Desta forma, para exibir uma posição do vetor de products retornadas pelo método é necessario passar o indice do item no Array retornado, como ao lado.

Podemos também exibir todos os produtos ou todas as categorias utilizando uma estrutura de repetição (laço for)

Além disso podemos utilizar por exemplo o método Image() para exibir um botão adicional cadastrado no painel.

