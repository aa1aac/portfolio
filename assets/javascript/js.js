$(document).ready(function(){
    new WOW().init();
$('.carousel').carousel({
    interval: 1000
  })
  $(".contact").click(function() {
    $('html,body').animate({
        scrollTop: $("#Contact").offset().top},
        'veryslow');
});
$(".projects").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'veryslow');
});
$(".about").click(function() {
    $('html,body').animate({
        scrollTop: $("#About").offset().top},
        'veryslow');
});

})