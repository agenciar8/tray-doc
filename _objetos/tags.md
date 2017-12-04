---
title: Tags
link: tags
position: 9
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
  ~~~ obj
    Array
    (
        [0] => Array
            (
                [word] => Palavra1
                [font_size] => 100
                [url] => /Palavra1
            )

        [1] => Array
            (
                [word] => Palavra2
                [font_size] => 220
                [url] => /Palavra2
            )

        [2] => Array
            (
                [word] => Palavra3
                [font_size] => 100
                [url] => /Palavra3
            )

        [3] => Palavra1
            (
                [word] => Palavra4
                [font_size] => 100
                [url] => /Palavra4
            )
    )
  ~~~
  {: title="Exemplo de retorno Objeto Tags" }

  ~~~ twig
  {% for tag in tags %}
  <a href="{{ tag.url }}" style="font-size: {{ tag.font_size }}%">
     {{ tag.word }}
  </a>
  {% endfor %}
   ~~~
  {: title="Exemplo" }

---

O Objeto `tags` retorna uma lista com as palavras mais buscadas na loja.


Atributos | Descrição
------------------- | ------
**tags[0].font_size**	| Tamanho da fonte com base na quantidade de vezes que foi buscada
**tags[0].url** |	URL para a página de busca
**tags[0].word** | Palavra buscada


