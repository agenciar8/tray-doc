---
title: Busca de Produtos
link: search-products
position: 10
origem: /frontend/ 
session: /frontend/api/
type: get 
right_code: |
 ~~~ javascript
 <script type="text/javascript"> 
 fetch(`/web_api/search/?query="Produto"&price="10.00,50.00"` )
    .then(response => response.json())
    .then(result => {
    console.log(result);
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
    "paging": {
    "total": 201,
    "page": 1,
    "offset": 0,
    "limit": 1,
    "maxLimit": 50
    },
    "sort": [ { "id": "asc" } ],
    "availableFilters": [
    "id", "name", "category_id", "ean", "available", "price",
    "brand", "model", "hot", "quantity_sold", "release",
    "free_shipping", "weight", "image", "release_date",
    "stock","promotion", "modified", "created" ],
    "appliedFilters": [],
    "Products": [
    {
        "Product": {
        "ean": "8882",
        "id": "84",
        "name": "Produto Teste 4",
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
        "url": {
            "http": "http://sualoja/produto1.htm",
            "https": "https://sualoja/produto1.htm"
        },
        "payment_option": "ou 12x com juros de R$ 18,89",
        "related_categories": ["16"],
        "release_date": "0000-00-00",
        "virtual_product": "",
        "ProductImage": [{
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
                    "http": "http://images/132/180_1.png",
                    "https": "https://images/123/180_1.png"
                }
            }
        } ],
        "Variant": []
        }
    }
    ]
    
 ~~~
  {: title="Retorno do Array" }

---

Para a busca de produtos, deverá ser realizada uma requisição via GET.

Podem ser enviados alguns parâmetros nesta integração para realizar filtros na busca de produtos, segue abaixo o dado necessário para envio:

Dados de Entrada |	Obrig. |	Descrição
------------------- | ------
**query** |	Não |	Texto de Busca
**promotion** |	Não|	Produto Promocional
**id**|	Não|	Códigos do Produto (Valores separados por ",". Exemplo: 15,123,54)
**category_id** |Não	|Categoria do Produto
**price**|	Não |Faixa de Valor do Produto (Valores separados por ",". Exemplo: 10.25,123.54)
**rand**|	Não	|Retornar Produtos Randômicos
**sort**|	Não	|Ordenação da Busca
**limit**|	Não	|Quantidade Limite de Registros
**page**|	Não	|Página da Busca

Na busca de produtos, a API retorna a resposta em JSON.

Abaixo um detalhamento de cada nó do JSON de resposta:

#### JSON de Resposta

------------------- | ------
**paging**|	Dados de Paginação
**paging.total**|	Total de Registros
**paging.page**	|Páginas corrente
**paging.offset**|	Registro Inicial da Página
**paging.limit**|	Limite de Registros
**paging.maxLimit**|	Máximo de Registros
**sort**|	Ordenação
**availableFilters**|	Filtros Disponíveis
**appliedFilters**|	Filtros Utilizados
**Products[]**|	Lista de Produtos
**Products[].Product**|	Dados do Produto
**Products[].Product.id**|	Código do Produto
**Products[].Product.name**|	Nome do Produto
**Products[].Product.available**|	Produto Disponível
**Products[].Product.price**|	Preço do Produto
**Products[].Product.shortcut**|	Atalho do Produto
**Products[].Product.category_id**|	Código da Categoria do Produto
**Products[].Product.description_small**|	Descrição do Produto
**Products[].Product.promotional_price**|	Preço Promocional do Produto
**Products[].Product.start_promotion**|	Data Inicial da Promoção do Produto
**Products[].Product.end_promotion**|	Data Final da Promoção do Produto
**Products[].Product.brand**|	Marca do Produto
**Products[].Product.model**|	Modelo do Produto
**Products[].Product.availability**|	Disponibilidade do Produto
**Products[].Product.hot**|	Produto em Destaque
**Products[].Product.release**|	Liberação do Produto
**Products[].Product.additional_button**|	Botão Adicional do Produto
**Products[].Product.has_variation**|	Confirmação de Produto com Variação
**Products[].Product.rating**|	Classificação do Produto
**Products[].Product.count_rating**|	Contador de Classificação do Produto
**Products[].Product.url**|	Objeto com as URLs do Produto
**Products[].Product.url.http**|	URL Simples do Produto
**Products[].Product.url.https**|	URL Segura do Produto
**Products[].Product.payment_option**|	Informações de Pagamento
**Products[].Product.ProductImage[]**|	Imagens do Produto
**Products[].Product.ProductImage[].http**|	URL Simples da Imagem do Produto
**Products[].Product.ProductImage[].https**|	URL Segura da Imagem do Produto
**Products[].Product.ProductImage[].thumbs**|	Miniatura da Imagem do Produto
**Products[].Product.ProductImage[].thumbs.30**|	Miniatura de Tamanho 30px
**Products[].Product.ProductImage[].thumbs.30.http**|	URL Simples da Miniatura de 30px
**Products[].Product.ProductImage[].thumbs.30.https**|URL Segura da Miniatura de 30px
**Products[].Product.ProductImage[].thumbs.90**|	Miniatura de Tamanho 90px
**Products[].Product.ProductImage[].thumbs.90.http**|	URL Simples da Miniatura de 90px
**Products[].Product.ProductImage[].thumbs.90.https**|	URL Segura da Miniatura de 90px
**Products[].Product.ProductImage[].thumbs.180**|	Miniatura de Tamanho 180px
**Products[].Product.ProductImage[].thumbs.180.http**|URL Simples da Miniatura de 180px
**Products[].Product.ProductImage[].thumbs.180.https**|	URL Segura da Miniatura de 180px
**Products[].Product.Properties[]**|	Propriedades do Produto
**Products[].Product.Category**|	Dados da Categoria do Produto
**Products[].Product.Category.id**|	Código da Categoria do Produto
**Products[].Product.Category.name**|	Nome da Categoria do Produto
**Products[].Product.Category.description**|	Descrição da Categoria do Produto