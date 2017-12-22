---
title: Incluir Produto no Carrinho
link: get-cart
position: 13
origem: /frontend/ 
session: /frontend/api/
type: post
right_code: |
 ~~~ javascript
  <script type="text/javascript"> 

  let dataSession = $("html").attr("data-session");
  let data = `
    {
        "Cart":{"session_id":${dataSession},
        "product_id":"100",
        "quantity":"2",
        "variant_id":"0"
    }'


  fetch(`/web_api/cart/`
    {
        method: "POST",
        body: data
    })
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
        'message': 'Created',
        'id': '615440',
        'session_id': 'rkqeli8b00a697r4q9jnbi6il6',
        'cart_url': 'https://sualojavirtual.commercesuite.com.br/loja/carrinho.php?loja=12&transID=rkqeli8b00a697r4q9jnbi6il6,
        'code': '201'
    }

 ~~~
  {: title="Retorno do Array" }

---

Para incluir produtos no carrinho de compra, basta realizar uma requisição via POST, enviando os parâmetros com informações do produto.

A requisição para a integração será via POST, onde segue abaixo o dado necessário para envio:

Dados de Entrada|	Obrig.|	Formato / Tam. Max	|Descrição
------------------- | ------
**Cart** |	Sim	|Objeto	|Nó principal da resposta
**Cart.session_id**|	Sim|	Texto / 32	|Código da Sessão
**Cart.product_id**|	Sim|	Número|	Código do Produto
**Cart.quantity**|	Sim	|Número|	Quantidade
**Cart.variant_id**|	Não|	Número	|Código da Variação

Ao incluir produtos do carrinho de compra, é retorna uma resposta em JSON.

#### JSON de Resposta

------------------- | ------
**message** |	Mensagem de Retorno
**id**|	Código do Carrinho
**session_id**|	Código da Sessão do Carrinho
**cart_url**|	URL do Carrinho
**code**|	HTTP Code de Resposta