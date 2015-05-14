$(document).ready(function(){

//----------------------------CAROUSEL--------------------------------//    

    $('.owl-carouselA').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


//--------------------------HOVER-------------------------------------//    

    $(".features-img.film").hover(function(){
        $(".features-img.film").toggleClass("active");
    });
    
    $(".features-img.mobile").hover(function(){
        $(".features-img.mobile").toggleClass("active");
    });

    $(".features-img.select").hover(function(){
        $(".features-img.select").toggleClass("active");
    });
        
    $(".features-img.pict").hover(function(){
        $(".features-img.pict").toggleClass("active");
    });



    $(".pop-img-hover.1").hover(function(){
        $(".pop-img.1").toggleClass("scale");
    });

    $(".pop-img-hover.2").hover(function(){
        $(".pop-img.2").toggleClass("scale");
    });

    $(".pop-img-hover.3").hover(function(){
        $(".pop-img.3").toggleClass("scale");
    });

    $(".pop-img-hover.4").hover(function(){
        $(".pop-img.4").toggleClass("scale");
    });

//-----------------------------ISOTOPE--------------------------------//


    $(window).load(function() {
  
      var $container = $('.isotope').isotope({
      itemSelector: '.item',
        masonry: {
        columnWidth: 1
      }
    
    });
    var filterFns = {};

    // bind filter button click
    $('.filters').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $container.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked').removeClass("active");
        $( this ).addClass('is-checked');
        $( this ).addClass("active");
      });
    });

   $('.isotope').isotope('bindResize');
})

})