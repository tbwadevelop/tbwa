(function ($) {
	Drupal.behaviors.request = {
	    attach: function (context, settings) {
	    	
	    	//contenerdor de consejero home (filtro dia )// change dimencion table
	    	$('body.sidebar-first.page-calendario-consejero aside').removeClass("col-sm-3").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12");
	    	$('body.sidebar-first.page-calendario-consejero .row > section').removeClass("col-sm-9").addClass("col-lg-9 col-md-9 col-sm-12 col-xs-12");

	    	//contenerdor de estudiante home 
	    	$('body.page-calendario-estudiante aside').removeClass("col-sm-3").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12");
	    	$('body.page-calendario-estudiante .row > section').removeClass("col-sm-9").addClass("col-lg-9 col-md-9 col-sm-12 col-xs-12");

	    	// add class user student menu my data
	    	$(".page-user-edit #user-profile-form .form-wrapper.form-group").addClass("col-lg-4 col-xs-6 col-sm-6");

	    	// Danilo Inicio
		    //Tamaño de cajas móvil consejero calendario y button crear disponibilidad 
			$(window).ready(function() {
				closeBurger();
				modalDisponibilidad();
			    checkSize();
			    $(window).resize(checkSize);
			    
			});
			function checkSize() {
				if ($(window).width() <= 991) {
					var uno = $("body div div aside div #block-views-consejero-calendar-block-1 div div.view-content div.calendar-calendar div.month-view").width();
					$("body div div.row aside.col-lg-3.col-md-3.col-sm-12.col-xs-12 div.region-sidebar-first section.crear_disponibilidad").width(uno + 15);
				}
			}
		

			function closeBurger() { 
				if ($(window).width() <= 991) {
					$("body .main-container .row aside .well section:nth-child(1) nav").prepend("<div class='cerrar_modal text-right'><button type='button' id='cerrar'>x</button></div>");
					// $("body .main-container .row aside .well section:nth-child(1) nav, body .main-container .row aside .well section:nth-child(1) .view-content .month-view, #block-agenda-modals").hide();
					$("button#cbox2").click(function(e) {
						//movimiento deslizante
						$("body .main-container .row aside .well section:nth-child(1) nav, body .main-container .row aside .well section:nth-child(1) .month-view, #block-agenda-modals").slideToggle("slow", function() {
							$("body .main-container .row aside .well section:nth-child(1) nav, body .main-container .row aside .well section:nth-child(1) .view-content .month-view, #block-agenda-modals").show();		
							//next
							// $("body .main-container .row aside .well section:nth-child(1) nav li.next a span ").click(function() {
							// 	e.preventDefault();
							// });
						});
					});

					//button close
					$("button#cerrar").click(function() {
						$("body .main-container .row aside .well section:nth-child(1) nav, body .main-container .row aside .well section:nth-child(1) .month-view, #block-agenda-modals").hide();
					});
				}
			}

			function modalDisponibilidad () {
				if ($(window).width() <= 991) {
					$("div#magical-modal-link a").click(function(event) {
						 var al = $( window ).height();
		    			// var an = $( window ).width();
		      			// $("").css('display','none');
		      			// $('body #modalContent').dialog({ height: 200 });
		      			$("body #modalContent").modal("hide");
		      			$(document).off(".r.modal.data-api");
					});
					
	      		}
			}
			//Crear Citas cambiar orden 
			$('body.page-crear-citas section#block-agenda-citas-ajax form#agenda-records-form div div#js-ajax-elements-wrapper').prependTo('body.page-crear-citas section#block-agenda-citas-ajax form#agenda-records-form');
			//Danilo Fin.
			var hoy = $(".month-view .mini .today").text().trim();
		    // Page service taxonomia (calendar estudiante) 
	    	if ($(".page-calendario-estudiante #block-views-servicios-block-1").length) {
	    		var tid = window.location.href.charAt(window.location.href.length-1);
				$( ".page-calendario-estudiante .tabs--primary li" ).each(function( index ) {
					var arg = window.location.pathname.split('/');

				    if (arg[2].length == 7) {
						var hoy = $(".month-view .mini .today").text();
						arg[2] = arg[2].concat("-" + $.trim(hoy));
					}					

					switch ($(this).context.firstChild.firstChild.data) {
						case "Mes":
						if (arg[3].length <= 7) {
								$(this).context.lastChild.href = Drupal.settings.agenda.dominio+"/calendario-estudiante/"+arg[3]+'-'+hoy+"/mensual/"+tid;
							}else {
								$(this).context.lastChild.href = Drupal.settings.agenda.dominio+"/calendario-estudiante/"+arg[3].substring(0,7)+"/mensual/"+tid;
							}
							break;
						case "Semana":
						if (arg[3].length <= 7) {
							$(this).context.lastChild.href = Drupal.settings.agenda.dominio+"/calendario-estudiante/"+arg[3]+'-'+hoy+"/semanal/"+tid;
						}else{
							$(this).context.lastChild.href = Drupal.settings.agenda.dominio+"/calendario-estudiante/"+arg[3]+"/semanal/"+tid;
						}
							break;
						case "Día":
							if (arg[3].length <= 7) {
								$(this).context.lastChild.href = Drupal.settings.agenda.dominio+"/calendario-estudiante/"+arg[3]+'-'+hoy+"/diario/"+tid;
							}else{
								$(this).context.lastChild.href = Drupal.settings.agenda.dominio+"/calendario-estudiante/"+arg[3]+"/diario/"+tid;
							}
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
				    	if (mes == 'Enero') {
				    		setTimeout(function(){ window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario/2018-01-01"; 
				    		}, 1000);
					    }
					break;
				    case 'Febrero':
					    if (mes == 'Febrero') {
					    	window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario/2018-02-01";
					    }
				    break;
				    case 'Marzo':
					    if (mes == 'Marzo') {
					    	 window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario/2018-03-01";
					    }	 
				    break;
				    case 'Abril':
					    if (mes == 'Abril') {
					    	window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario/2018-04-01"; 	 
					    }
				    break;
				    case 'Mayo':
				    	if (mes == 'Mayo') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario/2018-05-01";
				    	}
	 
				    break;				        
				    case 'Junio':
				    	if (mes == 'Junio') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario/2018-06-01";
				    	}      
				   break;				
				    case 'Julio':
				    	if (mes == 'Julio') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario/2018-07-01";
				    	}
	 
				    break;				
				    case 'Agosto':
				    	if (mes == 'Agosto') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario/2018-08-01";
				    	}
	 
				    break;	
				    case 'Septiembre':
				    	if (mes == 'Septiembre') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario/2018-09-01";
				    	}
	 
				    break;	
				    case 'Octubre':
				    	if (mes == 'Octubre') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario/2018-10-01";
				    	}
	 
				    break;	
				    case 'Noviembre':
				    	if (mes == 'Noviembre') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario/2018-11-01";
				    	}
	 
				    break;	
				    case 'Diciembre':
				    	if (mes == 'Diciembre') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario/2018-12-01";
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
		 	 $('<h2 class="cotainer-name-user"> '+$('.view-user-login .views-field-name .field-content').text()+'</h2>').appendTo('#block-system-main .view .clearfix.date-nav-wrapper');
		}

		// Add Year to Month Calendar (Consejero)
		$( ".date-nav-wrapper h3 a" ).attr( "src", function() {
			var params = $(this).context.href.split("-");
		 	var arg = params[1].split("/");
		 	
		 	if ($( ".page-calendario-consejero .clearfix.date-nav-wrapper h3 a" ).text().split(' ').length <2) {
		 		$('.page-calendario-consejero .clearfix.date-nav-wrapper h3 a').text($( ".page-calendario-consejero .clearfix.date-nav-wrapper h3 a" ).text() + ' '+ arg[2]);
		 	}

		});

		// Add Year to Month Calendar (Estudiante)
		$( ".page-calendario-estudiante .date-nav-wrapper h3 a" ).attr( "src", function() {
			var params = $(this).context.href.split("-");
			var arg = params[3].split("/"); var mes = params[2].split("/");
			if (mes[1] != 'mensual') {
				if ($( ".page-calendario-estudiante .date-nav-wrapper h3 a").text().split(' ').length <2) {
				 	$('.page-calendario-estudiante .date-nav-wrapper h3 a').text($( ".page-calendario-estudiante .date-nav-wrapper h3 a" ).text() + ' '+ arg[2]);
				}		
			}
			if (mes[1] == 'mensual') {
				if ($( ".page-calendario-estudiante .date-nav-wrapper h3 a").text().split(' ').length <2) { 
				 	$('.page-calendario-estudiante .date-nav-wrapper h3 a').text($( ".page-calendario-estudiante .date-nav-wrapper h3 a" ).text() + ' ' + mes[2]);
				}			
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
			 	var result = $(".view-header .date-nav-wrapper h3 a").text().split(' ');
			 	$('.view-header .dropdown .selected').text(result[0]);
			 });
		}
  	};
}(jQuery));
function goBack() {
  return window.history.back();
}
