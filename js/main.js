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

  

        $('.mobile-nav-btn').on('click',function(e) {
          e.preventDefault();
          $('nav').slideToggle('show')
        });

$('body').scrollspy({ target: '.navbar' })
     

 	// $('.album').hover(function(){ 

  //               $('this').addClass( ".album-hover" );
                
  //           });


 
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
