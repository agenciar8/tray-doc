---
title: Consultar Carrinho de Compra
link: get-cart
position: 12
origem: /frontend/ 
session: /frontend/api/
type: get 
right_code: |
 ~~~ javascript
  <script type="text/javascript"> 

  let dataSession = document.querySelector('html').getAttribute('data-session');

  fetch(`/web_api/cart/${dataSession}`)
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
    "Cart": {
    "email": "",
    "session_id": "pfhqg4ekivc5hqrdh3me2e8dp4",
    "product_id": "6",
    "product_name": "Nome do Produto",
    "quantity": "1",
    "price": "50.00",
    "weight": "100",
    "date": "2016-09-30",
    "variant_id": "0",
    "additional_information": "",
    "user_id": "0",
    "customer_id": "0",
    "user_cod": "0",
    "hour": "13:55:43",
    "product_url": {
     "http": "http://urldaloja/dragon-shield-fusion",
     "https": "https://urldaloja/dragon-shield-fusion"
    },
    "product_image": {
     "http": "http://images2/21139.jpg",
     "https": "https://images2/21139.jpg",
     "thumbs": {
     "30": {
         "http": "http://images2/21139.jpg",
         "https":  "https://images2/21139.jpg"
     },
     "90": {
         "http": "http://images2/21139.jpg",
         "https": "https://images2/21139.jpg"
     },
     "180": {
         "http": "http://images2/21139.jpg",
         "https": "https://images2/21139.jpg"
      }
     }
    }
   }

 ~~~
  {: title="Retorno do Array" }

---

Para retornar as informações do Carrinho de Compra, basta realizar uma requisição via GET, enviando na URL o código da sessão do carrinho.

Para a integração com esta API, deverá ser realizada uma requisição via GET, concatenando o código da sessão do usuário no final da URL.

A consulta de informações do carrinho de compra retorna uma resposta em JSON.

Abaixo um detalhamento de cada nó do JSON de resposta:


#### JSON de Resposta

------------------- | ------
**Cart** |	Nó principal da resposta
**Cart.session_id** |	Código da Sessão do Carrinho
**Cart.product_id** |	Código do Produto
**Cart.product_name** |	Nome do Produto
**Cart.quantity** |	Quantidade
**Cart.price** |	Preço do Produto
**Cart.weight** |	Peso do Produto
**Cart.date** |	Data
**Cart.variant_id** |	Código da Variação
**Cart.user_id** |	ID do usuário
**Cart.user_cod** |	Código do Usuário
**Cart.hour** |	Hora
**Cart.product_url** |	Objeto com as URLs do Produto
**Cart.product_url.http** |	URL Simples do Produto
**Cart.product_url.https** |	URL Segura do Produto
**Cart.product_image** |	Objeto com as imagens do Produto
**Cart.product_image.http** |	URL Simples da Imagem do produto
**Cart.product_image.https** |	URL Segura da Imagem do produto
**Cart.product_image.thumbs** |	Miniatura da Imagem do Produto
**Cart.product_image.thumbs.30** |	Miniatura de Tamanho 30px
**Cart.product_image.thumbs.30.http** |	URL Simples da Miniatura de 30px
**Cart.product_image.thumbs.30.https** |	URL Segura da Miniatura de 30px
**Cart.product_image.thumbs.90** |	Miniatura de Tamanho 90px
**Cart.product_image.thumbs.90.http** |	URL Simples da Miniatura de 90px
**Cart.product_image.thumbs.90.https** |	URL Segura da Miniatura de 90px
**Cart.product_image.thumbs.180** |	Miniatura de Tamanho 180px
**Cart.product_image.thumbs.180.http** |	URL Simples da Miniatura de 180px
**Cart.product_image.thumbs.180.https** |	URL Segura da Miniatura de 180px
**Cart.email** |	Email do Usuário
**Cart.additional_information** |	Informações Adicionais
