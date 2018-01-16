(function ($) {
	Drupal.behaviors.request = {
	    attach: function (context, settings) {
	     	$('.mini tr').each(function(){
	     		$(this).find('td').each(function(){
	     			var res = $(this).context.id.split("-");
	     			$(this).context.innerHTML = '<div class="month mini-day-on"> <a href="'+Drupal.settings.agenda.dominio+'/calendario-consejero/diario/'+res[1]+'-'+res[2]+'-'+res[3]+'/'+res[3]+'">'+$(this).context.innerText+'</a></div>';
			     })
			 })
	    }
  	};
}(jQuery));