---
title: PaymentMethods
link: paymentMethods
position: 18
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
 ~~~Json
 Array ( 
  [order] => Array ( 
    [boletoonline] => Array ( 
      [display_name] => Boleto - TrayCheckout
      [thumbnail] => Array (
        [url]=> http://image.tcdn.com.br/img.png 
      )
    )
    [cartaojcbtraycheckout] => Array ( 
      [display_name] => CartãoJCB - TrayCheckout
      [thumbnail] => Array ( 
       [url] => http://image.tcdn.com.br/img.png 
       )
     )
   )
   [credit] => Array ( 
     [cartaovisa] => Array( 
       [display_name] => Visa - TrayCheckout 
       [thumbnail] => Array (
        [url] =>http://image.tcdn.com.br/img.png 
        )
    )
    [cartaomastercard] => Array ( 
      [display_name] => MasterCard -TrayCheckout 
      [thumbnail] => Array (
       [url] => http://image.tcdn.com.br/img.png 
       )
    ) 
    )
 )

 ~~~
 ~~~ twig
    <h5> A Vista </h5>
    {% for payment in paymentMethods.order %}
        <img src="{{ payment.thumbnail.url }}" alt="{{ payment.display_name }}">
    {% endfor %}
 ~~~
   {: title="A Vista" }
    ~~~ twig
    <h5> A Prazo </h5>
    {% for payment in paymentMethods.credit %}
        <img src="{{ payment.thumbnail.url }}" alt="{{ payment.display_name }}">
    {% endfor %}
 ~~~
   {: title="A Prazo" }

---

Esse objeto trás todas as informações de formas de pagamentos a vista e a prazo cadastradas no painel.



**Disponível nas páginas**: Todas
{: .info }
**Para saber mais sobre como gerenciar os meios de pagamento acesse**: [Wiki - Configurar formas de Pagamento](http://atendimento.tray.com.br/hc/pt-br/articles/211780767-Configurar-Formas-de-Pagamento)

Nesse Objeto são retornadas as seguintes informações:

Atributos | Descrição
------------------- | ------
**paymentMethods.order**| Formas de pagamento à vista
**paymentMethods.credit** |	Formas de pagamento à prazo

Atributos Secundárias	| Descrição
------------------- | ------
**display_name**| Nome da forma de Pagamento
**thumbnail.url** |	Url da imagem ilustrativa

Ao lado, exemplos de aplicação do Objeto paymentMethods:


