(function($) {
    $.fn.rsCheckbox = function( options ) {

        return this.each(function() {
            var settings = { 
                element : 'span',
                classNorm : 'favorites',
                classHigh : 'selected',
                hideCheck : true
            },
            insert = '',
            checks = $(this);

            if( options ) {
                $.extend( settings, options );
            }

            if (settings.hideCheck) {
                checks.hide();
            }

            insert = $('<' + settings.element + ' class="' + settings.classNorm + '" />').insertAfter(checks);

            $(checks + ':checked').next(settings.element).addClass(settings.classHigh);

            checks.on('click', function() {
                $(this).next(settings.element+'.' + settings.classNorm).toggleClass(settings.classHigh);
            });

            $(insert).on('click', function() {
                $(this).prev().trigger('click');
            });
        });

    }

})(jQuery);
