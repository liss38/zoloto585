jQuery(document).ready(function ($) {

    function nextSlide(){
        
        var slideCount= $('#imgBlock1 .product1').size();

        if(++i>slideCount)
        {
            i=1;   
        }
        $('#imgBlock1 .product1').hide();
        $('#imgBlock1 .product1:nth-child(' + i + ')').show();
    }
    function nextSlide2(){
        
        var slideCount= $('#imgBlock2 .product1').size();

        if(++y>slideCount)
        {
            y=1;   
        }
        $('#imgBlock2 .product1').hide();
        $('#imgBlock2 .product1:nth-child(' + y + ')').show();
    }
    function nextSlide3(){
        
        var slideCount= $('#imgBlock3 .product1').size();

        if(++z>slideCount)
        {
            z=1;   
        }
        $('#imgBlock3 .product1').hide();
        $('#imgBlock3 .product1:nth-child(' + z + ')').show();
    }

    function nextSlideBig1(){
        
        var slideCount= $('#imgBlockBig1 > a').size();

        if(++iB>slideCount)
        {
            iB=1;   
        }
        $('#imgBlockBig1 a').hide();
        $('#imgBlockBig1 a:nth-child(' + iB + ')').show();
    }

    function nextSlideBig2(){
        
        var slideCount= $('#imgBlockBig2 > a').size();

        if(++yB>slideCount)
        {
            yB=1;   
        }
        $('#imgBlockBig2 a').hide();
        $('#imgBlockBig2 a:nth-child(' + yB + ')').show();
    }

    function nextSlideBig3(){
        
        var slideCount= $('#imgBlockBig3 > a').size();

        if(++zB>slideCount)
        {
            zB=1;   
        }
        $('#imgBlockBig3 a').hide();
        $('#imgBlockBig3 a:nth-child(' + zB + ')').show();
    }

    var i = 1;
    var iB = 1;
    var y = 1;
    var yB = 1;
    var z = 1;
    var zB = 1;


    function start(){
        interval = setInterval(function(){nextSlide();},5000); 
        return false;
    }
    function start2(){
        interval2 = setInterval(function(){nextSlide2();},5000); 
        return false;
    }
    function start3(){
        interval3 = setInterval(function(){nextSlide3();},5000); 
        return false;
    }
    function startB1(){
        intervalB1 = setInterval(function(){nextSlideBig1();},5000); 
        return false;
    }
    function startB2(){
        intervalB2 = setInterval(function(){nextSlideBig2();},5000); 
        return false;
    }
     function startB3(){
        intervalB3 = setInterval(function(){nextSlideBig3();},5000); 
        return false;
    }
    function pause(){
      clearInterval(interval); 
      return false;
    }
    function pause2(){
      clearInterval(interval2); 
      return false;
    }
    function pause3(){
      clearInterval(interval3); 
      return false;
    }
    function pauseB1(){
      clearInterval(intervalB1); 
      return false;
    }
    function pauseB2(){
      clearInterval(intervalB2); 
      return false;
    }
    function pauseB3(){
      clearInterval(intervalB3); 
      return false;
    }

    $(document).on('ready',function(){
        start();
        start2();
        start3();
        startB1();
        startB2();
        startB3();
    });
    $('#imgBlock1').mouseenter(function(){
        pauseB1();
        pause();
    }); 
    $('#imgBlock1').mouseleave(function(){
        startB1();
        start();
    }); 
    $('#imgBlock2').mouseenter(function(){
        pauseB2();
        pause2();
    }); 
    $('#imgBlock2').mouseleave(function(){
        startB2();
        start2();
    }); 
    $('#imgBlock3').mouseenter(function(){
        pauseB3();
        pause3();
    }); 
    $('#imgBlock3').mouseleave(function(){
        startB3();
        start3();
    });
    $('#imgBlockBig1').mouseenter(function(){
        pauseB1();
        pause();
    }); 
    $('#imgBlockBig1').mouseleave(function(){
        startB1();
        start();
    });
    $('#imgBlockBig2').mouseenter(function(){
        pauseB2();
        pause2();
    }); 
    $('#imgBlockBig2').mouseleave(function(){
        startB2();
        start2();
    }); 
    $('#imgBlockBig3').mouseenter(function(){
        pauseB3();
        pause3();
    }); 
    $('#imgBlockBig3').mouseleave(function(){
        startB3();
        start3();
    }); 
////////////////
   

    $('#sidebar .katalog-li').mouseenter(function(event) {
        if ($(window).width() >= 1000)
        {
            $('#sidebar .katalog-main .level1 li:first-child').addClass('act');
        } 
    });

    $('#sidebar .katalog-li').mouseleave(function(event) {
        if ($(window).width() >= 1000)
        {
            $('#sidebar .katalog-li .level1 > li').removeClass('act');
        }  
    });
    $(document).on('mouseenter', '#sidebar .katalog-li', function() {
        if ($(window).width() >= 1000)
        {
            var level1H= $(this).find('.level2').outerHeight();
            $(this).find('.level1').outerHeight(level1H +2);
            $(this).find('.level2 .col').outerHeight(level1H);
        }
    });
    $(document).on('mouseenter', '#sidebar .katalog-main .level1 > li', function() {
        if ($(window).width() >= 1000)
        {
            $('#sidebar .katalog-main .level1 li').removeClass('act');
            $(this).addClass('act');
        }      
    });

    /// Коллекции
    $(document).on('mouseenter', '#sidebar .collection-li', function() {
        var level1H= $(this).find('.level2').outerHeight();
        $(this).find('.level1').outerHeight(level1H +2);
        $(this).find('.level2 .col').outerHeight(level1H);
        $('#sidebar .katalog-main .level1 li:first-child').addClass('act');
    });
    $(document).on('mouseleave','#sidebar .collection-li', function() {
        $('#sidebar .katalog-main .level1 li').removeClass('act');
        $('.level1').removeAttr("style");
        $('.katalog-main .level2 .col').removeAttr("style");
    });

    ////////////

    $('#sidebar .katalog-li').mouseenter(function(event) {
        if ($(window).width() <= 999)
        {
            $('#sidebar .katalog-li .level1 > li').removeClass('act');
            $('.katalog-li .katalog-main').removeAttr('style');
        } 
    });
    $(document).on('click', '#sidebar .katalog-main .level1 > li > a', function() {
        if ($(window).width() <= 999)
        {
            $(this).parent().toggleClass('act');
            console.log($(this).parent());
            return false;
        } 
    });

    

    $(document).on('click', '#sidebar-toggle', function(){
            $('#sidebar .katalog-main .level1 li').removeClass('act');
            if($(this).hasClass('open'))
            {
                $(this).removeClass('open');
                $('.katalog-li .katalog-main').hide(); 
            }
            else
            {
                $(this).addClass('open');
                $('.katalog-li .katalog-main').show(); 
            }
            return false; 
    });

///////////////
    //Fix z-index youtube video embedding
    $('iframe').each(function(){
        var url = $(this).attr("src");
        $(this).attr("src",url+"?rel=0&wmode=transparent&modestbranding=1&showinfo=0&controls=0&fs=0");
    });

    $('.select').fancySelect({
        forceiOS: true
    });

    
            $('#main-sl').owlCarousel({
                navigation : true,
                slideSpeed : 300,
                paginationSpeed : 400,
                singleItem:true,
                autoHeight : true,
                addClassActive : true,
                autoPlay : true,
                afterInit : function(elem){
                    $('iframe').each(function(){
                        var url = $(this).attr("src");
                        $(this).attr("src",url+"?wmode=transparent&modestbranding=1&showinfo=0&controls=0&fs=0&rel=0");
                    });


                    $('#main-sl .owl-item iframe').each(function(){
                        var url = $(this).attr("src");
                        $(this).attr("src",url+"&autoplay=0");
                    });

                    $('#main-sl .owl-item.active iframe').each(function(){
                        var url = $(this).attr("src");
                        var play = "&autoplay=1";
                        var stop = "&autoplay=0";
                        var urlNew = url.replace(stop, play);
                        $(this).attr("src",urlNew);
                    });

                },
                afterMove : function(elem){
                    var play = "&autoplay=1";
                    var stop = "&autoplay=0";
                    $('#main-sl .owl-item iframe').each(function(){
                        var url = $(this).attr("src");
                        var urlNew = url.replace(play, stop);
                        $(this).attr("src",urlNew);
                    });
                    $('#main-sl .owl-item.active iframe').each(function(){
                        var url = $(this).attr("src");
                        var urlNew = url.replace(stop, play);
                        $(this).attr("src",urlNew);
                    });
                    $(window).on("scroll", function() {
                        if ($(window).scrollTop() > $('.main-filter').offset().top)
                        {
                            $('#main-sl .owl-item iframe').each(function(){
                                var url = $(this).attr("src");
                                var urlNew = url.replace(play, stop);
                                $(this).attr("src",urlNew);
                            });
                        }
                    });
                }
            });

        $("#main-sl2").owlCarousel({
            navigation : true,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            autoHeight : true,
            addClassActive : true,
            afterInit : function(elem){
                $('#main-sl2 .owl-item iframe').each(function(){
                    var url = $(this).attr("src");
                    $(this).attr("src",url+"&autoplay=0");
                });
            },
            afterMove : function(elem){
                $('#main-sl2 .owl-item iframe').each(function(){
                    var url = $(this).attr("src");
                    var play = "&autoplay=1";
                    var stop = "&autoplay=0";
                    var urlNew = url.replace(play, stop);
                    $(this).attr("src",urlNew);
                });
                $('#main-sl2 .owl-item.active iframe').each(function(){
                    var url = $(this).attr("src");
                    var play = "&autoplay=1";
                    var stop = "&autoplay=0";
                    var urlNew = url.replace(stop, play);
                    $(this).attr("src",urlNew);
                });
            }
        });



    function play()
    {
        $('#main-sl2 .owl-item.active iframe').each(function(){
            var url = $(this).attr("src");
            var play = "&autoplay=1";
            var stop = "&autoplay=0";
            var urlNew = url.replace(stop, play);
            $(this).attr("src",urlNew);
        });
    };
    function stop()
    {
        $('#main-sl2 .owl-item iframe').each(function(){
            var url = $(this).attr("src");
            var play = "&autoplay=1";
            var stop = "&autoplay=0";
            var urlNew = url.replace(play, stop);
            $(this).attr("src",urlNew);
        });
    };
    $(window).on("scroll", function() {
        if($('#main-sl2').length) {
            if ($(window).scrollTop() >= $('#main-sl2').offset().top && !$('#main-sl2').hasClass("active"))
            {
                $('#main-sl2').addClass('active'); 
                play();
            }
            else if($(window).scrollTop() >= $('#main-sl2').offset().top + $('#main-sl2').height())
                stop();
            else if($(window).scrollTop() <= $('#main-sl2').offset().top - $(window).height())
                stop();
        }
    }); 
        
    $("#main-sl3").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });



    $('.basket-inner ul').jScrollPane();

    $('.footer-accordions .item .item-inner > span').click(function() {
         $(this).parent().toggleClass('act');
         return false;
    });

    $('a.next-a').click(function(){
        var el = $(this).attr('href');
        $('body').animate({scrollTop: $(el).offset().top}, 500);
        return false;
    });

    $('.question-popup').magnificPopup({
            type: 'inline',
            preloader: false,
            modal: false,
            focus: false
    }); 
    
    function product2()
    {
        $(".product.four .product1 .product").unwrap();
        var element = $('.product.four .row .product'), startIndex = 0, resultArr = [];

        while(startIndex < element.length){
            resultArr.push(element.slice(startIndex, startIndex  + 2));
            (element.slice(startIndex, startIndex  + 2)).wrapAll("<div class='product1'></div>");
            startIndex += 2;
        }
    };
    function product4()
    {
        $(".product.four .product1 .product").unwrap();
        var element = $('.product.four .row .product'), startIndex = 0, resultArr = [];

        while(startIndex < element.length){
            resultArr.push(element.slice(startIndex, startIndex  + 4));
            (element.slice(startIndex, startIndex  + 4)).wrapAll("<div class='product1'></div>");
            startIndex += 4;
        }
    };


    if ($(window).width() <= '619')
    {
        product2();
    }else{
        product4();
    }
    $( window ).resize(function() {
      if ($(window).width() <= '619')
        {
            product2();
        }else{
            product4();
        }
    });
    
});