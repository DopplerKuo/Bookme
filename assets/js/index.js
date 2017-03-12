$(window).load(function() {
	$('.recommend-slide').unslider({
		speed: 300,
		nav: false
	})

	$('.instagram-btn').click(function(){
		$('#loading').addClass('show')
		$('#get_started').addClass('out')
	})

	$('.check-btn').click(function() {
		$('#recommend').addClass('check')
		$('.recommend-text').fadeOut(500)
		$('.recommend-text').css('animation-name', 'slideLeft')
	})
	$('.check-back-btn').click(function() {
		$('#recommend').removeClass('check')
	})
	// $(".inputWrapper").mousedown(function() {
 //      var button = $(this);
 //      button.addClass('clicked');
 //      setTimeout(function(){
 //          button.removeClass('clicked');
 //      },50);
 //      alert("?")
 //  });
})