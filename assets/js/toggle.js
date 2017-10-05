
$(document).ready(function(){
	$("#bild").hide();
	$("#ljud").hide();
	$("#vid").hide();
	$("#toggleB").click(function(){
		$("#bild").slideToggle("fast");
		});
		$("#toggleL").click(function(){
		$("#ljud").slideToggle("fast");
		});
		$("#toggleV").click(function(){
		$("#vid").slideToggle("fast");
		});
});
