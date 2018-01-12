(function ($) {
	Drupal.behaviors.agenda = {
	    attach: function (context, settings) {

	    	// Page Edit user.
	    	$('.page-user-edit #block-system-main #user-profile-form #edit-locale').remove();
	    	$(".page-user-edit #user-profile-form .form-wrapper.form-group").addClass("col-lg-4 col-xs-6 col-sm-6");

	    	//class de contenedor de todas las clases
	    	$('body.not-front .main-container').removeClass("container");
	    	$('body.not-front .main-container').addClass("container-fluid");

			     	
	        // Page service taxonomia 
	    	if ( $(".page-calendario-estudiante #block-views-servicios-block-1").length ) {
				var arg = window.location.href.charAt(window.location.href.length-1);
				$( ".page-calendario-estudiante .tabs--primary li" ).each(function( index ) {
				   $(this).context.lastChild.href = $(this).context.lastChild.href.concat("/".concat(arg)); 
				});
			}

	    	$(window).load(function(){ $('#dvLoading').fadeOut(2000);});
	    	$(window).load(function(){ $('.ctools-modal-loading').fadeOut(2000);});
			$('.page-user-login #edit-name').attr('placeholder', 'Usuario');
	    	$('.page-user-login #edit-pass').attr('placeholder', 'Clave');
	        $( "#edit-submit-usuarios-agenda-de-servicios" ).click(function() {
		       $("#block-agenda-citas-ajax").css("display", "initial");
	    	});
	    	 
			$.post(document.location.href + "/request/ajax", function( data ) {
				$("#modalContent .modal-content #modal-content").each( function(item) {
					var clase = $(this).first();
					var id = clase.context.firstElementChild.id
					var clasename = clase.context.firstElementChild.className;
					$(".ctools-modal-dialog.modal-dialog").addClass(clasename +' '+id);
				});		
			});
	    }
  	};
}(jQuery));