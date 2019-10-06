$(document).ready(function(){
    
    var menu = $(".hamburger_svg");
    menu.on('click', afficherMenu);

    var croixMenu = $('.croix_menu');
    croixMenu.on('click',byeMenu);
    
}); 
function afficherMenu(){
    $(".menu").animate({
        maxHeight:"100vh"
    })

}
function byeMenu(){
    $(".menu").animate({
        maxHeight:"0"
    })
}