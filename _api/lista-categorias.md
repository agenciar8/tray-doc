---
title: Lista de Categorias
link: get-categories
position: 8
origem: /frontend/ 
session: /frontend/api/
type: get 
right_code: |
 ~~~ javascript
  <script type="text/javascript"> 

  let variantId = 88;
  fetch(`/web_api/variants/${variantId}`)
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

 ~~~ javascript
    
 {
    "Category": [
    {
     "Category": {
     "slug": "categoria-1",
     "id": "1",
     "parent_id": "",
     "name": "Categoria 1",
     "description": "categoria-1",
     "title": "",
     "link": {
      "http": "http://sualojavirtual/categoria-1",
      "https": "https://sualojavirtual/categoria-1"
      },
      "images": [
      {
        "http": "http://images1/123/img_1.png",
        "https": "https://images2/123/_1.png"
      }
      ],
      "children": [
      {
        "Category": {
        "slug": "categoria-1/subcategoria",
        "id": "3",
        "parent_id": "1",
        "name": "Subcategoria",
        "description": "Subcategoria",
        "title": "",
        "link": {
         "http": "http://sualojavirtual/categoria-1/subcategoria",
         "https": "https://sualojavirtual/categoria-1/subcategoria"
        },
        "images": [],
        "children": null
       }
     }]
    }]
   }

 ~~~
  {: title="Retorno do Array" }

---

Para a lista de categorias, deverá ser realizada uma requisição via GET.

Podem ser enviados na URL o código da categoria desejada, onde será retornada somente a categoria desejada e as respectivas subcategorias:

#### JSON de Resposta

------------------- | ------
**Category[]**|	Lista de Categorias
**Category[].Category**|	Dados da Categoria
**Category[].Category.slug**	|Caminho absoluto da Categoria
**Category[].Category.id**|	Código da Categoria
**Category[].Category.parent_id**	|Código da Categoria Pai
**Category[].Category.name**|	Nome da Categoria
**Category[].Category.description**	|Descrição da Categoria (meta title)
**Category[].Category.title**|	Título da categoria (meta title)
**Category[].Category.link**|	Objeto com as URLs da Categoria
**Category[].Category.link.http**	|URL Simples da Categoria
**Category[].Category.link.https**	|URL Segura da Categoria
**Category[].Category.images[]**	|Imagens da Categoria
**Category[].Category.images[].http**|	URL Simples da Imagem da Categoria
**Category[].Category.images[].https**|	URL Segura da Imagem da Categoria
**Category[].Category.children[]**	|Lista de Subcategorias
**Category[].Category.children[].Category**|	Dados da Subcategoria
