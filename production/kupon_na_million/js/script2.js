var enable_animation = true;
$(document).ready(
    function() {

        $('.landing-slider-pages-item').click(
            function() {
                $('.landing-slider-pages-item').removeClass('active');
                $(this).addClass('active');
            }
        );
        $('.landing-header-slider').each(function() {
            $(this).bxSlider({
                controls: false,
                pager: false,
                auto: false,
                mode: 'fade',
            });
        });
        $('.landing-main-slider').each(function() {
            $(this).bxSlider({
                controls: true,
                pager: true,
                auto: true,
                pagerCustom: '#main-slider-pager',
                nextSelector: '#main-slider-control-next',
                prevSelector: '#main-slider-control-prev',
                nextText: '',
                prevText: '',
            });
        });
        function updateEventTimer()
        {
            var ended = 1454198400;
            var now = Math.floor(Date.now() / 1000);
            var tmp = ended - now;

            var days = Math.floor(tmp / (60 * 60 * 24));
            var tmp = tmp % (60 * 60 * 24);
            var hours = Math.floor(tmp / (60 * 60));
            var tmp = tmp % (60 * 60);
            var minutes = Math.floor(tmp / (60));
            $('.timer-time').each(function() {
                $(this).find('.timer-cell:eq(0)').html(days);
                $(this).find('.timer-cell:eq(1)').html(hours);
                $(this).find('.timer-cell:eq(2)').html(minutes);
            });

        }
        setInterval(updateEventTimer, 200);

            $('.landing-cards').css(
                {
                    'margin-top': '-' + $('.shadow').height() + 'px',
                }
            );
    }
);
$(window).resize(
    function() {
        $('.landing-cards').css(
            {
                'margin-top': '-' + $('.shadow').height() + 'px',
            }
        );

    }
);