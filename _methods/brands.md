---
title: Brands
link: brands
position: 4
origem: /frontend/ 
session: /frontend/methods/
right_code: |
 ~~~ twig
  {# todas as marcas #}
  <ul>
    {% set brands = Brands() %}
    {% for brand in brands %}
      <li>{{ brand.name }}</li>
    {% endfor %}
  </ul>
 ~~~
  {: title="Todas as Marcas" }

   ~~~ twig
  
  {# busca a marca Tray #}
  <ul>
    {% set brandTray = Brands( { "brand": "Tray" } ) %}
    {% for brand in brandTray %}
      <li>{{ brand.name }}</li>
    {% endfor %}
  </ul>

  {# busca o id 10 #}
  <ul>
    {% set brands = Brands( { "id": "10" } ) %}
    {% for brand in brands %}
      <li>{{ brand.id }}</li>
    {% endfor %}
  </ul>
 ~~~
  {: title="Marca especifica" }

   ~~~ twig
   
    {# todas as marcas ordenadas por ID decrescente #}
    <ul>
     {% set brands = Brands({ "order": { "id": "desc" }}) %}
     {% for brand in brands %}
      <li>
       <span>{{ brand.id }}</span>
       <span>{{ brand.name }}</span>
      </li>
     {% endfor %}
    </ul>
    
 ~~~
  {: title="Resultados Ordenados" }

---
O Método `Brands()` retorna as marcas cadastradas no Painel Administrativo da loja.

**Disponível nas páginas**: todas
{: .info }
**Para saber mais sobre como gerenciar marcas acesse**: [Wiki - Gerenciar Marcas](http://atendimento.tray.com.br/hc/pt-br/articles/211173958-Gerenciar-Marcas)
{: .info}

As requisições de marcas sempre retornarão um array de dados onde cada chave está descrita abaixo:


Atributos | Descrição
------------------- | ------
**brands[0].id** |	Identificador único da marca
**brands[0].name** |	Nome da marca
**brands[0].slug** |	Final da url da marca

Veja alguns exemplos de uso ao lado:

