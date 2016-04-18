$(document).ready(function() {

	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);
		return false;
	});


	$('#btn_sh').on('click', function() {
		$('.contact_form').slideToggle( "slow" );
	});
	$('#close').on('click', function() {
		$('.contact_form').slideUp( "slow" );
	});


	$('.menu_toggle_btn').on('click', function() {
		$('.menu_top').slideToggle( "slow" );
	});


			//AJAX FORM
			$("#form").submit(function() {
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: $(this).serialize()
				}).done(function() {
					$(this).find("input").val("");
					alert("Thank You!");
					$("#form").trigger("reset");
				});
				return false;
			});

		});