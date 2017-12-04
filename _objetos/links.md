---
title: Links
link: links
position: 5
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
  ~~~ obj
    Array
    (
    [search] => [URL_SEARCH]
    [search_by_brand] =>[URL_SEARCH_BY_BRAND]
    [search_new] => [URL_SEARCH_NEW]
    [search_featured] => [URL_SEARCH_FEARURED]
    [search_offer] =>[URL_SEARCH_OFFER]
    [search_order_name] =>[URL_SEARCH_ORDER_NAME]
    [search_order_price]=>[SEARCH_ORDER_PRICE]
    [search_order_bestsellers]=>[BESTSELLERS]
    [search_order_featured] => [ORDER_FEATURED]
    [search_order_new] =>[ORDER_NEW]
    [search_order_release] =>[ORDER_RELEASE]
    [advanced_search_form] => [SEARCH_ADVANCED]
    [home] => [HOME]
    [company] =>[COMPANY]
    [contact] =>[CONTACT]
    [cart] =>[CART]]
    [cart_add] =>[ADD_CART]
    [info] => [INFO]
    [info_buy] => [INFO_BUY]
    [security] =>[INFO_SECURITY]
    [warranty] =>[INFO_WARRANTY]
    [send] => [INFO_SEND]
    [payment] => [INFO_PAYMENT]
    [newsletter] => [NEWSTETTER]
    [map] => [URL_MAP]
    [register] => [URL_REGISTER]
    [central] => [URL_CENTRAL]
    [login] => [URL_LOGIN]
    [logout] => [URL_LOGOUT]
    [orders] => [URL_ORDERS]
    [payment_confirm] => [URL_PAYMENT_CONFIRM]
    [compare] => [URL_COMPARADOR]
    [compare_add] =>[ADD_COMPARE]]
    [compare_delete] => [REMOVE_COMPARE]
    )
  ~~~
  {: title="Exemplo de retorno Objeto Links" }

right_code2: |

---

O Objeto links é responsável por retornar o caminho das paginas e todos os links utilizados no tema



Atributos | Descrição
------------------- | ------
**links.search**	| Página de busca
**links.search_by_brand**	|Página de busca por marca
**links.search_new**	| Página de busca por lançamento
**links.search_featured**|	Página de busca por destaque
**links.search_offer**|	Página de busca por oferta
**links.search_order_name**|	Página de busca por ordem alfabética
**links.search_order_price**|	Página de busca por ordem de preço
**links.search_order_bestsellers**|	Página de busca ordenada pelos produtos mais vendidos
**links.search_order_new**|	Página de busca ordenada por novos produtos
**links.search_order_release**|	Página de busca ordenada pelos produtos em lançamento
**links.search_featured**	| Página de busca ordenada pelos produtos em destaque
**links.search_advanced_form**|	Página de busca avançada
**links.home**|	Página inicial
**links.company**| Página com informações sobre a loja/empresa
**links.contact**	| Página de contato
**links.cart**|	Página do carrinho de compras
**links.cart_add ~ product.id**|	Adiciona um produto ao carrinho de compras
**links.info**|	Página de informações gerais sobre os processos da loja
**links.info_buy**|	Âncora de informações sobre compra
**links.security**| Âncora de informações sobre segurança
**links.warranty**|	Âncora de informações sobre garantia
**links.send**| Âncora de informações sobre envio
**links.payment**|	Âncora de informações sobre pagamento
**links.newsletter**|	Página de cadastro de newsletter
**links.map**	| Página mapa do site
**links.register**|	Página de cadastro
**links.central**	| Página da central do cliente
**links.login**	| Página de login
**links.orders**	| Página de pedidos
**links.orders_tracking**	| Página de rastreio de pedidos
**links.orders_return**	| Página de trocas/devoluções
**links.payment_confirm**	| Página de confirmação de pagamento
**links.account**	| Página central do cliente
**links.account_password**|	Página de alteração de senha
**links.logout**|	Página de logout
**links.compare**	| Página com a comparação dos produtos selecionados
**links.compare_add ~ product.id**|	Adiciona um produto à comparação
**links.compare_delete ~ product.id**|	Remover da comparação de produto
**navigation_history**|	Pagina com o histórico de navegação
**links.clear_history**|	Limpa o histórico de navegação


