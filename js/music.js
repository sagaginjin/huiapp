$(document).ready(function() {

    $('#audio-player').get(0).play();

    var audioplayer = document.getElementById("audio-player");
    $('.music-icon').click(function() {
        if (audioplayer.paused) {
            audioplayer.play();
            $('.music-icon').attr('src', './imgs/music player.png');
         }   
         else {
            audioplayer.pause();
            $('.music-icon').attr('src', './imgs/music stoper.png');
         }
    });

    $('.music-img').click(function() {
        if (audioplayer.paused) {
            audioplayer.play();
            $('.music-img').attr('src', '../imgs/music player.png');
         }   
         else {
            audioplayer.pause();
            $('.music-img').attr('src', '../imgs/music stoper.png');
         }
    });

    $('.music-icon-en').click(function() {
        if (audioplayer.paused) {
            audioplayer.play();
            $('.music-icon-en').attr('src', '../imgs/music player.png');
         }   
         else {
            audioplayer.pause();
            $('.music-icon-en').attr('src', '../imgs/music stoper.png');
         }
    });

    $('.music-img-en').click(function() {
        if (audioplayer.paused) {
            audioplayer.play();
            $('.music-img-en').attr('src', '../../imgs/music player.png');
         }   
         else {
            audioplayer.pause();
            $('.music-img-en').attr('src', '../../imgs/music stoper.png');
         }
    });
});