(function ($) {
  Drupal.behaviors.agenda = {
    attach: function (context, settings) {
    	$('.page-user-login #edit-name').attr('placeholder', 'Usuario');
    	$('.page-user-login #edit-pass').attr('placeholder', 'Clave');
        $( "#edit-submit-usuarios-agenda-de-servicios" ).click(function() {
		$("#block-agenda-citas-ajax").css("display", "initial");
		});
    }
  };
}(jQuery));