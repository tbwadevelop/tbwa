(function ($) {
  Drupal.behaviors.agenda = {
    attach: function (context, settings) {
        $( "#edit-submit-usuarios-agenda-de-servicios" ).click(function() {
		  $("#block-agenda-citas-ajax").css("display", "initial");
		});
		if ( $("#participants .form-wrapper.form-group").length > 0 ) {
			$('.form-item-participants-1-name input').val($(".views-row-last .views-field-name").text());
			$('.form-item-participants-1-codec input').val($(".views-row-last .views-field-field-codigo").text());
			$('.form-item-participants-1-user input').val($(".views-row-last .views-field-mail").text());
		}       
    }
  };
}(jQuery));