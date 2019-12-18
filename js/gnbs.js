$('.header .part3 .gnbs .Gnb_menu>div div').mouseover(function(){
								$(this).parents().find('.Gnb_menu>div ul').css('display','block')
								$(this).parents().find('.BG').css('display','block')
							})
								
							$('.header .part3 .gnbs').mouseleave(function(){
								$(this).parents().find('.Gnb_menu>div ul').css('display','none')
								$(this).parents().find('.BG').css('display','none')
							})