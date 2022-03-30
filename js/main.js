$(document).ready(function(){
	
	$(".piya").waypoint(function(dicration){
		
		if (dicration == "down"){
		
				$("nav").addClass("sticky");
		} else {
			
			$("nav").removeClass ("sticky");
		}
		
		
		
		
	});
	
	
	
	
	
});