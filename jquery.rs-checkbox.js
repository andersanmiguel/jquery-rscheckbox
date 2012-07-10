(function($) {
    $.fn.rsCheckbox = function( options ) {

        var settings = { 
                element : 'span',
                classNorm : 'favorites',
                classHigh : 'selected',
                hideCheck : true
            },
            checks = $(this);
          
        if( options ) {
            $.extend( settings, options );
        }

        if (settings.hideCheck) {
            checks.hide();
        }

        checks.after('<' + settings.element + ' class="' + settings.classNorm + '" />');

        $(checks + ':checked').next(settings.element).addClass(settings.classHigh);

        checks.on('change', function() {
            var $this = $(this);
            $this.next(settings.element+'.' + settings.classNorm).toggleClass(settings.classHigh);
        });

        $('body').on('click', settings.element + '.' + settings.classNorm, function() {
            var $this = $(this);
            $this.prev('input', checks).trigger('click');
        });

        return $(this);

    }

})(jQuery);
