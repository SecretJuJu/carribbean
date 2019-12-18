$(document).ready(function(){
			 $(window).scroll(function(){
	   
			 var ht=$(window).height()

			 var pos=$(window).scrollTop()
	   
		
			for(var i=0;i<=4;i++){
			 if(pos>=ht*i && pos<ht*(i+1)){
			$('.nav li a').removeClass('on')
			$('.nav li').eq(i).find('a').addClass('on')
			}
			}
		})
	 })
		
		
		
		$(function(){
	
			$('.nav li a').click(function(){
				event.preventDefault();
				var target=$(this).attr('href')
				//console.log(target)
				$('html,body').stop().animate({'scrollTop':$(target).offset().top})
			})

	   $(window).scroll(function(){
	   
	     var ht=$(window).height()

		 var pos=$(window).scrollTop()
	     $('.pos').text(pos)
		 // console.log(pos)
		 if(pos<900){
			$('.nav').css({
				'position':'absolute',
				'top':'910px',				
			})
		 }
		
		 
		 
		 
		if(pos>= 900){
			$('.nav').css({
				'position':'fixed',
				'top':'200px',
			})
		}
		
		if (pos>=500){
		
			if(pos>=1000){
				if(pos>=1470){
					if(pos>=2030){
						$('.cont .nav li a').removeClass('active')
						$('.cont .nav li:nth-child(4) a').addClass('active')
						return false;
					}
					else{
						$('.cont .nav li a').removeClass('active')
						$('.cont .nav li:nth-child(3) a').addClass('active')
						return false;
					}
				}
				else{
					$('.cont .nav li a').removeClass('active')
					$('.cont .nav li:nth-child(2) a').addClass('active')
					return false;
				}
			}
		
			else{
				$('.cont .nav li a').removeClass('active')
				$('.cont .nav li:nth-child(1) a').addClass('active')
				return false;
			}
		}
		
		
		
		
		
		
		
		
		
		
		for(var i=0;i<=4;i++){
		 if(pos>=ht*i && pos<ht*(i+1)){
		  $('.nav li a').removeClass('on')
		  $('.nav li').eq(i).find('a').addClass('on')
			}
		}
	 })
	
	})