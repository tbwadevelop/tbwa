(function ($) {
	Drupal.behaviors.request = {
	    attach: function (context, settings) {
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




	    }
  	};
}(jQuery));


