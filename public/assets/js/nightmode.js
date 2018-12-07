$('input[type=checkbox]').removeAttr('checked');

$( '#nightmode' ).click(function() {
  if( $('input[name=nightmode]').is(':checked') ){
      $('body').css('background-color', '#23272A');
      $('.card').css('background-color', '#2C2F33');
      $('.card-title').css('color', '#ddd');
      $('td').css('color', '#ddd');
      $('.dropdown-menu').css('background-color', '#2C2F33');
      $('.sidebar').css('background-color', '#2C2F33');
      $('p').css('color', '#eee');
      $('.header-title').css('color', '#eee');
      $('.logo-normal').css('color', '#eee!important');
} else {
      $('body').css('background-color', '#eee');
      $('.card').css('background-color', '#FFFFFF');
      $('td').css('color', '#3C4858');
      $('.card-title').css('color', '#FFFFFF');
      $('.dropdown-menu').css('background-color', '#FFFFFF');
      $('.sidebar').css('background-color', '#FFFFFF');
      $('p').css('color', '#2C2F33');
      $('.header-title').css('color', '#212529');
      $('.logo-normal').css('color', '#2C2F33!important');
}
});
