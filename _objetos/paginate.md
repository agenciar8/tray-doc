---
title: Paginate
link: paginate
position: 13
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
 ~~~twig
 {{ paginate.counter('Encontramos {:count} produto(s) em {:pages} página(s)') }}
    
 {% if paginate.params.pageCount > 1 %}
  {{ paginate.first('Primeira', {'class': 'page-first'}) }}

  {% if paginate.hasPrev %}
    {{ paginate.prev('Anterior', {'class': 'page-prev'}) }}
  {% endif %}

  {{ paginate.numbers({
      'modulus': 9,
      'separator': '|',
      'class': 'page-link',
      'currentClass': 'page-current'
  }) }}

  {% if paginate.hasNext %}
      {{ paginate.next('Próxima', {'class': 'page-next'}) }}
  {% endif %}

  {{ paginate.last('Última', {'class': 'page-last'}) }}
  {% endif %}
 ~~~
   {: title="Exemplo" }
 ~~~ twig
    {{ element('snippets/pagination') }}
 ~~~
  {: title="Helper de paginação" }
---

O Objeto `paginate` retorna um helper de paginação de produtos.




**Disponível nas páginas**:  catalog,  search
{: .info }

Se quiser utilizar um snippet pronto, utilize a seguinte chamada:

Ao lado um exemplo de montagem da exibição da paginação personalizada.

Para mais informações, visite a documentação oficial do helper [Paginator](https://book.cakephp.org/2.0/en/core-libraries/helpers/paginator.html).
{: .attention}