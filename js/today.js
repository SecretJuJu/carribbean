
							var today = new Date();
							var dd = today.getDate();
							var mm = today.getMonth()+1; //January is 0!
							var yyyy = today.getFullYear();
							var week = new Array('일', '월', '화', '수', '목', '금', '토');
							var today = new Date().getDay();
							var todayLabel = week[today];

							if(dd<10) {
								dd='0'+dd
							} 

							if(mm<10) {
								mm='0'+mm
							} 

							today = mm+"월 "+dd+'일('+todayLabel+')';
							console.log(today);
							document.getElementById("Today").innerHTML = today;
							