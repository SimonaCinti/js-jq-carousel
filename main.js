/**
 * Slide img gallery | JQUERY
 */

$(document).ready(function(){

    $('.next').click(function(){
        navNextPrevImg('next');
    });

    $('.prev').click(function(){
        navNextPrevImg('prev');
    });

    
}); //! End doc.ready 

/**
 * Funzione navigazione next e prev img
 * @param {*} direction // navigazione next o prev
 */

function navNextPrevImg (direction){
    var activeImage = $('.images img.active');
    var activeCircle = $ ('.nav i.active');

    // reset active
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
}