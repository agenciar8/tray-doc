---
title: Pages
link: pages
position: 11
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
  ~~~ obj
    Array
    (
    [current] => home
    [custom] => Array
        (
        [0] => Array
            (
            [id] => 2
            [url] => /como-comprar
            [slug] => como-comprar
            [conteudo] => Para comprar em nossa loja é muito fácil ...
            [info] => comprar
            [name] => Como comprar
            [default] => 
            [status] => 1
            )

        [1] => Array
            (
            [id] => 3
            [url] => /seguranca
            [slug] => seguranca
            [conteudo] => Com relação aos seus dados pessoais de endereçamento, pagamento e conteúdo do pedido, você pode estar certo de que não serão utilizados para outros fins que não o de processamento dos pedidos realizados, não sendo portanto divulgados em hipótese alguma.
            [info] => seguranca
            [name] => Seguranca
            [default] => 
            [status] => 1
            )

        [2] => Array
            (
            [id] => 4
            [url] => /envio
            [slug] => envio
            [conteudo] => Todos os produtos serão enviados de acordo com a forma escolhida pelo cliente, em até 2 dias úteis da confirmação do pagamento. O prazo para a entrega varia de acordo com a forma de envio escolhida e não é de nossa responsabilidade, ,já que a entrega fica a cargo dos Correios....
            [info] => envio
            [name] => Envio
            [default] => 
            [status] => 1
            )
        )
    )
  ~~~
  {: title="Exemplo de retorno Objeto Pages" }

  ~~~twig
    {% if pages.current == 'home' %}
        <h4>
        Você está na nossa página inicial, navegue na nossa loja!
        </h4>
    {% else %}
        <h5>
            <a href="#">
            Clique a aqui para voltar a home
            </a>
        </h5>
    {% endif %}
  ~~~
  {: title="Verifica a pagina atual" }

  ~~~ twig
    <ul>
    {% for custom in pages.custom %}
      <li>
        <a href="{{ custom.url }}">
            {{ custom.name }}
        </a>
      </li>
    {% endfor %}
    </ul>
  ~~~
  {: title="Exibe as paginas customizadas" }

---

O Objeto `pages`, contém informações das páginas da loja, como por exemplo a página atual e as paginas personalizadas.



**Disponível nas páginas**: todas
{: .info }
Para saber mais sobre Paginas Personalizadas acesse:  [Wiki - Paginas Personalizadas](http://atendimento.tray.com.br/hc/pt-br/articles/211842867-URL-Personalizada)
{: .info }


Atributos | Característica
------------------- | ------
**pages.current** |	Em qual página o usuário está navegando, ex: home
**pages.custom** | Páginas Personalizadas cadastradas no Painel Administrativo

A baixo temos uma lista com retornos possíveis do Objeto `pages.current`
  
Retorno de pages.current |	Descrição
------------------- | ------
home|	Página inicial da loja
search|	Página de busca
catalog|	Página de catálogo (categoria)
product	|Página de produto
checkout_cart|	Carrinho de compras
register|	Página de cadastro
login|	Página de login
checkout_payment|	Escolha de pagamento na finalização de compra
company|	Quem somos
map|	Mapa do site

Em paginas personalizadas é retornado o slug da pagina.

