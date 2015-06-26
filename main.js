// $(document).on('ready', function() {
  
// });

$(function(){


$('.textbox').on('click',function(){
	
	$(this).find('.profile-para').css('display','none');
	$(this).append('<textarea></textarea>');
	
	var textOriginal = $(this).find('.profile-para').text();
	var textWidth = $('.profile-para').width();
	var textHeight = $('.profile-para').height();
	
	$(this).find('textarea').val(textOriginal).width(textWidth).height(textHeight);

	});

	
});