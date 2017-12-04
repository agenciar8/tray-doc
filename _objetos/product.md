---
title: Product
link: product
position: 19
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
 ~~~Json
 Array
  (
      [ean] => 
      [modified] => 2017-08-10 08:40:57
      [is_kit] => 0
      [slug] =>categoria/produto-teste
      [id] => 8
      [name] => Produto Teste
      [title] => 
      [description] => 
      [description_small] => Descrição
      [price] => 60
      [cost_price] => 25.00
      [start_promotion] => 2017-01-01
      [end_promotion] => 2017-01-31
      [brand] => Marca
      [brand_id] => 4
      [model] => xpto
      [weight] => 2
      [length] => 1
      [width] => 10
      [height] => 15
      [stock] => 720
      [category_id] => 14
      [category_name] => Categoria
      [available] => 1
      [availability] => 
      [reference] => M15001
      [additional_button] => 0
      [has_variation] => 0
      [has_acceptance_terms] => 0
      [has_buy_together] => 1
      [additional_message] => lorem ipsum
      [warranty] => 
      [quantity_sold] => 0
      [image] => 0
      [payment_option] => R$ 58,20 à vista com desconto Boleto - TrayCheckout
      [payment_option_details] => Array
     (
        [0] => Array
        (
            [display_name] => Boleto
            [type] => bank_billet
            [plots] => 1
            [value] => 58.20
            [tax] => 0.00
        )

     )

      [related_categories] => Array
          (
              [0] => 4
              [1] => 6
          )

      [release_date] => 
      [shortcut] => produto-teste
      [virtual_product] => 
      [minimum_stock] => 0
      [promotion_id] => 4
      [included_items] => Informação Adicional 2
      [related_products] => Array
      [free_shipping] => 1
      [current_price] => 60.00
      [ipi] => 0
      [acceptance_term_option] => 2
      [acceptance_term] => 
      [warranty_days] => 0
      [availability_days] => 0
      [cubic_weight] => 32
      [video] => 
      [metatag] => Array
     (
        [0] => Array
        (
         [type] => description
         [content] => Informação Adicional Teste
        )

        [1] => Array
        (
         [type] => description
         [content] => 
        )

        [2] => Array
        (
         [type] => keywords
         [content] => 
        )

     )

      [payment_option_html] =>  R$  58,20 à  vista com  desconto Boleto - TrayCheckout
      [percentage_discount] => 0.000000
      [payment] =>  R$ 58,20 à  vista com  desconto Boleto - TrayCheckout
      [product_price] => 60.00
      [calculated_price] => 60.00
      [compared_product] => 
      [price_w_coupon] => 60.00
      [images] => Array
          (
          )

      [variants] => Array
          (
          )

      [properties] => Array
          (
          )

      [price_offer] => 0
      [featured] => 1
      [new] => 1
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
      [iconsRight] =>
      [iconsBottom] =>
      [iconsTop] =>
      [bonus] => 
      [wishlist] =>
      [social_content] =>
      [bundle] => 
      [additional_information] =>
      [additional_information_custom] =>
      [minimum_variant_price] => 0
      [payment_detail] => 
  )

 ~~~

right_code2: |
 ~~~ twig
 <div>
    Codigo do produto: 
    <span>{{ product.id }}</span>
    <h3>{{ product.name }}</h3>
    <h3>{{ product.brand }}</h3>
 </div>
 {% if product.featured %}
    <span style="color:#fff; background:red">
    Produto em destaque!
    </span>
 {% endif %}
 <div>
 {% if product.price_offer > 0 and product.show_price %}
    Esse produto está em promoção!
 {% endif %}
 {% if product.price > 0 and product.show_price %}
    <span> De: R$:</span>
    {{ product.price|currency }} 
    <small> por:</small>
 {% endif %}
 {{ product.payment }}
 {% set ranking = product.ranking %}
 {% if ranking %}
    Quantidade de avaliações: {{ ranking.count }}
    Nota do produto: {{ ranking.rating }}
 {% endif %}
 {{ product.description }}
 </div>
 ~~~
 {: title="Exemplo" }
  ~~~ twig
    {% set images = product.images %}
    <img src="{{ images[0].small }}" alt="">
  ~~~
  {: title="Image Small" }
  
  ~~~ twig
    {% set images = product.images %}
    <img src="{{ images[0].medium }}" alt="">
  ~~~
  {: title="Image Medium" }

   ~~~ twig
    {% set images = product.images %}
    <img src="{{ images[0].large }}" alt="">
  ~~~
  {: title="Image Large" }

  ~~~ twig
    {% set images = product.images %}
    <img src="{{ images[0].full }}" alt="">
  ~~~
  {: title="Image Full" }
---

Esse objeto trás todas as informações do produto, juntamente com algumas caracteristicas e configurações de recursos relacionados a ele.

**Disponível nas páginas**: Product
{: .info }

**Para saber mais sobre como gerenciar produtos acesse**: [Wiki - Gerenciar produtos](http://atendimento.tray.com.br/hc/pt-br/articles/211173928-Incluir-Produto-Avan%C3%A7ado)

Nesse Objeto são retornadas as seguintes informações:

Atributos | Descrição
------------------- | ------
**product.ean**  |	Exibe o código de barras do produto
**product.modified** | Retorna a data de motificação do produto
**product.is_kit**| Retorna 1 caso o produto tenha kit
**product.slug**| Retorna o slug do produto
**product.id**  |	Identificador único do produto
**product.name**  |	Nome do produto
**product.description**  |	Exibe a descrição completa do produto
**product.description_small**  |	Exibe um resumo do produto
**product.price**  |	Valor do produto
**product.cost_price** | Retorna o preço de custo do produto
**product.start_promotion**  |	Exibe a data de ínicio da promoção do produto
**product.end_promotion**  |	Exibe a data de término da promoção do produto
**product.brand**  |	Exibe a marca do produto
**product.brand_id** | Retorna o id da marca do produto
**product.model**  |	Exibe o modelo do produto
**product.weight**  |	Exibe o peso do produto em gramas
**product.length**  |	Exibe o comprimento do produto em centímetros
**product.width**  |	Exibe a largura do produto em centímetros
**product.height**  |	Exibe a altura do produto em centímetros
**product.stock**  |	Quantidade de produtos em estoque
**product.category_id**  |	Identificador único da categoria principal do produto
**product.category_name** | Retorna o nome da categoria principal do produto
**product.available**  |	Retorna se o produto está disponível
**product.availability**  |	Informação de disponibilidade do produto
**product.reference**  |	Exibe o código de referência do produto
**product.has_variation**  |	Retorna verdadeiro caso o produto contenha variações
**product.has_acceptance_terms**  |	Retorna verdadeiro se o produto possuir termos de aceitação
**product.has_buy_together** | Retorna 1 caso o produto possua "Compre Junto"
**product.additional_button**  |	Retorna verdadeiro se deve-se exibir selo adicional 
**product.additional_message**  |	Exibe a mensagem adicional do produto
**product.quantity_sold**  |	Exibe a quantidade produtos vendidos
**product.image**| Retorna 1 caso o produto tenha imagem
**product.payment_option** | Retorna uma string com as opções de pagamento configuradas
**product.payment_option_details**  |	Retorna as informações das formas de pagamento **display_name**, **plots**, **value**, **type**, **tax**
**product.related_categories**  |	Retorna o ID das categorias relacionadas ao produto
**product.release_date** | Retorna a data de lançamento do produto
**product.virtual_product**  |	Retorna verdadeiro se o produto for virtual
**product.minimum_stock** | Retorna o estoque minimo do produto
**product.included_items**  |	Itens inclusos na compra do produto
**product.related_products**  |	Array dos produtos relacionados
**product.free_shipping**  |	Retorna verdadeiro se possuir frete grátis
**product.ipi** | Retorna o ipi do produto
**product.acceptance_term** | 
**product.warranty_days** | Retorna a quantidade de dias em garantia 
**product.availability_days** | 
**product.cubic_weight** | Retorna o peso cubico do produto
**product.video**  |	Exibe a url do vídeo inserido no produto
**product.metatag** | retorna um array com as meta tags configuradas no produto
**product.payment_option_html** | Retornas um bloco html com as opções de pagamentos
**product.percentage_discount** | Retorna a porcentagem de desconto do produto. 
**product.payment**  |	Retorna opões de parcelamento do produto
**product.compared_product**  |	Retorna verdadeiro se o produto estiver na comparação
**product.price_w_coupon** | Retorna o preço caso esteja com Cupon de desconto aplicado. 
**product.images** | Retorna as imagens do produto
**product.variants**  |	Retorna um array com todas as informações das variações,os indices retornados são: **id**, **ean**, **product_id**, **price**, **stock**, **minimum_stock**, **reference**, **start_promotion**, **end_promotion**, **promotional_price**, **payment_option**, **illustrative_image**, **Sku**, **VariantImage**, **payment_option_details**
**product.properties** | Retorna as caracteristicas do produto
**product.price_offer**  |	Valor do produto em promoção
**product.featured**  |	Retorna verdadeiro se for destaque
**product.new**  |	Retorna verdadeiro se for lançamento
**product.minimum_price** | Retorna o preço minimo do produto.
**product.ranking**  |	count  rating Ranking (avaliação) do produto
**product.link**  |	Link para a página do produto
**product.show_price** | Retorna 1 caso as informações de preço devam ser exibidas
**product.upon_request**  |	Retorna se o produto está sob consulta
**product.has_other_prices**  |	Retorna se o produto possui outros preços.
**product.additional_information**  |	Exibe a informação adicional (máximo de 256 caracteres)
**product.minimum_variant_price** | Retorna o melhor valor entre as variações do produto
**product.payment_detail**| Retorna os detalhes das formas de pagamento
