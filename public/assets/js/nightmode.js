var cook = readCookie('nightmode');
if (!cook) {
    document.cookie = "nightmode=off; expires=0";
}

checkCookie();

$( '#nightmode' ).click(function() {
    if (cook == 'on') {
        document.cookie = "nightmode=off; expires=0";
        checkCookie();
    } else {
        document.cookie = "nightmode=on; expires=0";
        checkCookie();
    }
});

function checkCookie() {
    cook = readCookie('nightmode');
    if (cook == 'on') {
        document.getElementById("nightmode").checked = true;
        $('body').css('background-color', '#23272A');
        $('.card').css('background-color', '#2C2F33');
        $('.card-title').css('color', '#ddd');
        $('td').css('color', '#ddd');
        $('.dropdown-menu').css('background-color', '#2C2F33');
        $('.sidebar').css('background-color', '#2C2F33');
        $('p').css('color', '#eee');
        $('.header-title').css('color', '#eee');
        $('.simple-text').css('color', '#2C2F33!important');
    } else {
        document.getElementById("nightmode").checked = false;
        $('body').css('background-color', '#eee');
        $('.card').css('background-color', '#FFFFFF');
        $('td').css('color', '#3C4858');
        $('.card-title').css('color', '#3C4858');
        $('.dropdown-menu').css('background-color', '#FFFFFF');
        $('.sidebar').css('background-color', '#FFFFFF');
        $('p').css('color', '#2C2F33');
        $('.header-title').css('color', '#212529');
        $('.simple-text').css('color', '#FFFFFF!important');
    }
}

function readCookie(a) {
    var b = document.cookie.match('(^|;)\\s*'+a+'\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}
