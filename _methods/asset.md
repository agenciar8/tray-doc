---
title: Asset
link: asset
position: 3
origem: /frontend/ 
session: /frontend/methods/
right_code: |
 ~~~ twig
    <img src="{{ asset('img/my-image.png') }}" alt="">
    <script src="{{ asset('js/style.js') }}"></script>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
 ~~~
  {: title="Exemplo" }

---
O método asset() é utilizado para referenciar o caminho absoluto do tema, com ele é possível incluir arquivos ao tema como css,javascript e imagens.

Exemplos ao lado: