    $(function(){
        $('a[href^="#"]').click(function(){
         var target = $($(this).attr("href")).offset().top;
          $('body,html').animate({scrollTop:target}, 600, 'swing');
          return false;
        });
      });
