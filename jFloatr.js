(function ($) {
    $.fn.jFloatr = function () {
    	var $window           = $(window),
    		windowHeight      = $window.height(),
    		floatingClass     = 'floating',
            pinnedBottomClass = 'pinned-bottom';
            
        return this.each(function () {
            var $this         = $(this),
                $parent       = $this.offsetParent(),
                objectHeight  = $this.outerHeight(true),
                parentHeight  = $parent.outerHeight(),
                top           = $this.offset().top - parseFloat($this.css('marginTop').replace(/auto/, 0)),
                bottom        = $parent.offset().top + parentHeight - objectHeight;
                
				$window.bind('scroll resize',function () {
					var windowTop = $window.scrollTop();
					
					if (windowHeight > objectHeight) {
						if (parentHeight > objectHeight) {

							if (windowTop > top) {
								$this.addClass(floatingClass);
								if (windowTop > bottom) {
									$this.removeClass(floatingClass).addClass(pinnedBottomClass);
								} else {
									$this.removeClass(pinnedBottomClass);
								}
							} else {
								$this.removeClass(floatingClass);
							}
						}
					}
				});
        });
    };
})(jQuery);