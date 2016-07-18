$( document ).ready(function() {
    $('.js-extandable-top').on('click', function(e) {
     $(this).siblings().removeClass('active');
     $('.js-extandable-second-level').removeClass('active');
     $(this).toggleClass('active');
    });

    $('.js-extandable-second-level').on('mouseover', function(e) {
     e.stopPropagation();
        var $parent = $(this).parent();
        var $child = $($(this).find('.third-level-menu')[0]);

        $parent.css('height', 'auto');
        $child.css('height', 'auto');

     $(this).siblings().removeClass('active');
     $(this).addClass('active');

   var menuHeight = Math.max($parent.height(), $child.height());

   $parent.height(menuHeight);
   $child.height(menuHeight);

    }).on('mouseleave', function(e) {
        e.stopPropagation();
        var $parent = $(this).parent();
        var $child = $($(this).find('.third-level-menu')[0]);
        
        $parent.css('height', 'auto');
        $child.css('height', 'auto');
        $(this).removeClass('active');
    });
});