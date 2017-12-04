---
title: Como manipular Objetos
link: objetos2
position: 2
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
  ~~~ twig
  {{ dump(product.image) }}
  ~~~
  {: title="Debugando Objetos" }
    ~~~ json
  Array
    (
        [0] => Array
            (
                [small] => http://images.tcdn.com.br/img/small.jpg
                [medium] => http://images.tcdn.com.br/img/medium.jpg
                [large] => http://images.tcdn.com.br/img/large.jpg
                [full] => http://images.tcdn.com.br/img/full.jpg
            )

    )
  ~~~
  {: title="Retorno do Debug" }
---

Podemos manipular objetos de diversas maneiras, como exibir seus atributos na tela, utilizar laços de repetição e fazer validações, tudo isso de acordo com a necessidade.

As requisições de produtos sempre retornarão um array (vetor) de dados, por isso para exibir um produto você deve passar seu índice dentro desse vetor.

Para saber os dados retornados no objeto, você pode utilizar o debug do twig, ele irá exibir na tela a estrutura retornada no objeto

