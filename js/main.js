/********************************************
           Progress bar plugin section-desigon
********************************************/


(function($) {
    'use strict';

    // $('.html').rProgressbar({
    //     percentage: 80,
    //     fillBackgroundColor: '#1abc9c'
    // });
    $('.css').rProgressbar({
        percentage: 65,
        height:'4px',
        backgroundColor:'#F5FBFF',
        fillBackgroundColor: '#596672'
    });



    $('.php').rProgressbar({
        percentage: 80,
        height:'4px',
        backgroundColor:'#F5FBFF',
        fillBackgroundColor: '#596672'
    });

    $('.html').rProgressbar({
        
          percentage: 60,
        
          fillBackgroundColor:'#596672',
        
          backgroundColor:'#F5FBFF',
        
          borderRadius:'0px',
        
          height:'4px',
        
          width:'100%'
        
        });

    // $('.javascript').rProgressbar({
    //     percentage: 65,
    //     fillBackgroundColor: '#34495e'
    // });



    // $('.jquery').rProgressbar({
    //     percentage: 95,
    //     fillBackgroundColor: '#f1c40f',
    //     backgroundColor: '#e67e22'
    // });
    $(document).ready(function () {
        $(".banner-section .owl-carousel").owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:true,
            autoplay:true,
            autoplaySpeed:1000,
            smartSpeed:1500,
            autoplayHoverPause:true,
            
        });

        
    });
    $(document).ready(function () {
        $(".reveiw-section .owl-carousel").owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:true,
            autoplay:true,
            autoplaySpeed:1000,
            smartSpeed:1500,
            autoplayHoverPause:true
        });

    });
    $(document).ready(function () {
        $(".instagram-section .owl-carousel").owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:true,
            autoplay:true,
            autoplaySpeed:1000,
            smartSpeed:1500,
            autoplayHoverPause:true,
            margin:30,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        });

    });
    $('document').ready(function(){
        $(function () {
            $.scrollUp({
                scrollName: 'scrollUp',      // Element ID
                scrollDistance: 600,         // Distance from top/bottom before showing element (px)
                scrollFrom: 'top',           // 'top' or 'bottom'
                scrollSpeed: 1000,            // Speed back to top (ms)
                easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
                animation: 'fade',           // Fade, slide, none
                animationSpeed: 200,         // Animation speed (ms)
                scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
                scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
                scrollText: 'Scroll to top', // Text for element, can contain HTML
                scrollTitle: false,          // Set a custom <a> title if required.
                scrollImg: true,            // Set true to use image
                activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
                zIndex: 2147483647           // Z-Index for the overlay
            });
        });  
    });


})(jQuery);


/********************************************
           Progress bar plugin section-desigon ends here
********************************************/





  
        







    




    
