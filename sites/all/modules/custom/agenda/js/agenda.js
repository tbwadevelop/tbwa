(function($) {
  Drupal.behaviors.agenda = {
    attach: function (context, settings) {
    	var count = $( ".btn.btn-default.form-submit.icon-before" ).length;
		$.post( "/crear/"+settings.agenda.nodo+"/citas", function( data ) {
			if ($(context).context) {
				if ($(context).context.id == 'agenda-form-records') {
					$('.form-item-participants-'+count+'-name input').val($(".views-row-last .views-field-name").text());
					$('.form-item-participants-'+count+'-codec input').val($(".views-row-last .views-field-field-codigo").text());
					$('.form-item-participants-'+count+'-user input').val($(".views-row-last .views-field-mail").text()); 						
				}
		  	}
		});
    }
  };
})(jQuery);