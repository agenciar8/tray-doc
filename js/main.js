jQuery(function() {
  $("section> h6").on("click", function() {
    var item = $(this).parent()[0];
    $ul = item.querySelector("ul");
    $icon = item.querySelector("i");
    $ul.getAttribute("class") == "null"
      ? $ul.setAttribute("class", "active")
      : $ul.setAttribute("class", null);
    $ul.getAttribute("class") == "null"
      ? $icon.setAttribute("class", "fa fa-caret-right")
      : $icon.setAttribute("class", "fa fa-caret-down");
  });

  // $(window).scroll(function() {
  //   var topScroll = Number(jQuery(window).scrollTop());
  //   if (topScroll >= 200) {
  //     $(".sidebar").css("position", "fixed").css("margin-top", "50px");
  //     $("header").css("display", "none");
  //   } else {
  //     $(".sidebar").css("position", "initial").css("margin-top", 0);
  //     $("header").css("display", "block");
  //   }
	
	// if( topScroll >= 3000){
	// 	$(".sidebar").css("position", "initial")
	// }

  // });


  $("section > div.highlighter-rouge:first-of-type").each(function(i) {
    var $this = $(this).before('<ul class="languages"></ul>'),
      $languages = $this.prev(),
      $notFirst = $this.nextUntil(":not(div.highlighter-rouge)"),
      $all = $this.add($notFirst);

    $all.add($languages).wrapAll('<div class="code-viewer"></div>');

    listLanguages($all, $languages);

    $this.css("display", "block");
    $notFirst.css("display", "none");

    $languages.find("a").first().addClass("active");

    $languages.find("a").click(function() {
      $all.css("display", "none");
      $all.eq($(this).parent().index()).css("display", "block");

      $languages.find("a").removeClass("active");
      $(this).addClass("active");
      return false;
    });

    if ($languages.children().length === 0) {
      $languages.remove();
    }
  });

  function listLanguages($el, $insert) {
    $el.each(function(i) {
      var title = $(this).attr("title");
      if (title) {
        $insert.append('<li><a href="#">' + title + "</a></li>");
      }
    });
  }
});
