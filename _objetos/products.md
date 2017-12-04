---
title: Products
link: products
position: 20
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
 ~~~Json
  Array
 (
  [0] => Array
   (
    [id] => 72
    [name] => Produto teste
    [description_small] => 
    [price] => 500.00
    [start_promotion] => 2017-01-01
    [end_promotion] => 2017-01-31
    [brand] => teste
    [model] => 
    [weight] => 
    [length] => 
    [width] => 
    [height] => 
    [stock] => 20
    [category_id] => 2
    [available] => 1
    [availability] => 
    [reference] => 
    [additional_button] => 1
    [has_variation] => 
    [additional_message] => 
    [warranty] => 
    [quantity_sold] => 
    [images] => Array
    (
    [0] => Array
    (
        [small] => https://images.tcdn.com.br/img/img_prod/30_.jpg
        [medium] => https://images.tcdn.com.br/img/img_prod/90_72_.jpg
        [large] => https://images.tcdn.com.br/img/img_prod/180_.jpg
        [full] => https://images.tcdn.com.br/img/img_prod/72_.jpg
    )
    )

    [shortcut] => teste-hoje
    [payment_option] => 72
    [related_categories] => 72
    [release_date] => 
    [slug] => mitica/teste-hoje
    [free_shipping] => 
    [Category] => Array
    (
        [id] => 2
        [name] => Mítica
    )

    [image] => 1
    [payment] => R$ 450,00 à  vista com  desconto Boleto - TrayCheckout
    [payment_option_html] => R$ 450,00 à  vista com  desconto Boleto - TrayCheckout
    [product_price] => 500.00
    [calculated_price] => 500.00
    [variants] => 
    [properties] => Array
        (
            [Pais] => Array
                (
                    [0] => Brasil
                )
        )
    [price_offer] => 0.00
    [featured] => 0
    [new] => 0
    [payment_option_details] => Array
    (
        [0] => Array
            (
                [display_name] => Boleto 
                [plots] => 1
                [value] => 450.00
            )

    )

    [minimum_price] => 0.00
    [ranking] => Array
    (
        [count] => 0
        [rating] => 0
        [ratingText] => 
    )

    [link] => http://loja.commercesuite.com.br/categoria/produto-teste
    [show_price] => 1
    [upon_request] => 
    [has_other_prices] => 
    [bonus_html] => 
    )
 )

 ~~~

right_code2: |
 ~~~ twig
 <div>
    Codigo do produto: <span>{{ products[0].id }}</span>
    <h3>{{ products[0].name }}</h3>
    <h3>{{ products[0].brand }}</h3>
 </div>
 {% if products[0].featured %}
    <span style="color:#fff; background:red">Produto em destaque!</span>
 {% endif %}
 <div>
    {% if products[0].price_offer > 0 and products[0].show_price %}
    Esse produto está em promoção!
    {% endif %}
    {% if products[0].price > 0 and products[0].show_price %}
    <span> De: R$:</span>{{ products[0].price|currency }} <small> por:</small>
    {% endif %}
    {{ products[0].payment }}
    {% set ranking = products[0].ranking %}
    {% if ranking %}
    Quantidade de avaliações: {{ ranking.count }} <br>
    Nota do produto: {{ ranking.rating }}
    {% endif %}
    {{ products[0].description }}
 </div>
 ~~~
 {: title="Exemplo" }
  ~~~ twig
    {% set images = products.images %}
    <img src="{{ images[0].small }}" alt="">
  ~~~
  {: title="Image Small" }
  
  ~~~ twig
    {% set images = products.images %}
    <img src="{{ images[0].medium }}" alt="">
  ~~~
  {: title="Image Medium" }

   ~~~ twig
    {% set images = products.images %}
    <img src="{{ images[0].large }}" alt="">
  ~~~
  {: title="Image Large" }

  ~~~ twig
    {% set images = products.images %}
    <img src="{{ images[0].full }}" alt="">
  ~~~
  {: title="Image Full" }
---

O Objeto `products` está disponível de acordo com as regras de cada página:

- Na “home” contém os produtos em destaque;
- Na “catalog” contém os produtos de uma categoria específica de acordo com os filtros aplicados;
- Na “search” contém os produtos de acordo com os critérios da busca e os filtros aplicados.

**Disponível nas páginas**:  home,  catalog,  search 
{: .info }

**Para saber mais sobre como gerenciar produtos acesse**: [Wiki - Gerenciar produtos](http://atendimento.tray.com.br/hc/pt-br/articles/211173928-Incluir-Produto-Avan%C3%A7ado)

As requisições de produtos sempre retornarão um array de dados onde cada chave está descrita abaixo:

Atributos | Descrição
------------------- | ------
**products.id**  |	Identificador único do produto
**products.name**  |	Nome do produto
**products.description_small**  |	Exibe um resumo do produto
**products.price**  |	Valor do produto
**products.start_promotion**  |	Exibe a data de ínicio da promoção do produto
**products.end_promotion**  |	Exibe a data de término da promoção do produto
**products.brand**  |	Exibe a marca do produto
**products.model**  |	Exibe o modelo do produto
**products.weight**  |	Exibe o peso do produto em gramas
**products.length**  |	Exibe o comprimento do produto em centímetros
**products.width**  |	Exibe a largura do produto em centímetros
**products.height**  |	Exibe a altura do produto em centímetros
**products.stock**  |	Quantidade de produtos em estoque
**products.category_id**  |	Identificador único da categoria principal do produto
**products.available**  |	Retorna se o produto está disponível
**products.availability**  |	Informação de disponibilidade do produto
**products.reference**  |	Exibe o código de referência do produto
**products.additional_button**  |	Retorna verdadeiro se deve-se exibir selo adicional 
**products.has_variation**  |	Retorna verdadeiro caso o produto contenha variações
**products.additional_message**  |	Exibe a mensagem adicional do produto
**products.warranty** | Retorna a quantidade de dias em garantia 
**products.quantity_sold**  |	Exibe a quantidade produtos vendidos
**products.images** | Retorna as imagens do produto
**products.shortcut** |
**products.payment_option** | Retorna uma string com as opções de pagamento configuradas
**products.related_categories**  |	Retorna o ID das categorias relacionadas ao produto
**products.release_date** | Retorna a data de lançamento do produto
**products.slug**| Retorna o slug do produto
**products.free_shipping**  |	Retorna verdadeiro se possuir frete grátis
**products.Category** | Catgeorias do produto **id**, **name**
**products.image**| Retorna 1 caso o produto tenha imagem
**products.payment**  |	Retorna opões de parcelamento do produto
**products.payment_option_html** | Retornas um bloco html com as opções de pagamentos
**products.product_price** |
**products.calculated_price**|
**products.variants**  |	Retorna um array com todas as informações das variações,os indices retornados são: **id**, **ean**, **product_id**, **price**, **stock**, **minimum_stock**, **reference**, **start_promotion**, **end_promotion**, **promotional_price**, **payment_option**, **illustrative_image**, **Sku**, **VariantImage**, **payment_option_details**
**products.properties** | Retorna as caracteristicas do produto
**products.price_offer**  |	Valor do produto em promoção
**products.featured**  |	Retorna verdadeiro se for destaque
**products.new**  |	Retorna verdadeiro se for lançamento
**products.payment_option_details**  |	Retorna as informações das formas de pagamento **display_name**, **plots**, **value**, **type**, **tax**
**products.minimum_price** | Retorna o preço minimo do produto.
**products.ranking**  |	count  rating Ranking (avaliação) do produto
**products.link**  |	Link para a página do produto
**products.show_price** | Retorna 1 caso as informações de preço devam ser exibidas
**products.upon_request**  |	Retorna se o produto está sob consulta
**products.has_other_prices**  |	Retorna se o produto possui outros preços.
**products.bonus_html** | Retorna html com o recurso de pontos
