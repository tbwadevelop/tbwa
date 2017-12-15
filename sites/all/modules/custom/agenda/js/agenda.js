(function($) {
  Drupal.behaviors.agenda = {
    attach: function (context, settings) {
    	var count = $('.form-group .form-inline.form-wrapper.form-group').length;
    	$.post( "/crear/"+settings.agenda.nodo+"/citas", function( data ) {
			if ($(context).context) {
				if ($(context).context.id == 'agenda-records-form') {
					$('.form-item-field-container-'+count+'-uid input').val($(".view-id-usuarios_agenda_de_servicios .views-row-last .views-field-uid").text());
					$('.form-item-field-container-'+count+'-name input').val($(".view-id-usuarios_agenda_de_servicios .views-row-last .views-field-name").text());
					$('.form-item-field-container-'+count+'-codec input').val($(".view-id-usuarios_agenda_de_servicios .views-row-last .views-field-field-codigo").text());
					$('.form-item-field-container-'+count+'-email input').val($(".view-id-usuarios_agenda_de_servicios .views-row-last .views-field-mail").text()); 						
				}
		  	}
		});
    }
  };
})(jQuery);