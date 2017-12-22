---
title: Excluir Sessão do Carrinho de Compra
link: delete-session
position: 14
origem: /frontend/ 
session: /frontend/api/
type: delete 
right_code: |
 ~~~ javascript
  <script type="text/javascript"> 

  let dataSession = document.querySelector('html').getAttribute('data-session');

  fetch(`/web_api/carts/${dataSession}`
    {
        method: "DELETE",
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
        'message': 'Deleted',
        'id': '615440',
        'session_id': 'rkqeli8b00a697r4q9jnbi6il6',
        'cart_url': 'https://sualojavirtual.commercesuite.com.br/loja/carrinho.php?loja=12&transID=rkqeli8b00a697r4q9jnbi6il6,
        'code': '200'
    }
 ~~~
  {: title="Retorno do Array" }

---

Para excluir a sessão de um carrinho de compra, basta realizar uma requisição utilizando o método DELETE, passando na url o session_id.

Esta requisição exclui todos os produtos e variações do carrinho. Inclusive o carrinho é excluído, ele torna-se indisponível após a operação.

##### Endereço para Integração

------------------- | ------
**URL de Acesso** |	https://{sualojavirtual}.commercesuite.com.br/web_api/carts/{session_id}
**Protocolo** |	Rest/HTTP

Ao excluir o carrinho de compra, é retorna uma resposta em JSON.

Abaixo um detalhamento de cada nó do JSON de resposta:

#### JSON de Resposta

------------------- | ------
**message**|	Mensagem de Retorno
**id**|	Código do Carrinho
**session_id**|	Código da Sessão do Carrinho
**cart_url**|	URL do Carrinho
**code**|	HTTP Code de Res