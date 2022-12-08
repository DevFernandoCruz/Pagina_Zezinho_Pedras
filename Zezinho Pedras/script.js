$(document).ready(function(){
    $(window).scroll(function(){
        // script da barra de navegacao cabecalho
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // botao de rolagem mostrar ocultar
        if(this.scrollY > 500){
            $('.scroll-cima').addClass("show");
        }else{
            $('.scroll-cima').removeClass("show");
        }
    });
    // slide deslizante 
    $('.scroll-cima').click(function(){
        $('html').animate({scrollTop: 0});
        // removendo a rolagem ao clicar no botão deslizante
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // aplicando novamente a rolagem nos itens do menu 
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // animacao dos letreiros
    var typed = new Typed(".letreiro", {
        strings: ["Realizando Sonhos !"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".letreiro-2", {
        strings: ["se tornam realidade !"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // Scrip carrossel
    $('.carousel').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});