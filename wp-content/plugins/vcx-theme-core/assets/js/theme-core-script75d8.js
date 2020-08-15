(function($) {
    "use strict";
    $(document).ready(function() {


        var reviewRTL = false;

        if( vcxDataObj.review_rtl) {

            reviewRTL = vcxDataObj.review_rtl;
        }

        /*=========================================================================
       ===  TESTIMONIAL SLIDER
       ========================================================================== */
        if ($('.lgx-review-slider').length) {
            $(".lgx-review-slider").owlCarousel({
                margin: 0,
                items: 1,
                loop: true,
                rtl: reviewRTL,
                autoplay:true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: 2000,
                autoplaySpeed: 500,
                autoplayHoverPause: true,
                nav: true,
                addClassActive : true
            });
        }

        if ($('.lgx-review-slider2').length) {
            $(".lgx-review-slider2").owlCarousel({
                margin: 0,
                loop: true,
                rtl: reviewRTL,
                autoplay:true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: 2000,
                autoplaySpeed: 500,
                autoplayHoverPause: true,
                nav: true,
                addClassActive : true,
                responsive:{
                    // Item in Mobile Devices (Less than 768px)
                    0:{
                        items:1,
                    },
                    // Item in Tablets Devices (768px and Up)
                    768:{
                        items:1,
                    },
                    // Item in Desktops Devices (Desktops 992px)

                    992:{
                        items:2,
                    },
                    // Item in Large Desktops Devices (1200px and Up)
                    1200:{
                        items:2,
                    }
                }

            });
        }

        if ($('.lgx-review-slider3').length) {
            $(".lgx-review-slider3").owlCarousel({
                margin: 0,
                loop: true,
                rtl: reviewRTL,
                autoplay:true,
                dots: false,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplayTimeout: 2000,
                autoplaySpeed: 500,
                nav: true,
                addClassActive : true,
                autoplayHoverPause: true,
                responsive:{
                    // Item in Mobile Devices (Less than 768px)
                    0:{
                        items:1,
                    },
                    // Item in Tablets Devices (768px and Up)
                    768:{
                        items:1,
                    },
                    // Item in Desktops Devices (Desktops 992px)

                    992:{
                        items:3,
                    },
                    // Item in Large Desktops Devices (1200px and Up)
                    1200:{
                        items:3,
                    }
                }

            });
        }


        /*=========================================================================
         ===  TESTIMONIAL SLIDER END
         ========================================================================== */


        /*=========================================================================
        ===  Modal Video
        ========================================================================== */
        /* Get iframe src attribute value i.e. YouTube video url
         and store it in a variable */
        var url = $("#modalvideo").attr('src');

        /* Remove iframe src attribute on page load to
         prevent autoplay in background */
        $("#modalvideo").attr('src', '');

        /* Assign the initially stored url back to the iframe src
         attribute when modal is displayed */
        $("#lgx-modal").on('shown.bs.modal', function(){
            $("#modalvideo").attr('src', url);
        });

        /* Assign empty url value to the iframe src attribute when
         modal hide, which stop the video playing */
        $("#lgx-modal").on('hide.bs.modal', function(){
            $("#modalvideo").attr('src', '');
        });
        /*=========================================================================
         ===  Modal Video END
         ========================================================================== */

        /*=========================================================================
        ===  Modal Video
        ========================================================================== */
        /* Get iframe src attribute value i.e. YouTube video url
         and store it in a variable */
        var url2 = $("#modalvideo2").attr('src');

        /* Remove iframe src attribute on page load to
         prevent autoplay in background */
        $("#modalvideo2").attr('src', '');

        /* Assign the initially stored url back to the iframe src
         attribute when modal is displayed */
        $("#lgx-modal2").on('shown.bs.modal', function(){
            $("#modalvideo2").attr('src', url2);
        });

        /* Assign empty url value to the iframe src attribute when
         modal hide, which stop the video playing */
        $("#lgx-modal2").on('hide.bs.modal', function(){
            $("#modalvideo2").attr('src', '');
        });
        /*=========================================================================
         ===  Modal Video END
         ========================================================================== */



        /*=========================================================================
         ===  magnific popup
         ========================================================================== */
        if ( $('.lgx-gallery').length ) {

            $('.lgx-gallery').each(function() {
                // the containers for all your galleries
                $(this).magnificPopup({
                    delegate: '.lgx-single-photo', // the selector for gallery item
                    type: 'image',
                    gallery: {
                        enabled:true
                    },
                    image: {
                        titleSrc: 'title'
                    }
                });
            });

        }




        /*=========================================================================
         ===  magnific popup END
         ========================================================================== */



        /*=========================================================================
        === Header  Circular CountDown
        ========================================================================== */

        if ( $('#vcx-header-countdown').length ) {

            var vday_top    = $('#vcx-header-countdown').data("vday");
            var vhour_top   = $('#vcx-header-countdown').data("vhour");
            var vmin_top    = $('#vcx-header-countdown').data("vmin");
            var vsec_top    = $('#vcx-header-countdown').data("vsec");

            var daycolor   = $('#vcx-header-countdown').data("dcolor");
            var hourcolor  = $('#vcx-header-countdown').data("hcolor");
            var mincolor   = $('#vcx-header-countdown').data("mcolor");
            var seccolor   = $('#vcx-header-countdown').data("scolor");
            var countbgcolor = $('#vcx-header-countdown').data("cbgcolor");
            var textcolor  = $('#vcx-header-countdown').data("textcolor");

            var dataTime = $('#vcx-header-countdown').data('date'); // Date Format : Y/m/d

        }

        // alert(dataTime);


        if ( $('#lgx-countdowntop').length ) {


            $('#lgx-countdowntop').countdown(dataTime, function(event) {
                var $this = $(this).html(event.strftime(''
                    + '<span class="lgx-days" style="color:'+daycolor+';">%D<i style="color:'+textcolor+';"> '+vday_top+' </i></span> '
                    + '<span class="lgx-hr" style="color:'+hourcolor+';">%H <i style="color:'+textcolor+';"> '+vhour_top+'</i></span> '
                    + '<span class="lgx-min" style="color:'+mincolor+';">%M <i style="color:'+textcolor+';"> '+vmin_top+'</i></span> '
                    + '<span class="lgx-sec" style="color:'+seccolor+';">%S <i style="color:'+textcolor+';"> '+vsec_top+ '</i></span>'
                ));
            });

        }



        if ( $('#circular-countdown').length ) {

            $("#circular-countdown").TimeCircles({
                "animation": "smooth",
                "bg_width": 1.0,
                "fg_width": 0.1,
                //"circle_bg_color": '#ec398b',
                "circle_bg_color": countbgcolor,
                "time": {
                    "Days": {
                        "text": vday_top,
                        "color": daycolor,
                        "show": true
                    },
                    "Hours": {
                        "text": vhour_top,
                        "color": hourcolor,
                        "show": true
                    },
                    "Minutes": {
                        "text": vmin_top,
                        "color": mincolor,
                        "show": true
                    },
                    "Seconds": {
                        "text": vsec_top,
                        "color": seccolor,
                        "show": true
                    }
                }
            });
        }

        if($('#lgx-countdown-hc').length) {
            var vday_hc = $('#lgx-countdown-hc').data("vday");
            var vhour_hc = $('#lgx-countdown-hc').data("vhour");
            var vmin_hc = $('#lgx-countdown-hc').data("vmin");
            var vsec_hc = $('#lgx-countdown-hc').data("vsec");

            var dataTime2 = $('#lgx-countdown-hc').data('date'); // Date Format : Y/m/d


            $('#lgx-countdown-hc').countdown(dataTime2, function(event) {
                var $this = $(this).html(event.strftime(''
                    + '<span class="lgx-days">%D <i> '+vday_hc+' </i></span> '
                    + '<span class="lgx-hr">%H <i> '+vhour_hc+'</i></span> '
                    + '<span class="lgx-min">%M <i> '+vmin_hc+'</i></span> '
                    + '<span class="lgx-sec">%S <i> '+vsec_hc+ '</i></span>'
                ));
            });
        }



        /*=========================================================================
         === Section CountDown
         ========================================================================== */

        if ( $('#vcx-section-countdown').length ) {
            var vday_section = $('#vcx-section-countdown').data("vday");
            var vhour_section = $('#vcx-section-countdown').data("vhour");
            var vmin_section = $('#vcx-section-countdown').data("vmin");
            var vsec_section = $('#vcx-section-countdown').data("vsec");

            var daycolor_sec   = $('#vcx-section-countdown').data("dcolor");
            var hourcolor_sec  = $('#vcx-section-countdown').data("hcolor");
            var mincolor_sec   = $('#vcx-section-countdown').data("mcolor");
            var seccolor_sec   = $('#vcx-section-countdown').data("scolor");
            var countbgcolor_sec = $('#vcx-section-countdown').data("cbgcolor");
            var textcolor_sec  = $('#vcx-section-countdown').data("textcolor");

            var dataTime_section = $('#vcx-section-countdown').data('date'); // Date Format : Y/m/d

        }




        if ( $('#vcx-countdown-simple').length ) {

            $('#vcx-countdown-simple').countdown(dataTime_section, function(event) {
                var $this = $(this).html(event.strftime(''
                    + '<span class="lgx-days" style="color:'+daycolor_sec+';">%D<i style="color:'+textcolor_sec+';"> '+vday_section+' </i></span> '
                    + '<span class="lgx-hr" style="color:'+hourcolor_sec+';">%H <i style="color:'+textcolor_sec+';"> '+vhour_section+'</i></span> '
                    + '<span class="lgx-min" style="color:'+mincolor_sec+';">%M <i style="color:'+textcolor_sec+';"> '+vmin_section+'</i></span> '
                    + '<span class="lgx-sec" style="color:'+seccolor_sec+';">%S <i style="color:'+textcolor_sec+';"> '+vsec_section+ '</i></span>'
                ));
            });
        }


        if ( $('#vcx-countdown-circular').length ) {

            $("#vcx-countdown-circular").TimeCircles({
                "animation": "smooth",
                "bg_width": 1.0,
                "fg_width": 0.1,
                "circle_bg_color": countbgcolor_sec,
                "time": {
                    "Days": {
                        "text": vday_section,
                        "color": daycolor_sec,
                        "show": true
                    },
                    "Hours": {
                        "text": vhour_section,
                        "color": hourcolor_sec,
                        "show": true
                    },
                    "Minutes": {
                        "text": vmin_section,
                        "color": mincolor_sec,
                        "show": true
                    },
                    "Seconds": {
                        "text": vsec_section,
                        "color": seccolor_sec,
                        "show": true
                    }
                }
            });
        }


        /*=========================================================================
                 ===  Typed Animation START
                 ========================================================================== */
        if($('#lgx-typed-string').length){

            var typedSting = $('#lgx-typed-string').data("title");
            //console.log(typedSting);
            if( typedSting ) {
                var counter = 0;
                var typed_arr = Array();
                var single_str = "";

                for (var i = 0; i < typedSting.length; i++) {

                    if ((typedSting[i] == '|') || (i == (typedSting.length - 1))) {
                        typed_arr[counter] = single_str;
                        single_str = "";
                        counter++;
                        continue;
                    }
                    single_str += typedSting[i];
                }


                $('#lgx-typed-string').typed({
                    strings: typed_arr,
                    // typing speed
                    typeSpeed: 60,
                    // time before typing starts
                    startDelay: 0,
                    // backspacing speed
                    backSpeed: 0,
                    // shuffle the strings
                    shuffle: false,
                    // time before backspacing
                    backDelay: 500,
                    // loop
                    loop: true,
                    // false = infinite
                    loopCount: false,
                    // show cursor
                    showCursor: true,
                    // character for cursor
                    cursorChar: "|",
                    // either html or text
                    contentType: 'html'
                });
            }
        }


        /*=========================================================================
         ===  Typed Animation END
         ========================================================================== */



        /*=========================================================================
         ===  gallery SLIDER
         ========================================================================== */
        if ($('.lgx-owlgallery').length) {
            $(".lgx-owlgallery").owlCarousel({
                margin: 0,
                items: 4,
                loop: true,
                autoplay:true,
                dots: false,
                navText: ['<img src="'+vcxDataObj.vcx_url+'img/arrow-left.png">','<img src="'+vcxDataObj.vcx_url+'img/arrow-right.png">'],
                autoplayTimeout: 2000,
                autoplaySpeed: 500,
                nav: true,
                addClassActive : true,
                /*responsive:{
                    // Item in Mobile Devices (Less than 768px)
                    0:{
                        items:1,
                    },
                    // Item in Tablets Devices (768px and Up)
                    768:{
                        items:1,
                    },
                    // Item in Desktops Devices (Desktops 992px)

                    992:{
                        items:2,
                    },
                    // Item in Large Desktops Devices (1200px and Up)
                    1200:{
                        items:2,
                    }
                }*/
            });
        }
        /*=========================================================================
         ===  gallery SLIDER END
         ========================================================================== */


        if($('.vcx-instagram-feed').length){

            var userID   = $('#instafeed').data('user');
            var clientID = $('#instafeed').data('client');
            var tokenID  = $('#instafeed').data('token');
            var limitNO  = $('#instafeed').data('limit');

            //alert(userId);
            var userFeed = new Instafeed({
                get: 'user',
                userId: userID,
                clientId: clientID,
                accessToken: tokenID,
                resolution: 'standard_resolution',
                template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
                sortBy: 'most-recent',
                limit: limitNO,
                links: false
            });

            userFeed.run();
        }

        $('[data-toggle="tooltip"]').tooltip();

    });//DOM READY

})(jQuery);




