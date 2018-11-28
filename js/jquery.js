// $('ul#gallery li .wraper').mouseenter(function(){
//     var title = $(this).parent('li').data('title');
//     if(!$(this).children("div").length){
//         $(this).append('<div class="overlay"></div>');
//     }
//     var overlay = $(this).children('.overlay');
//     overlay.html('<h3>'+title+'</h3>');
//     overlay.fadeIN(800);

//     overlay.fadeOut(500);
// });



   $(document).ready(function() {
    $('.showmenu').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });
 });