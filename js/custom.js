// Javascripts
jQuery(document).ready(function () {
    "use strict";

    //change background menu after scroll

    function changeBackgroundMenu(){
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
        $(".header").addClass("scroll");
      } else {
        $(".header").removeClass("scroll");
      }
    }

    $(window).scroll(function() {
      changeBackgroundMenu();
    });

    
    var menuIsShowed = false;
    $(".menu > img").click(function(){
      menuIsShowed = !menuIsShowed;
      if(menuIsShowed)  $(this).attr("src","images/menu-closed.png");
      else $(this).attr("src","images/menu.png");
    });

    //PrettyPhoto
    if (jQuery().prettyPhoto) {
        jQuery('a[data-rel]').each(function () {
            jQuery(this).attr('rel', jQuery(this).data('rel'));
        });

        jQuery("a[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false,
            animation_speed: 'normal', // fast/slow/normal
            slideshow: 5000, // false OR interval time in ms
            autoplay_slideshow: false, // true/false
            opacity: 0.80, // Value between 0 and 1
            show_title: true, // true/false
			allow_resize: true, // Resize the photos bigger than viewport. true/false
            default_width: 500,
            default_height: 344,
            counter_separator_label: '/', // The separator for the gallery counter 1 "of" 2
            theme: 'pp_default', // light_rounded / dark_rounded / light_square / dark_square / facebook
            horizontal_padding: 20, // The padding on each side of the picture
            hideflash: false, // Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto
            wmode: 'opaque', // Set the flash wmode attribute
            autoplay: true, // Automatically start videos: True/False
            modal: false, // If set to true, only the close button will close the window
            deeplinking: true, // Allow prettyPhoto to update the url to enable deeplinking.
            overlay_gallery: true, // If set to true, a gallery will overlay the fullscreen image on mouse over
            keyboard_shortcuts: true, // Set to false if you open forms inside prettyPhoto
            changepicturecallback: function () {}, // Called everytime an item is shown/changed
            callback: function () {}, // Called when prettyPhoto is closed
        });
    }




});
