---
title: Image
link: image
position: 6
origem: /frontend/ 
session: /frontend/methods/
right_code: |
 ~~~ twig
 {{ Image('key') }}	
 ~~~
  {: title="Chamada" }

   ~~~ twig
  {{ Image('additional_button') }}	
 ~~~
  {: title="Exemplo" }

---
O Método `Image()` retorna uma imagem cadastrada no Painel Administrativo.


**Disponível nas páginas**: todas
{: .info }
**Para saber mais sobre como gerenciar imagnes acesse**: [Wiki - Imagens/Botões](http://atendimento.tray.com.br/hc/pt-br/articles/210927548-Bot%C3%B5es)
{: .info}

As requisições de marcas sempre retornarão um array de dados onde cada chave está descrita abaixo:

Keys | Descrição
------------------- | ------
**additional_button** |	Botão Adicional
**unavailable_button** | Botão Indisponível
**buy_together_button** | Botão Compre Junto
**calculate_shipping_value** | Botão Calcular Frete
**buy** | Botão Comprar
**back_to_shopping** | Botão Continuar Comprando
**discount_code** | Botão Cupom de Desconto
**sign_up** | Botão Efetuar Login
**featured** | Imagem de Destaque
**send** | Imagem Enviar
**select** | Selecionado
**free_shipping** | Imagem Frete Grátis
**new** | Imagem Novo
**sign_in** | Botão Logar
**logo** | Imagem de Logo
**next_step_sign_up** | Botão Prosseguir Cadastro já Efetuado
**next_step_purchase** | Botão Próxima Etapa
**simulate_shipping** | Simular Frete
**upon_request** | Sob Consulta

