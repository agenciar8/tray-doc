---
title: Category
link: category
position: 6
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
  ~~~ obj
  Array
  (
      [slug] => [SLUG]
      [id] => 2
      [name] => [NAME]
      [description] => [DESCRIPTION]
      [order] => 1
      [title] => 
      [small_description] =>[DESCRICAO_DETALHADA]
      [link] => [LINK_CATEGORY]
      [has_acceptance_term] =>  
      [acceptance_term] => 
      [brands] => Array
          (
              [0] => Array
                  (
                      [name] => [BRAND_NAME]
                      [selected] => 
                  )

              [1] => Array
                  (
                      [name] => [BRAND_NAME]
                      [selected] => 
                  )

              [2] => Array
                  (
                      [name] => [BRAND_NAME]
                      [selected] => 
                  )

          )

      [children] => Array
          (
          )

      [parent] => 
  )
  ~~~
  {: title="Exemplo de retorno do Objeto Category" }

right_code2: |
  ~~~ twig
   <div>
      <h4>{{ category.id }}</h4>
      <h3> {{ category.name }}</h3>
    </div>
  ~~~
  {: title="Chamada" }
  
  ~~~ html
  <div>
    <h4> ID da Categoria </h4>
    <h3> Nome da Categoria</h3>
  </div>
  ~~~
  {: title="Retorno na pagina" }

---

O Objeto `category` é responsável por retornar a categoria atual do tema, através dela é possível fazer validações relacionas a categoria dos produtos.

**Disponível nas páginas**: Catalog.
 {: .attention }

**Para saber mais sobre como gerenciar categorias acesse**: [Wiki - Gerenciar categorias](http://atendimento.tray.com.br/hc/pt-br/articles/211842497-Gerenciar-Categorias)
{: .attention }



Atributos | Descrição
------------------- | ------
**category.slug** |	Endpoint onde é acessado a categoria
**category.id** |	Identificador único da categoria
**category.name** |	Nome da categoria
**category.description** |	Descrição da categoria
**category.order** | Ordem de exibição segundo as configurações da loja
**category.title** | Titulo da Categoria (SEO)
**category.small_description** |	Descrição detalhada da categoria
**category.link** |	URL da categoria
**category.has_acceptance_term** |	Possui o termo "Aceito"
**category.acceptance_term**	| Retorna as opções de Termo 
**category.brands** |	As marcas vinculadas aos produtos dessa categoria (**name**, **selected**)
**category.children** |	Subcategorias
**category.parent**	| ID da categoria mãe

