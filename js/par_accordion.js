(function ($, Drupal) {

    'use strict';
    //////////////// Accordion - Click to open/collapse
    Drupal.behaviors.accordion = {
        attach: function (context, settings) {
            $('.accordion-title').click(function(){
                var accordion = $(this).closest('.accordion');
                var li = $(this).closest('li');
                if (li.hasClass('active')) {
                    li.removeClass('active');
                } else {
                    if (accordion.hasClass('accordion-oneopen')){
                        var wasActive = accordion.find('li.active');
                        wasActive.removeClass('active');
                        (li).addClass('active');
                    } else {
                        li.addClass('active');
                    }
                }
            });
        }
    };



})(jQuery, Drupal);
