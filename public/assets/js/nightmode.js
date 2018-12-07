$('input[type=checkbox]').removeAttr('checked');

$( '#nightmode' ).click(function() {
  if( $('input[name=nightmode]').is(':checked') ){
      $('body').css('background-color', '#23272A');
      $('.card').css('background-color', '#2C2F33');
      $('.card-title').css('color', '#ddd');
      $('td').css('color', '#ddd');
      $('.dropdown-menu').css('background-color', '#2C2F33');
      $('.sidebar').css('background-color', '#2C2F33');
      $('.logo').css('background-color', '#2C2F33');
      $('.nav-link').css('background-color', '#2C2F33');
} else {
      $('body').css('background-color', '#eee');
      $('.card').css('background-color', '#FFFFFF');
      $('td').css('color', '#3C4858');
      $('.card-title').css('color', '#FFFFFF');
      $('.dropdown-menu').css('background-color', '#FFFFFF');
      $('.sidebar').css('background-color', '#FFFFFF');
      $('.logo').css('background-color', '#eee');
      $('.nav-link').css('background-color', '#eee');
}
});
