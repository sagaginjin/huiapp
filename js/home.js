$(document).ready(function() {
    
    $('.honey-card').hover(function() {
        $('.honey-brand').show();
        $('.wine-brand').hide();
        $('.snack-brand').hide();
        $('.beverage-brand').hide();

        $('.honey-card').css('color', '#ffffff');
        $('.honey-card').css('background-color', '#880303');
        $('.honey-triangle').css('display', 'block');

        $('.wine-card').css('color', '#880303');
        $('.wine-card').css('background-color', '#d7d7dd');
        $('.wine-triangle').css('display', 'none');

        $('.snack-card').css('color', '#880303');
        $('.snack-card').css('background-color', '#d7d7dd');
        $('.snack-triangle').css('display', 'none');

        $('.beverage-card').css('color', '#880303');
        $('.beverage-card').css('background-color', '#d7d7dd');
        $('.beverage-triangle').css('display', 'none');
    });
    $('.wine-card').hover(function() {
        $('.honey-brand').hide();
        $('.wine-brand').show();
        $('.snack-brand').hide();
        $('.beverage-brand').hide();

        $('.honey-card').css('color', '#880303');
        $('.honey-card').css('background-color', '#d7d7dd');
        $('.honey-triangle').css('display', 'none');

        $('.wine-card').css('color', '#ffffff');
        $('.wine-card').css('background-color', '#880303');
        $('.wine-triangle').css('display', 'block');

        $('.snack-card').css('color', '#880303');
        $('.snack-card').css('background-color', '#d7d7dd');
        $('.snack-triangle').css('display', 'none');

        $('.beverage-card').css('color', '#880303');
        $('.beverage-card').css('background-color', '#d7d7dd');
        $('.beverage-triangle').css('display', 'none');
    });
    $('.snack-card').hover(function() {
        $('.honey-brand').hide();
        $('.wine-brand').hide();
        $('.snack-brand').show();
        $('.beverage-brand').hide();

        $('.honey-card').css('color', '#880303');
        $('.honey-card').css('background-color', '#d7d7dd');
        $('.honey-triangle').css('display', 'none');

        $('.wine-card').css('color', '#880303');
        $('.wine-card').css('background-color', '#d7d7dd');
        $('.wine-triangle').css('display', 'none');

        $('.snack-card').css('color', '#ffffff');
        $('.snack-card').css('background-color', '#880303');
        $('.snack-triangle').css('display', 'block');

        $('.beverage-card').css('color', '#880303');
        $('.beverage-card').css('background-color', '#d7d7dd');
        $('.beverage-triangle').css('display', 'none');
    });
    $('.beverage-card').hover(function() {
        $('.honey-brand').hide();
        $('.wine-brand').hide();
        $('.snack-brand').hide();
        $('.beverage-brand').show();

        $('.honey-card').css('color', '#880303');
        $('.honey-card').css('background-color', '#d7d7dd');
        $('.honey-triangle').css('display', 'none');

        $('.wine-card').css('color', '#880303');
        $('.wine-card').css('background-color', '#d7d7dd');
        $('.wine-triangle').css('display', 'none');

        $('.snack-card').css('color', '#880303');
        $('.snack-card').css('background-color', '#d7d7dd');
        $('.snack-triangle').css('display', 'none');

        $('.beverage-card').css('color', '#ffffff');
        $('.beverage-card').css('background-color', '#880303');
        $('.beverage-triangle').css('display', 'block');
    });
});