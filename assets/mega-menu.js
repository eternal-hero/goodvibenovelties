function init() {
  cacheSelectors();
  $(selectors.siteNavHasDropdown).on('mouseenter', function() {
    	var $el = $(this);
  	showDropdown($el);
  });
  $('.site-nav__dropdown').on('mouseenter', function() {
  	$(this).show();
    	$(this).parent().addClass(config.activeClass);
  });
  $(selectors.siteNavHasDropdown).on('mouseleave', function() {
  	hideDropdown(cache.$activeDropdown);
  });
  $('.site-nav__dropdown').on('mouseleave', function() {
    	hideDropdown(cache.$activeDropdown);
    	$(this).hide();
  });
  cache.$subMenuLinks.on('click.siteNav', function(evt) {
    // Prevent click on body from firing instead of link
    evt.stopImmediatePropagation();
  });
}
function showDropdown($el) {
  $el.addClass(config.activeClass);
  var headerHeight = $('#shopify-section-header').outerHeight(),
      headerNav = $el.find('.site-nav__dropdown').outerHeight();
  $el.find('.site-nav__dropdown').css({top: +headerHeight+ 'px'});
  cache.$activeDropdown = $el;
}
function hideDropdown($el) {
  // remove aria on open dropdown
  $el.removeClass(config.activeClass);
  // reset active dropdown
  cache.$activeDropdown = $(selectors.siteNavActiveDropdown);
  $(selectors.body).off('click.siteNav');
  $(window).off('keyup.siteNav');
}