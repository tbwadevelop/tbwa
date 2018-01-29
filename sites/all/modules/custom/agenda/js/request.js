(function ($) {
	Drupal.behaviors.request = {
	    attach: function (context, settings) {
		var url = new URL(window.location.href);
		$( ".view-consejero-calendar .wrapper" ).click(function() {
			var mes = $(".dropdown .active").text();
			switch($('.view-header .dropdown .selected').text()) {
				    case 'Enero':
				    	if (mes == 'Enero' && url.searchParams.get("mini") != null) {
				    		setTimeout(function(){ window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario?mini=2018-01"; 
				    		}, 2000);
					    }
					break;
				    case 'Febrero':
					    if (mes == 'Febrero') {
					    	window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario?mini=2018-02";
					    }
				    break;
				    case 'Marzo':
					    if (mes == 'Marzo') {
					    	 window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario?mini=2018-03";
					    }	 
				    break;
				    case 'Abril':
					    if (mes == 'Abril') {
					    	window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario?mini=2018-04"; 	 
					    }
				    break;
				    case 'Mayo':
				    	if (mes == 'Mayo') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario?mini=2018-05";
				    	}
	 
				    break;				        
				    case 'Junio':
				    	if (mes == 'Junio') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario?mini=2018-06";
				    	}      
				   break;				
				    case 'Julio':
				    	if (mes == 'Julio') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario?mini=2018-07";
				    	}
	 
				    break;				
				    case 'Agosto':
				    	if (mes == 'Agosto') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario?mini=2018-08";
				    	}
	 
				    break;	
				    case 'Septiembre':
				    	if (mes == 'Septiembre') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario?mini=2018-09";
				    	}
	 
				    break;	
				    case 'Octubre':
				    	if (mes == 'Octubre') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario?mini=2018-10";
				    	}
	 
				    break;	
				    case 'Noviembre':
				    	if (mes == 'Noviembre') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario?mini=2018-11";
				    	}
	 
				    break;	
				    case 'Diciembre':
				    	if (mes == 'Diciembre') {
				    		window.location.href = Drupal.settings.agenda.dominio+"/calendario-consejero/diario?mini=2018-12";
				    	}
				    break;					        
				}
		});
	    // Loader Animation.	
		$(window).load(function(){
		    $('.loader').fadeOut(500);
		});
		// Add User and Rold to Date(Today). 
		if ($(".main-container .date-views-pager h2").length == false){
			$('.view-id-user_login .views-field-name .field-content').each(function (index, value) { 
			$("<h2> "+$('.view-id-user_login .views-label.views-label-name').text()+" "+$(this).context.innerText+"</h2>" ).appendTo("#block-system-main .date-views-pager.clearfix.date-nav-wrapper");
			});
		}
		// Add Year to Month Calendar (Consejero)
		$( ".page-calendario-consejero .date-views-pager h3 a" ).attr( "src", function() {
			var params = $(this).context.href.split("-");
		 	var arg = params[1].split("/");
		 	$('.page-calendario-consejero .date-views-pager h3 a').text($( ".page-calendario-consejero .date-views-pager h3 a" ).text() + ' '+ arg[2]);
		});
		// Add Year to Month Calendar (Estudiante)
		$( ".page-calendario-estudiante .date-views-pager h3 a" ).attr( "src", function() {
			var params = $(this).context.href.split("-");
			var arg = params[3].split("/");
		 	$('.page-calendario-estudiante .date-views-pager h3 a').text($( ".page-calendario-estudiante .date-views-pager h3 a" ).text() + ' '+ arg[2]);
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

			 $(document).ready(function(){
			 	var titulo = $(".date-views-pager h3 a").text();
			 	var month_now = titulo.split(" ");
			 	$('.view-header .dropdown .selected').text(month_now[0]);
			 });
	    }
  	};
}(jQuery));



