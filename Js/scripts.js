$(".bg-black h3").css("color", "gray")

$(".imagengaleria").hover (function(){
    $("section").toggleClass("backgroundsection")
    $(".carousel-item").toggleClass("opacidad")
})

/*$(".contenedordeimagen").hover (function(){
    $("section").toggleClass("backgroundsection");
    var ancho = $( document ).width();
    $(this).css('position', 'relative');
    $(this).css('left', (ancho / 2) - ancho);
})*/