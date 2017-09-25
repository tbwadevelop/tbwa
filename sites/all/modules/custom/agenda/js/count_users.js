(function($){
  Drupal.behaviors.agenda = {
    attach: function(context, settings) {
    $( ".full tbody tr .single-day .render-calendar-month" ).each(function( index ) {
       console.log($(this));
       var nameclass = $(this).context.className;
    });

 		if ($('.field-multiple-table tr a').length == $('.quota').text()) { 
			$( ".field-add-more-submit").remove();
		}
	     if (Drupal.settings.agenda.users == true) {
            $( ".field-add-more-submit").remove();
             $( "tr" ).last().remove( ".draggable");
       }
    }
  };
})(jQuery)