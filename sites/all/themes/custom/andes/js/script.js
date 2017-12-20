(function ($) {
	Drupal.behaviors.agenda = {
	    attach: function (context, settings) {
	    	$(window).load(function(){ $('#dvLoading').fadeOut(2000);});
	    	$(window).load(function(){ $('.ctools-modal-loading').fadeOut(2000);});
			$('.page-user-login #edit-name').attr('placeholder', 'Usuario');
	    	$('.page-user-login #edit-pass').attr('placeholder', 'Clave');
	        $( "#edit-submit-usuarios-agenda-de-servicios" ).click(function() {
		       $("#block-agenda-citas-ajax").css("display", "initial");
	    	});
	    	 
			$.post(document.location.origin + "/request/ajax", function( data ) {
				$("#modalContent .modal-content #modal-content").each( function(item) {
					var clase = $(this).first();
					var clasename = clase.context.firstElementChild.className;
					$(".ctools-modal-dialog.modal-dialog").addClass(clasename);
				});		
			});
	    
	    }
  	};
}(jQuery));