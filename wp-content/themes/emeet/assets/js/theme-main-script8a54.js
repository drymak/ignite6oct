(function($) {
    "use strict";

    $(document).ready(function() {

        /*=========================================================================
        ===  MENU SCROLL FIXED
        ========================================================================== */
        var s = $(".lgx-header-position");
        var pos = s.position();

        $(window).on('scroll', function () {
            var windowpos = $(window).scrollTop();
            if (windowpos >= pos.top) {
                s.addClass("menu-onscroll");
            } else {
                s.removeClass("menu-onscroll");
            }
        });


        /*=========================================================================
         ===  gallery slider
         ========================================================================== */

        if ( $('.slider-container').length ) {
            $(".slider-container").ikSlider({
                speed: 500
            });
        }


        /*=========================================================================
         ===  Masonry Post
         ========================================================================== */

        if ( $('#lgx-masonry-wrapper').length ) {
            //set the container that Masonry will be inside of in a var
            var container = document.querySelector('#lgx-masonry-wrapper');
            //create empty var msnry
            var msnry;
            // initialize Masonry after all images have loaded
            imagesLoaded( container, function() {
                msnry = new Masonry( container, {
                    itemSelector: '.lgx-post-loop'
                });
            });

        }


    });//DOM READY

})(jQuery);




