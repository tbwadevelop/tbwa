(function($) {
  Drupal.behaviors.agenda = {
    attach: function (context, settings) {
    	var count = $('.form-group .form-inline.form-wrapper.form-group').length;
    	$.post( "/crear/"+settings.agenda.nodo+"/citas", function( data ) {
			if ($(context).context) {
				if ($(context).context.id == 'agenda-records-form') {
					$('.form-item-field-container-'+count+'-field1 input').val($(".views-row-last .views-field-name").text());
					$('.form-item-field-container-'+count+'-field2 input').val($(".views-row-last .views-field-field-codigo").text());
					$('.form-item-field-container-'+count+'-field3 input').val($(".views-row-last .views-field-mail").text()); 						
				}
		  	}
		});
    }
  };
})(jQuery);