---
title: Consultar Variação do Produt
link: get-variant
position: 5
origem: /frontend/ 
session: /frontend/api/
type: get 
right_code: |
 ~~~ javascript
  <script type="text/javascript"> 

  let variantId = 88;
  fetch(`/web_api/variants/${variantId}`)
    .then(response => response.json())
    .then(result => {
      console.log(result.Product);
    })
    .catch(err => {
      console.error('Falha', err);
    });
  </script>
 ~~~
 {: title="Exemplo" }
right_code2: |
 ~~~ javascript
    {
    "Variant": {
        "id": "184",
        "ean": "",
        "product_id": "610",
        "price": "199.90",
        "start_promotion": "0000-00-00",
        "end_promotion": "0000-00-00",
        "promotional_price": "0.00",
        "payment_option": "ou 12x com juros de R$ 18,89",
        "illustrative_image": "",
        "VariantImage": [
        {
        "http": "http://images/123/1.png",
        "https": "https://images/123/1.png",
        "thumbs": {
            "30": {
                "http": "http://images/123/30_1.png",
                "https": "https://images/123/30_1.png"
            },
            "90": {
                "http": "http://images/123/90_1.png",
                "https": "https://images/123/90_1.png"
            },
            "180": {
                "http": "http://images123/180_1.png",
                "https": "https://images123/180_1.png"
            }
        }
        }],
        "Sku": [
        {
            "type": "Cor",
            "value": "Verde"
        },
        {
            "type": "Tamanho",
            "value": "G"
        }]
      }
    }
 ~~~
  {: title="Retorno do Array" }

---

Para retornar as informações da variação do produto, basta realizar uma requisição via GET, enviando na URL o código da variação desejada.

Na consulta de variação do produto, a API retorna a resposta em JSON.

Abaixo um detalhamento de cada nó do JSON de resposta:

#### JSON de Resposta

------------------- | ------
**Variant**|	Dados da Variação do Produto
**Variant.ean**|	EAN da Variação do Produto
**Variant.id**|	Código da Variação do Produto
**Variant.product_id**|	Código do Produto
**Variant.price**|	Preço da Variação do Produto
**Variant.promotional_price**|	Preço Promocional da Variação do Produto
**Variant.start_promotion**|	Data Inicial da Promoção da Variação do Produto
**Variant.end_promotion**|	Data Final da Promoção da Variação do Produto
**Variant.payment_option**|	Informações de Pagamento
**Variant.illustrative_image**|	Imagem Ilustrativa da Variação do Produto
**Variant.VariantImage[]**|	Imagens da Variação do Produto
**Variant.VariantImage[].http**|	URL Simples da Imagem da Variação do Produto
**Variant.VariantImage[].https**|	URL Segura da Imagem da Variação do Produto
**Variant.VariantImage[].thumbs**|	Miniaturas da Imagem da Variação do Produto
**Variant.VariantImage[].thumbs.30**|	Miniatura de Tamanho 30px
**Variant.VariantImage[].thumbs.30.http**|	URL Simples da Miniatura de 30px
**Variant.VariantImage[].thumbs.30.https**|	URL Segura da Miniatura de 30px
**Variant.VariantImage[].thumbs.90**|	Miniatura de Tamanho 90px
**Variant.VariantImage[].thumbs.90.http**|	URL Simples da Miniatura de 90px
**Variant.VariantImage[].thumbs.90.https**|	URL Segura da Miniatura de 90px
**Variant.VariantImage[].thumbs.180**|	Miniatura de Tamanho 180px
**Variant.VariantImage[].thumbs.180.http**|	URL Simples da Miniatura de 180px
**Variant.VariantImage[].thumbs.180.https**|	URL Segura da Miniatura de 180px
**Variant.Sku[]**|	Sku da Variação do Produto
**Variant.Sku[].type**|	Tipo da Variação do Produto
**Variant.Sku[].value**|	Dados da Variação do Produto
