 $(document).ready(function(){





 	

 	$('.art1').click(function(){ 

                $('.vid').slideToggle( "fast" );

            });
    
 	$('.art2').click(function(){ 

                $('.vid-a').slideToggle( "fast" );
            });

    $('.button').click(function(){ 

                $('.vid-b').slideToggle( "fast" );
            });

       $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        console.log('working')
    });
  

        $('.mobile-nav-btn').on('click',function(e) {
          e.preventDefault();
          $('nav').slideToggle('show')

        });


 




     
 
 	// fixed header 
 	var stickyOffset = $('header').offset().top;

 	$(window).scroll(function(){
		  var sticky = $('header'),
		      scroll = $(window).scrollTop();

		  if (scroll >= stickyOffset) sticky.addClass('fixed');
		  else sticky.removeClass('fixed');

		});
 	// fixed header end
 

 });
