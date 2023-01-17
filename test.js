$(function() {
    $('#toggle').addClass('hidden').hide();
    $('#toggle-button').click(function() {
        if ($('#toggle').hasClass('hidden')) {
            $('#toggle').removeClass('hidden').fadeIn(1000);
        }
        else {
            $('#toggle').addClass('hidden').fadeOut(1000);
        }
    });
});