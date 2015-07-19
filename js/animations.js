$(document).ready(function() {
	'use strict';
	$('#name').text('Tami Wohlers');
	$('.button').hide();
	$('#char-count').hide();
	$('.tweet-compose').focus(function() {
		var count = 140;
		$(this).height($(this).height() * 2);
		$('button').show();
		$('#char-count').show();


	});
	var maxCount = 140;
	var count = $('#char-count').text();
	$('.tweet-compose').bind('input propertychange', function(){
		var len = $(this).val().length;
		count = maxCount - len;
		console.log('At top');
		$('#char-count').text(count);
		if (count<= 10) {
			$('#char-count').css("color", "red");
			if(count >= 0){
				$('#tweet-submit').removeAttr('disabled');
			}else{$('#tweet-submit').attr('disabled', true);}

		}
	});
	


	$('.button').on('click', function() {
		console.log('button clicked');
		var tweetContent = $('.tweet:first').clone();
		var textTweet = $('.tweet-compose').val();
		var textName = $('.name').text();
		var textUserName = $('.username:first').text();
		var imgTweet = $('#myImage').attr('src');
		tweetContent.find('.username').text(textUserName);
	    tweetContent.find('.tweet-text').text(textTweet);
	    tweetContent.find('.fullname').text(textName);
	    tweetContent.find('.avatar:first').attr('src', imgTweet);
		$('.tweet').prepend(tweetContent);
    });
      
    

//  });
// $('.tweet-actions').hide();
// $('.stats').hide();
// $('.tweet').on('mouseenter', function() {
//   $(this).find('.tweet-actions').show();
//   $(this).find('.stats').show();
// });

// $('.tweet').on('mouseleave', function(){
// 	$(this).find('.tweet-actions').hide();
// 	$('.stats').hide(); 
// });
 
 });



    

