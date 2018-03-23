(function ($) {
	Drupal.behaviors.request = {
	    attach: function (context, settings) {
	    	//contenerdor de consejero home que oxupe toda la pantalla
	    	$('body.page-calendario-consejero.page-calendario-consejero-diario aside').removeClass("col-sm-3").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12");
	    	$('body.page-calendario-consejero.page-calendario-consejero-diario .row > section').removeClass("col-sm-9").addClass("col-lg-9 col-md-9 col-sm-12 col-xs-12");

	    	//contenerdor de estudiante home 
	    	$('body.page-calendario-estudiante aside').removeClass("col-sm-3").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12");
	    	$('body.page-calendario-estudiante .row > section').removeClass("col-sm-9").addClass("col-lg-9 col-md-9 col-sm-12 col-xs-12");

	    	//contenerdor de consejero home // change dimencion table
	    	$('body.page-calendario-consejero.page-calendario-consejero-diario aside').removeClass("col-sm-3");
	    	$('body.page-calendario-consejero.page-calendario-consejero-diario aside').addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12");
	    	$('body.page-calendario-consejero.page-calendario-consejero-diario .row > section').removeClass("col-sm-9");
	    	$('body.page-calendario-consejero.page-calendario-consejero-diario .row > section').addClass("col-lg-9 col-md-9 col-sm-12 col-xs-12");

	    	// //contenerdor de estudiante home 
	    	$('body.page-calendario-estudiante aside').removeClass("col-sm-3");
	    	$('body.page-calendario-estudiante aside').addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12");
	    	$('body.page-calendario-estudiante .row > section').removeClass("col-sm-9");
	    	$('body.page-calendario-estudiante .row > section').addClass("col-lg-9 col-md-9 col-sm-12 col-xs-12");

	        // Page service taxonomia (calendar estudiante) 
	    	if ( $(".page-calendario-estudiante #block-views-servicios-block-1").length ) {
	    		var tid = window.location.href.charAt(window.location.href.length-1);
				$( ".page-calendario-estudiante .tabs--primary li" ).each(function( index ) {
					var arg = window.location.pathname.split('/');

					if (arg[2].length == 7) {
						var hoy = $(".month-view .mini .today").text();
						arg[2] = arg[2].concat("-" + $.trim(hoy));
					}

					switch ($(this).context.firstChild.firstChild.data) {
						case "Mes":
							$(this).context.lastChild.href = Drupal.settings.agenda.dominio.concat("/"+arg[1]+"/"+arg[2].substr(0,7)+"/mensual/".concat(tid));
							break;
						case "Semana":
							$(this).context.lastChild.href = Drupal.settings.agenda.dominio.concat("/"+arg[1]+"/"+arg[2]+"/semanal/".concat(tid));
							break;
						case "Día":
							$(this).context.lastChild.href = Drupal.settings.agenda.dominio.concat("/"+arg[1]+"/"+arg[2]+"/diario/".concat(tid));
							break;

					}
				});
			}
	    	// Add PlaceHolder Fields Login.
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
			var url = new URL(window.location.href);
			var arg = window.location.pathname.split('/');
			// Redirect dropdown rol consejero
			$( ".view-consejero-calendar .wrapper" ).click(function() {
				var mes = $(".dropdown .active").text();
			      switch($('.view-header .dropdown .selected').text()) {
				    case 'Enero':
				    	if (mes == 'Enero' && url.searchParams.get("mini") != null) {
				    		setTimeout(function(){ window.location.href = Drupal.settings.agenda.dominio+"/"+arg[1]+"/diario?mini=2018-01"; 
				    		}, 2000);
					    }
					break;
				    case 'Febrero':
					    if (mes == 'Febrero') {
					    	window.location.href = Drupal.settings.agenda.dominio+"/"+arg[1]+"/diario?mini=2018-02";
					    }
				    break;
				    case 'Marzo':
					    if (mes == 'Marzo') {
					    	 window.location.href = Drupal.settings.agenda.dominio+"/"+arg[1]+"/diario?mini=2018-03";
					    }	 
				    break;
				    case 'Abril':
					    if (mes == 'Abril') {
					    	window.location.href = Drupal.settings.agenda.dominio+"/"+arg[1]+"/diario?mini=2018-04"; 	 
					    }
				    break;
				    case 'Mayo':
				    	if (mes == 'Mayo') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/"+arg[1]+"/diario?mini=2018-05";
				    	}
	 
				    break;				        
				    case 'Junio':
				    	if (mes == 'Junio') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/"+arg[1]+"/diario?mini=2018-06";
				    	}      
				   break;				
				    case 'Julio':
				    	if (mes == 'Julio') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/"+arg[1]+"/diario?mini=2018-07";
				    	}
	 
				    break;				
				    case 'Agosto':
				    	if (mes == 'Agosto') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/"+arg[1]+"/diario?mini=2018-08";
				    	}
	 
				    break;	
				    case 'Septiembre':
				    	if (mes == 'Septiembre') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/"+arg[1]+"/diario?mini=2018-09";
				    	}
	 
				    break;	
				    case 'Octubre':
				    	if (mes == 'Octubre') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/"+arg[1]+"/diario?mini=2018-10";
				    	}
	 
				    break;	
				    case 'Noviembre':
				    	if (mes == 'Noviembre') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/"+arg[1]+"/diario?mini=2018-11";
				    	}
	 
				    break;	
				    case 'Diciembre':
				    	if (mes == 'Diciembre') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/"+arg[1]+"/diario?mini=2018-12";
				    	}
				    break;					        
				}
			});

			// Redirect dropdown rol estudiante
			$( ".view-estudiante-calendar .wrapper" ).click(function() {
				var mes = $(".dropdown .active").text();
			      switch($('.view-header .dropdown .selected').text()) {
				    case 'Enero':
				    	if (mes == 'Enero' && url.searchParams.get("mini") != null) {
				    		setTimeout(function(){ window.location.href = Drupal.settings.agenda.dominio+window.location.pathname+"?mini=2018-01";
				    		}, 2000);
					    }
					break;
				    case 'Febrero':
					    if (mes == 'Febrero') {
					    	 window.location.href = Drupal.settings.agenda.dominio+window.location.pathname+"?mini=2018-02";
					    }
				    break;
				    case 'Marzo':
					    if (mes == 'Marzo') {
					    	 window.location.href = Drupal.settings.agenda.dominio+window.location.pathname+"?mini=2018-03";
					    }	 
				    break;
				    case 'Abril':
					    if (mes == 'Abril') {
					    	window.location.href = Drupal.settings.agenda.dominio+window.location.pathname+"?mini=2018-04";	 
					    }
				    break;
				    case 'Mayo':
				    	if (mes == 'Mayo') {
				    	    window.location.href = Drupal.settings.agenda.dominio+window.location.pathname+"?mini=2018-05";
				    	}
	 
				    break;				        
				    case 'Junio':
				    	if (mes == 'Junio') {
				    		window.location.href = Drupal.settings.agenda.dominio+window.location.pathname+"?mini=2018-06";
				    	}      
				   break;				
				    case 'Julio':
				    	if (mes == 'Julio') {
				    		window.location.href = Drupal.settings.agenda.dominio+window.location.pathname+"?mini=2018-07";
				    	}
	 
				    break;				
				    case 'Agosto':
				    	if (mes == 'Agosto') {
				    		window.location.href = Drupal.settings.agenda.dominio+window.location.pathname+"?mini=2018-08";
				    	}
	 
				    break;	
				    case 'Septiembre':
				    	if (mes == 'Septiembre') {
				    		window.location.href = Drupal.settings.agenda.dominio+window.location.pathname+"?mini=2018-09";
				    	}
	 
				    break;	
				    case 'Octubre':
				    	if (mes == 'Octubre') {
				    		window.location.href = Drupal.settings.agenda.dominio+window.location.pathname+"?mini=2018-10";
				    	}
	 
				    break;	
				    case 'Noviembre':
				    	if (mes == 'Noviembre') {
				    		window.location.href = Drupal.settings.agenda.dominio+window.location.pathname+"?mini=2018-11";
				    	}
	 
				    break;	
				    case 'Diciembre':
				    	if (mes == 'Diciembre') {
				    		window.location.href = Drupal.settings.agenda.dominio+window.location.pathname+"?mini=2018-12";
				    	}
				    break;					        
				}
		});
	    // Loader Animation.	
		$(window).load(function(){
		    $('.loader').fadeOut(500);
		});
		// Add User and Rold to Date(Today). 
		
		if ($(".cotainer-name-user ").length == false) {
		 	$('<h2 class="cotainer-name-user"> '+$('.views-field-name .field-content').text()+'</h2>').appendTo('#block-system-main .view .clearfix.date-nav-wrapper');
		}

		// Add Year to Month Calendar (Consejero)
		$( ".page-calendario-consejero .date-views-pager h3 a" ).attr( "src", function() {
			console.log("entra consejero");
			var params = $(this).context.href.split("-");
		 	var arg = params[1].split("/");
		 	console.log(arg);
		 	$('.page-calendario-consejero .date-views-pager h3 a').text($( ".page-calendario-consejero .date-views-pager h3 a" ).text() + ' '+ arg[2]);
		});

		// Add Year to Month Calendar (Estudiante)
		$( ".page-calendario-estudiante .date-views-pager h3 a" ).attr( "src", function() {
			var params = $(this).context.href.split("-");
			var arg = params[3].split("/");
			if (arg[2]) {
			 	$('.page-calendario-estudiante .date-views-pager h3 a').text($( ".page-calendario-estudiante .date-views-pager h3 a" ).text() + ' '+ arg[2]);
			}else{
				var monthm = $(".view-display-id-page_4 .view-header .date-views-pager h3").text().split(" ");
				$('.page-calendario-estudiante .date-views-pager h3 a').text($( ".page-calendario-estudiante .date-views-pager h3 a" ).text() + ' '+ monthm[1]);
			}
		});
		// Add link to days for block calendar (Consejero)
     	$('.page-calendario-consejero .mini tr').each(function(){
     		$(this).find('td').each(function(){
     			var res = $(this).context.id.split("-");
     			$(this).context.innerHTML = '<div class="month mini-day-on"> <a href="'+Drupal.settings.agenda.dominio+'/calendario-consejero/diario/'+res[1]+'-'+res[2]+'-'+res[3]+'/'+res[3]+'">'+$(this).context.innerText+'</a></div>';
		     })
		 })
		// Add link to days for block calendar (Estudiante)
     	$('.page-calendario-estudiante .mini tr').each(function(){
     		$(this).find('td').each(function(){
     		  var res = $(this).context.id.split("-");
     		  var tid = document.location.href.substring(document.location.href.lastIndexOf('/') + 1);
     		  $(this).context.innerHTML = '<div class="month mini-day-on"> <a href="'+Drupal.settings.agenda.dominio+'/calendario-estudiante/'+res[1]+'-'+res[2]+'-'+res[3]+'/diario/'+tid+'">'+$(this).context.innerText+'</a></div>';
		     })
		 })
     		 // Add default month in select dropdrown Select Month.	
			 $(document).ready(function(){
			 	var month_now = $(".view-header .date-nav-wrapper h3 a").text();
			 	$('.view-header .dropdown .selected').text(month_now);
			 });
		}
  	};
}(jQuery));
function goBack() {
  return window.history.back();
}



