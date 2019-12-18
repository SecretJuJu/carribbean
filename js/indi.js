var $img = $('.cont').find('.indi .scale .IMG');
					
					$img.mouseover(function(){

						
						$(this).find('img').stop().animate({
							display: 'inline-block',
							width: '103%',
							margin:'0 1% 1% 0'
						},400)
					})
					
					$img.mouseleave(function(){
								
								$(this).find('img').stop().animate({
									display: 'inline-block',
									width: '100%',
									margin:'0'
								},100)
					})