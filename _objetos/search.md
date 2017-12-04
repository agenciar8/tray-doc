---
title: Search
link: search
position: 16
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
 ~~~Json
    Array
    (
    [word] => teste
    [order_options] => Array
        (
            [0] => Array
                (
                    [value] => relevancia
                    [name] => Relevância
                    [selected] => 1
                )

            [1] => Array
                (
                    [value] => a_z
                    [name] => Nome do Produto
                    [selected] => 
                )

            [2] => Array
                (
                    [value] => menor_preco
                    [name] => Menor Preço
                    [selected] => 
                )

            [3] => Array
                (
                    [value] => maior_preco
                    [name] => Maior Preço
                    [selected] => 
                )

            [4] => Array
                (
                    [value] => hot
                    [name] => Mais Vendido
                    [selected] => 
                )

            [5] => Array
                (
                    [value] => destaque
                    [name] => Destaque
                    [selected] => 
                )

            [6] => Array
                (
                    [value] => lancamento
                    [name] => Lançamento
                    [selected] => 
                )

            [7] => Array
                (
                    [value] => data_lancamento
                    [name] => Data de Lançamento
                    [selected] => 
                )

        )

    [brands] => Array
        (
            [0] => Array
                (
                    [name] => Marca1
                    [selected] => 
                )

            [1] => Array
                (
                    [name] => Marca2
                    [selected] => 
                )

            [2] => Array
                (
                    [name] => Marca3
                    [selected] => 
                )

        )

    [available_options] => 
    )
 ~~~
   {: title="Objeto Search" }

 ~~~ twig
    {% if search.available_options %}
    <h3> Exibir Por:</h3>
    <select name="disponibilidade_tag">
    {% for option in search.available_options %}
        <option value="{{ option.value }}">
            {{ option.name }}
        </option>
    {% endfor %}
    </select>
    {% endif %}
 ~~~
   {: title="Disponibilidade" }

    ~~~ twig 
    {% if search.order_options %}
        <h3>Classificar Por:</h3>
        <select name="order">
        {% for option in search.order_options %}
        <option value="{{ option.value }}">
            {{ option.name }}
        </option>
        {% endfor %}
        </select>
    {% endif %}

 ~~~
   {: title="Ordenação" }

    ~~~ twig
    {% if search.brands %}
        <h4>Filtrar po Marcas:</h4>
        <select name="filtrar_marca">
        {% for brand in search.brands %}
            <option value="{{ brand.name }}">
                {{ brand.name }}
            </option>
        {% endfor %}
        </select>
    {% endif %}
    ~~~
    {:title="Marcas"}

    ~~~ twig
     {% if search.word %}
        <h5>
        Exibindo resultados para: 
            <strong> {{ search.word }}</strong>
        </h5>
    {% endif %}
    ~~~
    {:title="Termo Buscado"}
---

O Objeto `search` retorna informações relacionadas a busca de produtos.

**Disponível nas páginas**: search (alguns índices estão disponíveis na catalog)
{: .info }

As informações retornadas são:

Atributos | Descrição
------------------- | ------
**search.available_options** |	Opções de disponibilidade de produto
**search.order_options** |	Opções de ordenação
**search.word** | Termo buscado na loja.
**search.brands** |	As marcas vinculadas aos produtos dessa busca

Ao lado alguns exemplos:

