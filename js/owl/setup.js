$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3//quando a tela tiver 600px, tera tres itens por vez na tela//
        },
        1000:{
            items:5
        }
    }
})