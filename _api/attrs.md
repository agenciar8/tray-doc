---
title: Attrs
link: attrs
position: 2
origem: /frontend/ 
session: /frontend/api/
type: get 
right_code: |
 ~~~ javascript
 <script type="text/javascript"> 
        fetch(`/web_api/products/?attrs=Product.name`)
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.error('Falha', err);
        });
    </script>
 ~~~
 {: title="Retorno Array" }

 ~~~ javascript
    "Products": [
       {
         "Product": {
           "ean": "",
           "id": "110",
           "price": "3000.00"
         }
       },
    
 ~~~
  {: title="Exemplo" }

---


Caso deseje exibir apenas alguns atributos da API, pode-se utilizar o parâmetro attrs.

O parâmetro Attrs deve ser passado pela url da requisição da API, nela você deve passar os atributos da qual deseja exibir separados por (,).

**Disponivel em todas APIs Publicas**
{: .info}

##### Exemplo

------------------- | ------
**URL de Acesso** |	https://{URL_LOJA}/web_api/products?attrs=Product.ean,Product.price

Terá como resposta o conteúdo ao lado:

