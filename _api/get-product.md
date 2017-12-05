---
title: Consultar Produtos
link: get-product
position: 1
origem: /frontend/ 
session: /frontend/api/
type: get 
right_code: |
 ~~~ javascript
  <script type="text/javascript"> 

  let producId = 88;
  fetch(`/web_api/products/${producId}`)
    .then(response => response.json())
    .then(result => {
      console.log(result.Product);
    })
    .catch(err => {
      console.error('Falha', err);
    });
  </script>
 ~~~

right_code2: |
 ~~~ obj
  {
  "Product": {
    "ean": "8882",
    "id": "84",
    "name": "Produto Teste 4",
    "description": "Produto para Teste",
    "description_small":"Produto de Teste",
    "price": "199.90",
    "promotional_price": "0.00",
    "start_promotion": "0000-00-00",
    "end_promotion": "0000-00-00",
    "brand": "Paginacao",
    "model": "Modelo 3",
    "category_id": "16",
    "available": "1",
    "availability": "Em estoque",
    "hot": "1",
    "release": "0",
    "additional_button": "",
    "has_variation": "",
    "additional_message": "Mensagem.",
    "warranty": "1 ano",
    "rating": "0",
    "count_rating": "0",
    "ProductImage": [
      {
      "http": 
        "http://images/123/1.png",
      "https": 
        "https://images/123/1.png",
      "thumbs": {
      "30": {
        "http": 
          "http://images/123/30_1.png",
        "https": 
          "https://images/123/30_1.png"
        },
        "90": {
          "http": 
            "http://images/123/90_1.png",
          "https": 
            "https://images/123/90_1.png"
        },
        "180": {
          "http": 
            "http://images/123/180_1.png",
          "https": 
            "https://images/123/180_1.png"
        }
      }
      }
    ],
    "image": "1",
    "url": {
      "http": "http://sualojavirtual.commercesuite.com.br/produto-teste-4-pr.htm",
      "https": "https://sualojavirtual.commercesuite.com.br/produto-teste-4-pr.htm"
    },
    "Properties": [],
    "payment_option": "ou 12x com juros de R$ 18,89",
    "related_categories": [
      "16"
    ],
    "release_date": "0000-00-00",
    "virtual_product": "",
    "Variant": []
  }
  }
 ~~~

---


Através da API de Produtos é possível consultar e listar os produtos contidos na loja virtual.

##### Endereço para Integração

------------------- | ------
**URL de Acesso** |	https://{URL_LOJA}/web_api/products
**Protocolo** |	Rest/HTTP

Para retornar as informações do produto, basta realizar uma requisição via GET, enviando na URL o código do produto desejado.

Exemplo ao lado de como consultar informações do produto:

Na consulta do produto, a API retorna a resposta em JSON.

Abaixo um detalhamento de cada nó do JSON de resposta:


##### JSON de Resposta

------------------- | ------
**Product** |	Dados do Produto
**Product.ean** |	EAN do Produto
**Product.id** |	Código do Produto
**Product.name** |	Nome do Produto
**Product.price** |	Preço do Produto
**Product.promotional_price** |	Preço Promocional do Produto
**Product.start_promotion** |	Data Inicial da Promoção do Produto
**Product.end_promotion** |	Data Final da Promoção do Produto
**Product.brand**	| Marca do Produto
**Product.model**	| Modelo do Produto
**Product.category_id** |	Código da Categoria do Produto
**Product.available** |	Disponibilidade do Produto
**Product.hot**	| Produto em Destaque
**Product.release** |	Liberação do Produto
**Product.additional_button** |	Botão Adicional do Produto
**Product.has_variation**	| Confirmação de Produto com Variação
**Product.url**	| Objeto com as URLs do Produto
**Product.url.http** |	URL Simples do Produto
**Product.url.https** |	URL Segura do Produto
**Product.payment_option** |	Informações de Pagamento
**Product.payment_option_details[]** |	Informações de Pagamento
**Product.payment_option_details[].display_name** |	Nome da Forma de Pagamento
**Product.payment_option_details[].plots** |	Quantidade de parcelas
**Product.payment_option_details[].value** |	Valor da parcela
**Product.related_categories** |	Categorias Relacionadas do Produto
**Product.release_date** |	Data da Liberação do Produto
**Product.virtual_product** |	Produto Virtual
**Product.ProductImage[]** |	Imagens do Produto
**Product.ProductImage[].http** |	URL Simples da Imagem do Produto
**Product.ProductImage[].https** |	URL Segura da Imagem do Produto
**Product.ProductImage[].thumbs** |	Miniatura da Imagem do Produto
**Product.ProductImage[].thumbs.30** |	Miniatura de Tamanho 30px
**Product.ProductImage[].thumbs.30.http** |	URL Simples da Miniatura de 30px
**Product.ProductImage[].thumbs.30.https** |	URL Segura da Miniatura de 30px
**Product.ProductImage[].thumbs.90** |	Miniatura de Tamanho 90px
**Product.ProductImage[].thumbs.90.http** |	URL Simples da Miniatura de 90px
**Product.ProductImage[].thumbs.90.https** |	URL Segura da Miniatura de 90px
**Product.ProductImage[].thumbs.180** |	Miniatura de Tamanho 180px
**Product.ProductImage[].thumbs.180.http** |	URL Simples da Miniatura de 180px
**Product.ProductImage[].thumbs.180.https** |	URL Segura da Miniatura de 180px