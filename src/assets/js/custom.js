

// JavaScript Document

$('#subscribeform').submit(function(){



	var action = $(this).attr('action');



		$("#mesaj").slideUp(750,function() {







		$('#mesaj').hide();



	$('#subsubmit')







			.after('')







			.attr('disabled','disabled');



	$.post(action, {







			email: $('#subemail').val()







		},







			function(data){







				document.getElementById('mesaj').innerHTML = data;







				$('#mesaj').slideDown('slow');







				$('#subscribeform img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});







				$('#subsubmit').removeAttr('disabled');







				if(data.match('success') != null) $('#subscribeform').slideUp('slow');



			}







		);







		});







		return false;







	});

	$('body').on('click', '.reply', function(ev){
		ev.preventDefault();
		// If form is folded and shows a previous success message, reset status form
		let $replyForm = $('#commentForm');
		let $message = $('#message');

		if( $replyForm.is(':hidden') ){
			$replyForm.find('#name, #email, #url, #comments').val('');
			$message.slideUp('slow', function(){
				$message.html(null);
			})
			$replyForm.slideDown('slow');
		};

		$('html').animate({
			scrollTop: $('#reply-form-wrapper').offset().top
		}, 1000, 'swing');
	});