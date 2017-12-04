---
title: ProductFeatured
link: productFeatured
position: 17
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
 ~~~ twig
    <a href="{{ productFeatured.link }}" 
    title="{{ productFeatured.name }}">
        <img src="{{ productFeatured.images[0].large }}" 
        alt="{{ productFeatured.name }}">
    </a>
 ~~~
   {: title="Exemplo" }

---

Esse objeto retorna os produtos em destaque na categoria atual. As informações retornadas são as mesmas da [Products](#products).


**Disponível nas páginas**: catalog
{: .info }

