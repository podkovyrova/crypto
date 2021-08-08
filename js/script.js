$(document).ready(function () {
    $('.header__burger').click(function(event) {
        $('.header__burger,.navigation-column').toggleClass('active');
        $('body').toggleClass('lock');
    })
});