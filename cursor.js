var $cursor = $('.cursor');

      function moveCursor(e) {
        $cursor.addClass('is-moving');

        TweenLite.to($cursor, 1, {
          left: e.pageX,
          top: e.pageY,
          ease: Power4.easeOut
        });

        clearTimeout(timer);

        var timer = setTimeout(function() {
          $cursor.removeClass('is-moving');
        }, 300);
      }

      $(window).on('mousemove', moveCursor);
