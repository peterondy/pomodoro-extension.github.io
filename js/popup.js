$(document).ready(function(){//start jquery script

		var sec = 25 * 60;//the time of counting in seconds 25 minutes * 60 seconds
		
		$("#start").on("click",function (){//on click to start button ==> start counting
		
		var timer = setInterval(function() {//set interval it's function to run for each second
		   
		   var minute = (sec - (sec % 60)) / 60;
		   var second = sec % 60;
		   $('#timer').text(minute);
		   $('#timer1').text(second);
		   $('#seconds').text(sec--);//show the counter each one on the timr div
		   
		   if (sec == -1) {//this is the ending condition to end the counting
		      
		      clearInterval(timer);//to clear the interval 
		   
		   }
		   
		  if($('#timer').text() == 0){//if the timer div == 0
	  		
				alert("The counter are ended");		//show alert
		   	
		   	location.reload();//reload the page

		   };
		
		}, 1000);

	});
		
		$("#end").on("click", function(){//this script is when the user click to end button
			
			sec = 0;//change the sec variable to 0
		
		});

	});