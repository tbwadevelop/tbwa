<?php 
  $logo_andes_file = file_load(variable_get('logo_andes_2', ''));
  $logo_andes_path = '';
  if (isset($logo_andes_file->uri)) {
    $logo_andes_path = file_create_url($logo_andes_file->uri);
  }
  $logo_decanatura_file = file_load(variable_get('logo_decanatura_2', ''));
  $logo_decanatura_path = '';
  if (isset($logo_decanatura_file->uri)) {
    $logo_decanatura_path = file_create_url($logo_decanatura_file->uri);
  }
  $normatividad_menu = menu_load('menu-normatividad-institucional');
  $normatividad_links = menu_load_links('menu-normatividad-institucional');
  $enlaces_rapidos_links = menu_load_links('menu-enlaces-rapidos');
  $enlaces_rapidos_menu = menu_load('menu-enlaces-rapidos');
  $redes_sociales_menu = menu_load('menu-redes-sociales');
  $redes_sociales_links = menu_load_links('menu-redes-sociales');
  $aux = 0;
?>
  

	<div class = "footer-info container-fluid">
				<div class ="col-md-12 col-sm-12 col-xs-12">
					<div class ="col-md-4 col-sm-4 col-xs-12 footer-info-b1">
						<div class ="col-md-12 col-sm-12 col-xs-12">
							<img src="<?php print $logo_andes_path ?>">
						</div>
						<div class ="col-md-12 col-sm-12 col-xs-12">
							<img src="<?php print $logo_decanatura_path ?>">
						</div>
						<div class ="col-md-12 col-sm-12 col-xs-12">
							<?php print variable_get('contact_info','') ?>
						</div>
					</div>
					<div class="col-xs-12 col-sm-4 col-md-4 footer-info-b2">
						<div class ="col-md-6 col-sm-6 col-xs-12">
							<div class = "col-md-12 col-sm-12 col-xs-12">
								<div class = "col-md-9 col-sm-9 col-xs-9">
									<div class = "franja"></div>
								</div>
								<h2><?php print $normatividad_menu['title'] ?></h2>
								<ul>
								<?php foreach($normatividad_links as $link):?>
									<li><?php print l($link['link_title'],$link['link_path'])?></li>
								<?php endforeach;?>
								</ul>
							</div>
						</div>
						<div class ="col-md-6 col-sm-6 col-xs-12">
							<div class = "col-md-12 col-sm-12 col-xs-12">
								<div class = "col-md-9 col-sm-9 col-xs-9">
									<div class = "franja"></div>
								</div>
								<h2><?php print $enlaces_rapidos_menu['title']?></h2>
								<ul>
								<?php foreach($enlaces_rapidos_links as $link):?>
									<li><?php print l($link['link_title'],$link['link_path'])?></li>
								<?php endforeach;?>	
								</ul>
							</div>
						</div>
					</div>	
					<div class ="col-md-4 col-sm-4 col-xs-12 footer-info-b3">
						<div class = "col-md-12 col-sm-12 col-xs-12">
							<h2><?php print $redes_sociales_menu['title']?></h2>
							<div class ="col-md-12 col-sm-12 col-xs-12">
								<?php foreach($redes_sociales_links as $link):?>
									<?php if($aux==4): ?>
										</div>
										<div class ="col-md-12 col-sm-12 col-xs-12">
									<?php endif;?>
									<div class = "col-md-3 col-sm-3 col-xs-12">
										<img src="<?php print file_create_url($link['options']['menu_icon']['path']) ?>">
									</div>
									<?php $aux++ ?>
								<?php endforeach;?>
							</div>
							<div class ="col-md-12 col-sm-12 col-xs-12 link-directorio-redes">
							  <a href = "">Directorio de redes</a>
							<div class ="col-md-12 col-sm-12 col-xs-12">
						</div>
					</div>

				</div>
			</div>