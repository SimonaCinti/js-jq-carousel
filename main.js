/**
 * Slide img gallery | JQUERY
 */

$(document).ready(function(){

     // Click on mouse
    $('.next').click(function(){
        navNextPrevImg('next');
    });

    $('.prev').click(function(){
        navNextPrevImg('prev');
    });
    
    // Nav with Keyboard
    $(document).keydown(function(event) {
        console.log(event.keyCode); //? log del tasto premuto in console log

        if (event.keyCode == 37) {
            navNextPrevImg('prev'); 
        } 
        else if (event.keyCode == 39){
            navNextPrevImg('next');
        }
    });
    
    
}); //! End doc.ready 

/**
 * Funzione navigazione next e prev img
 * @param {string} direction // navigazione next o prev
 */

function navNextPrevImg (direction){
    var activeImage = $('.images img.active');
    var activeCircle = $ ('.nav i.active');

    // reset active img
    activeImage.removeClass('active');
    activeCircle.removeClass('active');

    // Direzione: next
    if (direction === 'next'){
        if (activeImage.hasClass('last')) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            activeImage.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }
    }

    // Direzione: prev
    if (direction === 'prev') {
        if (activeImage.hasClass('first')) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            activeImage.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
    }

}