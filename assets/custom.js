jQuery(document).ready(function(){
  
  $(".grid-filter-custom").click(function(){
    $('.for--filter').addClass('grid-layout');
    $('.for--filter').removeClass('list-layout');
    $(this).addClass('active-grid');
    $('.list-filter-custom').removeClass('active-grid');
  });
  $(".list-filter-custom").click(function(){
    $('.for--filter').addClass('list-layout');
    $('.for--filter').removeClass('grid-layout');
     $(this).addClass('active-grid');
    $('.grid-filter-custom').removeClass('active-grid');
  });
});