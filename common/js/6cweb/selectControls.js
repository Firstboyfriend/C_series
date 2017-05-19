
(function ($) {
    $.fn.mySelect = function (options) {
        var defaults = {
            type: 'CheckType' //类型,目前支持Organization-ju          

        };
        var objID = $(this).attr('id');
        var opts = $.extend(defaults, options);

        switch (opts.type) {
            case "":
                break;
        }


    };
})(jQuery);
