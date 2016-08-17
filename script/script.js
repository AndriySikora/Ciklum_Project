$( document ).ready(function() {
    $('.js-extandable-top').on('click', function() {
        $(this).siblings().removeClass('active');
        $('.js-extandable-second-level').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.js-extandable-second-level').on('mouseover', function() {
        var itemHeight = {'height': 'auto'};
        var $parent = $(this).parent().css(itemHeight);
        var $child = $($(this).find('.third-level-menu')[0]).css(itemHeight);
        var menuHeight = Math.max($parent.height(), $child.height());

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $parent.height(menuHeight);
        $child.height(menuHeight);

    }).on('mouseleave', function() {
        $(this).removeClass('active');
    });
});