$(function() {
	$(".btn-entrar , .btn-cadastra-se").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");
    $(this).removeClass("idle").addClass("active");
	});
});

// desativando a tecla tab do campo password pois enfrentava problema
$(function(){
		$(".no-tab").on("keydown", function (e) {
			 // use which ou charCode ou e.keyCode, dependendo do navegador
				var key = e.which || e.charCode || e.keyCode;
				// 9 é o caracter Unicode da tecla TAB
				if (key === 9) {
						if (e.preventDefault) {
								e.preventDefault();
						}
						return false;
				}
		});
});
