



/* Progress Plugin
================================================== */

$(function() {
	$('#progressbar').each(function(){
		var t = $(this),
			dataperc = t.attr('data-perc'),
			barperc = Math.round(dataperc);
		t.find('.bar').animate({width:barperc+'%'}, dataperc*50);
		t.find('.label').append('<div class="perc"></div>');
		
		var current = 0;
		var rate = 1;

		var counter = setInterval(function(){
			if(current >= dataperc) clearInterval(counter);

			$(".perc").text(current +'%');

			current = parseInt(current) + parseInt(rate);

		}, dataperc*25 / (dataperc / rate));		
		
		function perc() {
			var length   = t.find('.bar').css('width'),
			    labelpos = (parseInt(length));
			t.find('.label').css('left', labelpos);
		}
		perc();
		setInterval(perc, 0);
	});
});


/* Countdown Widget
================================================== */

// $(function() {
// 	launchTime = new Date(); // Set launch: [year], [month], [day], [hour]...
// 		launchTime.setDate(launchTime.getDate() + 13); // Add 13 days
// 	$("#countdown").countdown({until: launchTime, format: "odHMS"});
// });
