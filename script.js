$(document).ready(function(){
    var bool = false;
    var menu = $(".hamburger_svg");
    menu.on('click', function(){
        if(!bool){
            afficherMenu();
        }else{
            byeMenu();
        }
        bool = !bool;
    });
    
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