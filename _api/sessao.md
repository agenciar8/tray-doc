---
title: Sessão do Usuário
link: sessao
position: 11
origem: /frontend/ 
session: /frontend/api/
type: get 
right_code: |
 ~~~ javascript
    <script type="text/javascript">  
        let dataSession = document.querySelector('html').getAttribute('data-session');
    </script>
 ~~~
---


Na API de Carrinho de Compra também será necessário resgatar a informação da sessão do usuário no carrinho. Esta informação poderá ser capturada através de um código javascript.

Apesar da sessão do usuário já existir no dataLayer, algumas páginas possuem cache e poderão trazer as informações de forma incorreta. Para evitar este problema, caso seja necessário, disponibilizamos a sessão também no código fonte das páginas do sistema para que possa ser recuperado.

