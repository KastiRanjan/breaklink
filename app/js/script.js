$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 200) {
    $(".page-header__bottom").addClass("fixed-top");
  } else {
    $(".page-header__bottom").removeClass("fixed-top");
  }
});

$(".search-icon").click(function () {
  $(".searchBar").slideToggle(300);
});
