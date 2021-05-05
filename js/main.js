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
            items:3,
            loop:true,
            nav:true,
            dots:true,
            autoplay:true,
            autoplaySpeed:1000,
            smartSpeed:1500,
            autoplayHoverPause:true,
            margin:30
        });

    });


})(jQuery);


/********************************************
           Progress bar plugin section-desigon ends here
********************************************/





  
        







    




    
