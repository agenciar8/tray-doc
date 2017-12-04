---
title: Banners
link: banners
position: 8
origem: /frontend/ 
session: /frontend/objetos/
right_code: |
  ~~~ obj
  Array
  (
  [side] => Array
      (
        [id] => 18
        [type] => javascript
        [enable_navigation_keys] => 
        [interval] => 5000
        [velocity] => 0.5
        [class] => box_skitter_large
        [numbers] => 1
        [animation] => fade
        [stop_over] => 1
        [btn_pause] => 0
        [navigation] => 1
        [progressbar] => 
        [dynamic_size] => 
        [slides] => Array
            (
                [0] => Array
                    (
                        [image] =>[URL_IMAGE]
                        [link] =>[LINK]
                        [label] => [LABEL]
                        [target] => _blank
                        [width] => 265
                        [height] => 370
                    )

                [1] => Array
                    (
                        [image] =>[URL_IMAGE]
                        [link] =>[LINK]
                        [label] => [LABEL]
                        [target] => _blank
                        [width] => 265
                        [height] => 370
                    )
            )

    )

  [home] => Array
    (
        [id] => 4
        [type] => javascript
        [enable_navigation_keys] => 
        [interval] => 5000
        [velocity] => 0.5
        [class] => box_skitter_large
        [numbers] => 1
        [animation] => fade
        [stop_over] => 1
        [btn_pause] => 0
        [navigation] => 1
        [progressbar] => 
        [dynamic_size] => 
        [slides] => Array
            (
                [0] => Array
                    (
                        [image] =>[URL_IMAGE]
                        [link] =>[LINK]
                        [label] => [LABEL]
                        [target] => _blank
                        [width] => 265
                        [height] => 370
                    )

                [1] => Array
                    (
                        [image] =>[URL_IMAGE]
                        [link] =>[LINK]
                        [label] => [LABEL]
                        [target] => _blank
                        [width] => 265
                        [height] => 370
                    )
            )

    )

  )
  ~~~
  {: title="Estrutura do Objeto" }
  
  ~~~ twig

          {% if banners.home %}
             {{ banner.home }}
          {% endif %}
        
           {% if banners.extra1 %}
             {{ banner.extra1 }}
          {% endif %}

  ~~~
  {: title="Helpers"}
    ~~~ twig
  {% if banners.home %}
      <a href="{{ banners.home.link }}" 
         target="{{ banners.home.target }}">
        <img src="{{ banners.home.src }}" 
            width="{{ banners.home.width }}"
            alt="{{ banners.home.alt }}" >
      </a>
  {% endif %}
              
  ~~~
  {: title="Montando banner"}

    ~~~ twig
  {% for slide in banners.extra1.slides %}
      <a href="{{ slide.link }}" target="{{ slide.target }}">
          <img src="{{ slide.image }}" alt="{{ slide.label }}">
      </a>
  {% endfor %}                
  ~~~
    {: title="Listando as imagens de um banner"}

---

O objeto `banners` é responsável por trazer os banner cadastrados no painel e mostra-lo conforme as características necessárias.

**Disponível nas páginas**: Todas.
 {: .attention }

**Para saber mais sobre como gerenciar banners acesse**:
[Wiki - Cadastrar Banners](http://atendimento.tray.com.br/hc/pt-br/articles/211174318) |
[Wiki - Cadastrar Banners Banner JavaScript](http://atendimento.tray.com.br/hc/pt-br/articles/211175188) |
[Wiki - Banner por Categoria ou Marca](http://atendimento.tray.com.br/hc/pt-br/articles/211842757)
{: .attention }


Para imprimir um banner,você poderá utilizar o helper de banner, onde exibem os banners em um bloco pre-moldado. Segue abaixo algumas chamadas:




Atributos | Descrição
------------------- | ------
**banner.home** |	Exibido somente na página inicial do site. Antes dos produtos
**banner.footer** | Exibido em todas as páginas, no rodapé.
**banner.bottom**	| Banner exibido na pagina na parte inferior
**banner.side**|	Exibido em todas as páginas, na lateral da loja
**banner.title**|	Exibido em todas as páginas antes do título
**banner.floating**|	Exibido na vitrine, apenas arquivos em FLASH
**banner.popup**|	Exibido na vitrine
**banner.showcase**|	Exibido somente na página inicial do site, ao lado do menu de categorias.
**banner.extra1**|	Exibido em layouts personalizados
**banner.extra2**|	Exibido em layouts personalizados
**banner.extra3**|	Exibido em layouts personalizados
**banner.extra4**|	Exibido em layouts personalizados

Se você deseja criar o banner do seu jeito, poderá utilizar as seguinte informações, lembrando que o padrão de chamada é sempre: `banners.{position}.{key}`.

**Sintaxe**: `banners.{position}.{key}`.
 {: .info }

Atributos | Descrição
------------------- | ------
**banners.{position}.id** |	Identificador único do banner
**banners.{position}.type** |	Tipo do banner, valores possíveis: "javascript", "image", "flash", "gallery"
**banners.{position}.description** |	Descrição do banner
**banners.{position}.src** |	URL do banner
**banners.{position}.link** |	Link do banner
**banners.{position}.width** |	Largura da imagem ou do objeto flash
**banners.{position}.height** |	Altura da imagem ou do objeto flash
**banners.{position}.alt** |	Texto alternativo para a imagem do banner
**banners.{position}.target** |	Se o link vai abrir em uma nova janela ou na mesma
**banners.{position}.banner_alt** |	Banner alternativo caso não tenha suporte ao flash (apenas quando o tipo for "flash"), possui as chaves "src", "link", "target"
**banners.{position}.margin_top** |	Especifica a posição do banner referente ao topo da página (apenas banner "floating")
**banners.{position}.margin_left** |	Especifica a posição do banner referente ao lado esquerdo da página
**banners.extra1.interval\*** |	Intervalo da transição entre cada slide 3 a 10 (segundos)
**banners.extra1.velocity\***| Velocidade da animação `0.5`,  `1.0`,  `1.5`,  `2.0`
**banners.extra1.animation\*** |	Tipo da animação `blind`,  `block`,  `cube`, `cubeSpread`, `fade`, `fadeFour`, `glassCube`,  `horizontal`, `tube`
**banners.extra1.stop_over\*** |	Pausar a troca de slides quando o mouse estiver sobre o banner `0`, `1`
**banners.extra1.navigation\*** |	Tipos de navegação `0`, `1`, `2`
**banners.extra1.progressbar \***|	Exibir barra de progresso `0`,  `1`

**\*** Disponível apenas e banners em js.
 {: .attention }