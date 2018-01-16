(function ($) {
	Drupal.behaviors.request = {
	    attach: function (context, settings) {

	  	$('.view-id-user_login .views-field-name .field-content').each(function (index, value) { 
		  $("<h2> "+$('.view-id-user_login .views-label.views-label-name').text()+" "+$(this).context.innerText+"</h2>" ).appendTo( ".date-views-pager.clearfix.date-nav-wrapper" );
		});
	     	$('.mini tr').each(function(){
	     		$(this).find('td').each(function(){
	     			var res = $(this).context.id.split("-");
	     			$(this).context.innerHTML = '<div class="month mini-day-on"> <a href="'+Drupal.settings.agenda.dominio+'/calendario-consejero/diario/'+res[1]+'-'+res[2]+'-'+res[3]+'/'+res[3]+'">'+$(this).context.innerText+'</a></div>';
			     })
			 })
	    }
  	};
}(jQuery));