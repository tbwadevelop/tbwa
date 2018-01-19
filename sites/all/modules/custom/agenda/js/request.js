(function ($) {
	Drupal.behaviors.request = {
	    attach: function (context, settings) {

		$(window).load(function(){
		    $('.loader').fadeOut(500);
		});

		if ($(".main-container .date-views-pager h2").length == false){
		  	$('.view-id-user_login .views-field-name .field-content').each(function (index, value) { 
			  $("<h2> "+$('.view-id-user_login .views-label.views-label-name').text()+" "+$(this).context.innerText+"</h2>" ).appendTo(".view-display-id-page_3 .date-views-pager.clearfix.date-nav-wrapper");
			});
		}

		$( ".date-views-pager h3 a" ).attr( "src", function() {
			var params = $(this).context.href.split("-");
		 	var arg = params[1].split("/");
		 	$('.date-views-pager h3 a').text($( ".date-views-pager h3 a" ).text() + ' '+ arg[2]);
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